import React from "react";
import { Resizable } from "re-resizable";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const GraphBlock = ({ blockData, totalWidth }) => {
	console.log(blockData);

	const {
		setNodeRef,
		attributes,
		listeners,
		transform,
		transition,
		isDragging,
	} = useSortable({
		id: blockData.graphId,
		data: { type: "block", parts: blockData.parts },
	});

	const style = {
		transition,
		transform: CSS.Transform.toString(transform),
	};

	return (
		<div
			className="flex items-end w-full gap-x-0.5"
			ref={setNodeRef}
			style={style}
			{...attributes}
			{...listeners}
		>
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
							height: part.height * 2,
						}}
						maxWidth={part.distance * Math.floor(852 / totalWidth)}
						maxHeight={part.height * 2}
						minWidth={part.distance * Math.floor(852 / totalWidth)}
						minHeight={part.height * 2}
						handleClasses={{}}
						handleStyles={{
							top: { display: "none" },
							right: { display: "none" },
							bottom: { display: "none" },
							left: { display: "none" },
							topLeft: { display: "none" },
							topRight: { display: "none" },
							bottomLeft: { display: "none" },
							bottomRight: { display: "none" },
						}}
						className={`bg-blue-600 cursor-pointer`}
					>
						{part.height}
					</Resizable>
				))}
		</div>
	);
};

export default GraphBlock;
