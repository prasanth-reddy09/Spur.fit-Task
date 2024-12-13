import React, { useState } from "react";

import Body from "./Body";
import Sidebar from "./Sidebar";
import { DndContext, DragOverlay } from "@dnd-kit/core";

const Main = () => {
	const [isBlockAdded, setBlockAdded] = useState(false);

	const [graphBlocks, setGraphBlocks] = useState([]);
	console.log("GraphBlocks", graphBlocks);
	const handleDragEnd = (event) => {
		const { active, over } = event;

		console.log("Active :", active, "  ", "Over : ", over);

		if (over?.id === "demoGraph") {
			setBlockAdded(true);
			setGraphBlocks(active.data.current.parts);
		}
	};

	return (
		<DndContext onDragEnd={handleDragEnd}>
			<div className="flex gap-x-4">
				<Sidebar />
				<Body isBlockAdded={isBlockAdded} graphBlocks={graphBlocks} />
			</div>
		</DndContext>
	);
};

export default Main;
