import { ReactP5Wrapper } from "react-p5-wrapper";
import { nutritionData } from "./nutritionData";
import { useState, useEffect } from "react";
import ml5 from "ml5";
// import * as font from "./Inconsolata.otf";

export default function ObjectDetection({ setDetectedResults, setDetectedFood }) {
	let video = null;
	let detector = null;
	let detections = [];
	let detectionInterval;
	let customFont;

	function detect() {
		detector.detect(video, onDetected);
	}

	function onDetected(error, results) {
		if (error) {
			console.error(error);
		}

		detections = results;
		// setDetectedResults(detections);
	}

	function sketch(p5) {
		p5.preload = () => {
			customFont = p5.loadFont("https://mdn.github.io/css-examples/web-fonts/VeraSeBd.ttf");
			detector = ml5.objectDetector("cocossd", {}, () => {
				detectionInterval = setInterval(() => {
					detect();
				}, 2000);
			});
		};

		p5.setup = () => {
			p5.createCanvas(400, 400, p5.WEBGL);

			video = p5.createCapture(p5.Video);
			video.size(400, 400);
			video.hide();
			video?.elt?.addEventListener("loadeddata", function () {
				if (video?.elt?.readyState >= 2) {
					console.log("Video element is ready!");
				}
			});
		};

		p5.draw = () => {
			if (!video) {
				return;
			}
			p5.image(video, -320, -240);

			if (detections?.length) {
				for (let i = 0; i < detections.length; i++) {
					drawResult(detections[i]);
				}
			}
		};

		const drawResult = (obj) => {
			drawBoundingBox(obj);
			drawLabel(obj);
		};

		const drawBoundingBox = (obj) => {
			p5.stroke("#7d36d9");
			p5.strokeWeight(4);
			p5.noFill();
			p5.rect(obj.x - 320, obj.y - 240, obj.width, obj.height);
		};

		const drawLabel = (obj) => {
			p5.textFont(customFont);
			// p5.textFont("Georgia");
			p5.noStroke();
			p5.fill("black");
			p5.textSize(16);
			p5.text(obj.label, obj.x + 10 - 320, obj.y + 24 - 240);
		};

		// p5.updateWithProps = (newProps) => {
		// 	if (newProps.setDetectedResults) {
		// 		p5.setDetectedResults = newProps.setDetectedResults;
		// 	}
		// };

		p5.mouseClicked = () => {
			const detectedLabels = detections.map((row) => row.label);
			const labels = [...new Set(detectedLabels)];

			const food = nutritionData.filter((row) => labels.includes(row.foodType));
			setDetectedFood(food);

			// setDetectedFood(detections);
			// console.log("FOOD: ", food);
		};
	}

	useEffect(() => {
		const interval = setInterval(() => {
			if (video) {
				detect();
				if (detections && detections.length) {
					console.log("INTERVAL: ", detections);
				}
			}
		}, 2000);

		return () => {
			clearInterval(interval);
			clearInterval(detectionInterval);
		};
	}, []);

	return (
		<div className="my-2 flex flex-col">
			<p className="my-2 text-lg font-semibold">Click to View the Data</p>
			<ReactP5Wrapper sketch={sketch} setDetectedResults={setDetectedResults} setDetectedFood={setDetectedFood} />
		</div>
	);
}
