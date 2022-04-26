import React from "react";
import { DiReact } from "react-icons/di";
import { SiNextdotjs, SiTsnode, SiExpress } from "react-icons/si";
import { FaFlag, FaCode } from "react-icons/fa";
import { RiSwordFill } from "react-icons/ri";
import ProgressBar from "./ProgressBar";

export default function Ability() {
	return (
		<div>
			<div className="flex items-center gap-2 mb-10">
				<h1 className="text-white text-2xl font-bold">Ability</h1>
				<RiSwordFill className="text-white text-xl" />
			</div>
			<div className="flex items-center gap-2 mb-5">
				<h2 className="pl-5 text-xl text-gray-300">Coding</h2>
				<FaCode className="text-white text-xl" />
			</div>
			<div className="pl-10">
				<ProgressBar Icon={DiReact} text="React" value="90%" />
				<ProgressBar Icon={SiNextdotjs} text="Next.js" value="85%" />
				<ProgressBar Icon={SiTsnode} text="Typescript" value="80%" />
				<ProgressBar Icon={SiExpress} text="Express.js" value="85%" />
			</div>
			<div className="flex items-center gap-2 mt-10 mb-5">
				<h2 className="pl-5 text-xl text-gray-300">Language</h2>
				<FaFlag className="text-white text-xl" />
			</div>

			<div className="pl-10">
				<ProgressBar text="English (Upper-Intermediate)" value="85%" />
				<ProgressBar text="Khmer (mother tounge)" value="99%" />
			</div>
		</div>
	);
}