import React from "react";
import DraggableBlock from "./DraggableBlock";

const Blocks = ({ setGraphBlocks, setBlockAdded }) => {
	const blocks = [
		{
			id: "block-1",
			type: "reference",
			graphId: "1",
			parts: [{ distance: 3, height: 30 }],
		},
		{
			id: "block-2",
			type: "reference",
			graphId: "2",

			parts: [{ distance: 3, height: 80 }],
		},
		{
			id: "block-3",
			type: "reference",
			graphId: "3",

			parts: [{ distance: 3, height: 45 }],
		},
		{
			id: "block-4",
			type: "reference",
			graphId: "4",

			parts: [
				{ distance: 2, height: 50 },
				{ distance: 2, height: 40 },
			],
		},
		{
			id: "block-5",
			graphId: "5",
			type: "reference",

			parts: [
				{ distance: 1, height: 40 },
				{ distance: 1, height: 50 },
				{ distance: 1, height: 65 },
				{ distance: 1, height: 80 },
			],
		},
		{
			id: "block-6",
			graphId: "6",
			type: "reference",

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
					<DraggableBlock
						key={block.id}
						block={block}
						id={block.id}
						graphId={block.graphId}
						parts={block.parts}
						type={block.type}
						setGraphBlocks={setGraphBlocks}
						setBlockAdded={setBlockAdded}
					/>
				))}
			</div>
			<div className="main-Block-2 flex gap-x-2 mt-6">
				{blocks.slice(3).map((block) => (
					<DraggableBlock
						key={block.id}
						block={block}
						graphId={block.graphId}
						id={block.id}
						type={block.type}
						parts={block.parts}
						setGraphBlocks={setGraphBlocks}
						setBlockAdded={setBlockAdded}
					/>
				))}
			</div>
		</div>
	);
};

export default Blocks;
