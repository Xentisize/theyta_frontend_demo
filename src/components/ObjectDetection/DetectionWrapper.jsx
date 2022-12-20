import { useState } from "react";
import ObjectDetection from "./Detection";

export default function DetectionWrapper() {
	const [detectedResults, setDetectedResults] = useState([]);

	return (
		<>
			<ObjectDetection setDetectedResults={setDetectedResults} />
			<ul>
				{detectedResults.map((obj, idx) => (
					<li key={idx}>
						{obj.label} <span>{obj.confidence}</span>
					</li>
				))}
			</ul>
		</>
	);
}
