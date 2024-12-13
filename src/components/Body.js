import React, { useState } from "react";
import DemoBlock from "./DemoBlock";

const Body = () => {
	const [isBlockAdded, setIsBlockAdded] = useState(false);
	return (
		<div className="w-[73%] border pt-14 px-4 rounded-xl shadow-lg relative">
			<button className="bg-gray-300 py-0.5 px-2 rounded-md absolute right-2 top-2">
				Clear All
			</button>

			<div className="flex">
				<div className="y-axis">
					<ul className="list-none flex flex-col gap-y-5">
						<li className="text-gray-400">100%</li>
						<li className="text-gray-400">75%</li>
						<li className="text-gray-400">50%</li>
						<li className="text-gray-400">25%</li>
						<li className="text-gray-400">0%</li>
					</ul>
				</div>
				<div className="graph-body self-end ml-3 relative w-full">
					{!isBlockAdded ? (
						<div className="absolute bottom-0 w-full">
							<DemoBlock />
						</div>
					) : (
						<div>Graph Data</div>
					)}
				</div>
			</div>

			<div className="x-axis ml-14 mt-2">
				<ul className="list-none flex gap-x-[100px]">
					<li className="text-gray-400">0</li>
					<li className="text-gray-400">2</li>
					<li className="text-gray-400">4</li>
					<li className="text-gray-400">6</li>
					<li className="text-gray-400">8</li>
				</ul>
			</div>
		</div>
	);
};

export default Body;
