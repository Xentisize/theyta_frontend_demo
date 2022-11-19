import { useState } from "react";

const imagesDB = [
	{
		name: "junk.jpg",
		keywords: ["junk", "pizza", "fat", "food", "tasty", "unhealthy"],
		path: "/images/TAC/junk.jpg",
	},
	{
		name: "junk_2.jpg",
		keywords: ["junk", "fried", "food", "fat", "tasty", "unhealthy"],
		path: "/images/TAC/junk_2.jpg",
	},
	{
		name: "scale.jpg",
		keywords: ["weight", "weigh", "scale", "heavy", "fat", "loss"],
		path: "/images/TAC/scale.jpg",
	},
	{
		name: "scale_2.jpg",
		keywords: ["weight", "weigh", "heavy", "fat", "belly", "diet"],
		path: "/images/TAC/scale_2.jpg",
	},
	{
		name: "sandwich.jpg",
		keywords: ["food", "diet", "sandwich", "healthy", "nutrition"],
		path: "/images/TAC/sandwich.jpg",
	},
	{
		name: "healthy.jpg",
		keywords: ["food", "healthy", "tomato", "diet", "nutrition"],
		path: "/images/TAC/healthy.jpg",
	},
	{
		name: "veggie.jpg",
		keywords: ["food", "healthy", "veggie", "vegetable", "nutrition", "raw"],
		path: "/images/TAC/veggie.jpg",
	},
	{
		name: "veggie_2.jpg",
		keywords: ["food", "healthy", "veggie", "vegetable", "nutrition", "raw"],
		path: "/images/TAC/veggie_2.jpg",
	},
	{
		name: "workout.jpg",
		keywords: ["workout", "exercise", "loss", "weight", "lifestyle", "healthy", "health", "gym"],
		path: "/images/TAC/workout.jpg",
	},
	{
		name: "workout_2.jpg",
		keywords: ["workout", "exercise", "loss", "weight", "lifestyle", "healthy", "gym", "health"],
		path: "/images/TAC/workout_2.jpg",
	},
	{
		name: "workout_3.jpg",
		keywords: ["workout", "exercise", "loss", "weight", "lifestyle", "healthy", "gym", "health"],
		path: "/images/TAC/workout_3.jpg",
	},
	{
		name: "workout_4.jpg",
		keywords: ["workout", "exercise", "loss", "weight", "lifestyle", "healthy", "gym", "health"],
		path: "/images/TAC/workout_4.jpg",
	},
	{
		name: "frustrated.jpg",
		keywords: ["weight", "worried", "frustrated", "sad", "heavy", "diet", "pounds"],
		path: "/images/TAC/frustrated.jpg",
	},
	{
		name: "frustrated_2.jpg",
		keywords: ["weight", "worried", "frustrated", "sad", "heavy", "diet", "gym", "muscle", "strong"],
		path: "/images/TAC/frustrated_2.jpg",
	},
];

export default function ImageSidebar({ title, setCoverImage }) {
	return (
		<>
			<div className="flex flex-col flex-wrap content-center overflow-y-auto py-3">
				<h2 className="text-center text-xl font-semibold text-slate-400">Suggested Images</h2>
				{imagesDB
					.filter((image) => {
						if (!title) {
							return false;
						}
						for (const word of title) {
							if (image.keywords.includes(word.toLowerCase())) {
								return true;
							}
						}
					})
					.map((image) => (
						<img
							src={image.path}
							className="avatar m-2 w-2/3 cursor-pointer gap-y-2 rounded-2xl ring ring-slate-200 hover:ring-indigo-300"
							alt="images"
							key={image.name}
							onClick={() => setCoverImage(image.path)}
						/>
					))}
			</div>
		</>
	);
}
