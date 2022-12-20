import ml5 from "ml5";
import { ReactP5Wrapper } from "react-p5-wrapper";
import { useRef, useEffect, useState } from "react";
import Webcam from "react-webcam";

export default function ObjectDetection2() {
	let video = null;
	let detector = null;
	let detections = [];
	let detecting = false;
	let detectionInterval;
	let customFont;

	const modelLoaded = () => {
		detectionInterval = setInterval(() => {
			detect();
		}, 1000);
	};

	const objectDetector = ml5.objectDetector("cocossd", modelLoaded);

	let detect = () => {
		if (video.elt.readyState >= 2) {
			console.warn("Video not ready yet");
			return;
		}

		objectDetector.detect(video, (err, results) => {
			if (results && results.length) {
				setDetectedResults(results);
			}
			console.log(detectedResults);
		});
	};

	const [detectedResults, setDetectedResults] = useState();

	useEffect(() => {
		let detectionInterval;

		return () => {
			if (detectionInterval) {
				clearInterval(detectionInterval);
			}
		};
	}, []);

	function sketch(p5) {
		p5.preload = () => {
			customFont = p5.loadFont("Inconsolata.otf");
			detector = ml5.objectDetector("cocossd", {}, () => {
				console.log("Model loaded!");

				detectionInterval = setInterval(() => {
					detect();
				}, 2000);
			});
			console.log("detector is detected");
		};

		p5.setup = () => {
			p5.textFont(customFont);

			p5.createCanvas(640, 480, p5.WEBGL);

			video = p5.createCapture(p5.VIDEO);
			video.size(640, 480);
			video.hide();
			console.log("Video element is created");
			video.elt.addEventListener("loadeddata", function () {
				if (video.elt.readyState >= 2) {
					console.log("Video element is ready!");
				}
			});
		};

		p5.draw = () => {
			if (!video || !detecting) {
				return;
			}

			p5.image(video, -320, -240);

			for (let i = 0; i < detections.length; i++) {
				drawResult(detections[i]);
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
			p5.noStroke();
			p5.fill("black");
			p5.textSize(24);
			p5.text(obj.label, obj.x + 10 - 320, obj.y + 24 - 240);
		};
	}

	return (
		<>
			<ReactP5Wrapper sketch={sketch} />
			<div></div>
		</>
	);
}
