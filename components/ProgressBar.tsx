import React from "react";
import { IconType } from "react-icons/lib";

interface ProgressBarProps {
	Icon?: IconType;
	text: string;
	value: string;
}

export default function ProgressBar({ Icon, text, value }: ProgressBarProps) {
	return (
		<div className="mt-5">
			<div
				className="flex justify-between items-center mb-5"
				style={{
					width: value,
				}}
			>
				<div className="flex items-center justify-center gap-2">
					{Icon && <Icon className="text-4xl text-white" />}
					<h1 className="text-white">{text}</h1>
				</div>
				<h1 className="text-white">{value}</h1>
			</div>
			<div className="w-full rounded-full h-2.5 bg-secondary">
				<div
					className="bg-blue-600 h-2.5 rounded-full"
					style={{
						width: value,
					}}
				></div>
			</div>
		</div>
	);
}