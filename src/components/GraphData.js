import React from "react";
import { useDroppable } from "@dnd-kit/core";

const GraphData = ({ blocks }) => {
	const { setNodeRef, isOver } = useDroppable({
		id: "graph", // This is the droppable id
	});

	return (
		<div
			ref={setNodeRef} // This links the DOM element to the drop area
			className={`graph z-50 border-dashed border-2 h-40 border-gray-400 p-4 ${
				isOver ? "bg-green-100" : "bg-white"
			}`}
		>
			<h3 className="text-gray-600">Graph Area</h3>
			<div>
				{blocks.map((block, index) => (
					<div
						key={index}
						className="block bg-gray-300 p-2 my-2 rounded text-center"
					>
						{block}
					</div>
				))}
			</div>
		</div>
	);
};

export default GraphData;
