import React from "react";
import Body from "./Body";
import Sidebar from "./Sidebar";
import { DndContext, DragOverlay } from "@dnd-kit/core";

const Main = () => {
	const handleDragEnd = () => {};

	return (
		<DndContext onDragEnd={handleDragEnd}>
			<div className="flex gap-x-4">
				<Sidebar />
				<Body />
			</div>
		</DndContext>
	);
};

export default Main;
