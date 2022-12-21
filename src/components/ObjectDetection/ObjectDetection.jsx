import * as ml5 from "ml5";
import { useRef, useEffect, useState } from "react";
import Webcam from "react-webcam";

export default function ObjectDetection() {
	const webcamRef = useRef();
	const canvasRef = useRef();
	const [detectedResult, setDetectedResult] = useState();

	useEffect(() => {
		let detectionInterval;
		const ctx = canvasRef.current.getContext("2d");

		const modelLoaded = () => {
			const { width, height } = { width: "400", height: "400" };
			webcamRef.current.video.width = width;
			webcamRef.current.video.height = height;
			canvasRef.current.width = width;
			canvasRef.current.height = height;

			detectionInterval = setInterval(() => {
				detect();
			}, 1000);
		};

		const objectDetector = ml5.objectDetector("cocossd", modelLoaded);

		const detect = () => {
			if (webcamRef.current.video.readyState !== 4) {
				console.warn("Video not ready yet");
				return;
			}

			objectDetector.detect(webcamRef.current.video, (err, results) => {
				const { width, height } = { width: "400", height: "400" };
				ctx.clearRect(0, 0, width, height);
				if (results && results.length) {
					setDetectedResult(results);
					results.forEach((detection) => {
						ctx.beginPath();
						ctx.fillStyle = "rgba(255, 165, 0, 0.2)";
						const { label, x, y, width, height } = detection;
						ctx.fillText(label, x - 400, y - 405);
						ctx.fillRect(x - 400, y - 405, width, height);
						ctx.stroke();
					});
				}
				console.log(results);
			});
		};

		return () => {
			if (detectionInterval) {
				clearInterval(detectionInterval);
			}
		};
	}, []);

	return (
		<>
			<div className="rounded-lg">
				<Webcam ref={webcamRef} className="-z-10" />
				<canvas ref={canvasRef} className="relative z-10"></canvas>
			</div>
		</>
	);
}
