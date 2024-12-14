import React from "react";
import DemoBlock from "./DemoBlock";
import DraggedGraphs from "./DraggedGraphs";
import Table from "./Table";
const Body = ({
	isBlockAdded,
	graphBlocks,
	totalWidth,
	setGraphBlocks,
	setBlockAdded,
	IDS,
}) => {
	console.log("graphBlocks :", graphBlocks);

	let xAxisValues = [];

	for (let i = 0; i <= totalWidth; ) {
		if (totalWidth <= 12) {
			xAxisValues.push(i);
			i = i + 1;
		} else if (totalWidth > 12 && totalWidth <= 20) {
			xAxisValues.push(i);
			i = i + 2;
		} else {
			xAxisValues.push(i);
			i = i + 3;
		}
	}

	console.log("xAxisValues", xAxisValues);
	return (
		<div className="flex-grow ">
			<div className="flex flex-col gap-y-8">
				<div className="border pt-14 px-4 rounded-xl shadow-lg relative">
					<button
						className="bg-gray-300 py-0.5 px-2 rounded-md absolute right-2 top-2"
						onClick={() => {
							setGraphBlocks([]);
							setBlockAdded(false);
						}}
					>
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
								<DraggedGraphs
									graphBlocks={graphBlocks}
									totalWidth={totalWidth}
									IDS={IDS}
								/>
							)}
						</div>
					</div>
					<div className="x-axis ml-14 mt-2">
						{
							<ul className="list-none flex gap-x-[100px]">
								<li className="text-gray-400">0</li>
								<li className="text-gray-400">2</li>
								<li className="text-gray-400">4</li>
								<li className="text-gray-400">6</li>
								<li className="text-gray-400">8</li>
								<li className="text-gray-400">10</li>
								<li className="text-gray-400">12</li>
								<li className="text-gray-400">14</li>
							</ul>
						}

						{/* {xAxisValues.length && (
							<ul
								className="list-none flex"
								style={{
									gap: `${Math.floor(852 / xAxisValues.length)}px`,
								}}
							>
								{xAxisValues.map((value) => (
									<div>{value}</div>
								))}
							</ul>
						)} */}
					</div>
				</div>
				<div>
					<Table graphBlocks={graphBlocks} />
				</div>
			</div>
		</div>
	);
};

export default Body;
