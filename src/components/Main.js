import React from "react";
import Body from "./Body";
import Sidebar from "./Sidebar";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { useGraphContext } from "./GraphProvider";

const Main = () => {
	const { handleDragEnd } = useGraphContext();
	return (
		<DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
			<div className="flex gap-x-4">
				<Sidebar />
				<Body />
			</div>
		</DndContext>
	);
};

export default Main;
