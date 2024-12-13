import React from "react";
import DraggableBlock from "./DraggableBlock";

const Blocks = () => {
	const blocks = [
		{
			id: "block-1",
			parts: [{ distance: 3, height: 30 }],
		},
		{
			id: "block-2",
			parts: [{ distance: 3, height: 80 }],
		},
		{
			id: "block-3",
			parts: [{ distance: 3, height: 45 }],
		},
		{
			id: "block-4",
			parts: [
				{ distance: 2, height: 50 },
				{ distance: 2, height: 40 },
			],
		},
		{
			id: "block-5",
			parts: [
				{ distance: 1, height: 40 },
				{ distance: 1, height: 50 },
				{ distance: 1, height: 65 },
				{ distance: 1, height: 80 },
			],
		},
		{
			id: "block-6",
			parts: [
				{ distance: 2, height: 80 },
				{ distance: 1, height: 65 },
				{ distance: 1, height: 50 },
				{ distance: 1, height: 40 },
			],
		},
	];

	return (
		<div className="mt-7">
			<div className="main-Block-1 flex gap-x-2">
				{blocks.slice(0, 3).map((block) => (
					<DraggableBlock key={block.id} id={block.id} parts={block.parts} />
				))}
			</div>
			<div className="main-Block-2 flex gap-x-2 mt-6">
				{blocks.slice(3).map((block) => (
					<DraggableBlock key={block.id} id={block.id} parts={block.parts} />
				))}
			</div>
		</div>
	);
};

export default Blocks;
