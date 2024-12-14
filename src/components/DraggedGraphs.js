import React, { useMemo } from "react";

import GraphBlock from "./GraphBlock";
import {
	SortableContext,
	horizontalListSortingStrategy,
} from "@dnd-kit/sortable";

const DraggedGraphs = ({ graphBlocks, totalWidth, IDS }) => {
	console.log("Sorted", graphBlocks);
	console.log("IDS", IDS);
	return (
		<div>
			<SortableContext items={IDS} strategy={horizontalListSortingStrategy}>
				<div className="flex gap-x-3">
					{graphBlocks &&
						graphBlocks?.map((block, index) => (
							<GraphBlock
								key={index}
								blockData={block}
								totalWidth={totalWidth}
							/>
						))}
				</div>
			</SortableContext>
		</div>
	);
};

export default DraggedGraphs;
