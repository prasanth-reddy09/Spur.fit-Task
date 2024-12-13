import React from "react";
import { Resizable } from "re-resizable";

const GraphBlock = ({ blockData, totalWidth }) => {
	console.log(blockData);
	return (
		<div className="flex items-end w-full gap-x-0.5">
			{blockData &&
				blockData.parts.map((part, index) => (
					// <div
					// 	key={index}
					// 	style={{
					// 		height: `${part.height}%`,
					// 		width: `${part.width}px`,
					// 	}}
					// 	className={`bg-blue-600`}
					// >
					// 	{part.height + part.distance}
					// </div>
					<Resizable
						key={index}
						defaultSize={{
							width: part.distance * Math.floor(852 / totalWidth),
							height: part.height * 2, // Adjusting percentage to pixel value
						}}
						className={`bg-blue-600`}
					>
						{part.height}
					</Resizable>
				))}
		</div>
	);
};

export default GraphBlock;
