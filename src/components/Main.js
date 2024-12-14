import React, { useState, useMemo } from "react";
import Body from "./Body";
import Sidebar from "./Sidebar";
import {
	DndContext,
	DragOverlay,
	useSensors,
	useSensor,
	PointerSensor,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";

const Main = () => {
	const [isBlockAdded, setBlockAdded] = useState(false);
	// const [totalWidth, setTotalWidth] = useState(3);

	const [graphBlocks, setGraphBlocks] = useState([]);
	const [sortableDrag, SetSortableDrag] = useState(null);

	console.log("graphBlocks", graphBlocks);

	const IDS = useMemo(() => graphBlocks.map((block) => block.graphId));

	const calculate = (graphBlocks) => {
		if (!graphBlocks.length) {
			return;
		}

		let value = graphBlocks.reduce((accu1, graphBlock) => {
			return (
				accu1 +
				graphBlock.parts.reduce((accu, part) => {
					return accu + part.distance;
				}, 0)
			);
		}, 0);

		console.log("value", value);

		return value;
	};

	const sensors = useSensors(
		useSensor(PointerSensor, {
			activationConstraint: {
				distance: 200,
			},
		})
	);

	const totalWidth = useMemo(() => calculate(graphBlocks), [graphBlocks]);

	console.log("GraphBlocks", graphBlocks);
	const handleDragEnd = (event) => {
		const { active, over } = event;

		if (!over) return;

		console.log("Active :", active, "  ", "Over : ", over);

		if (over?.id === "demoGraph") {
			setBlockAdded(true);
			setGraphBlocks((prev) => [...prev, active.data.current]);
		}

		const activeId = active.id;
		const overId = over.id;

		if (activeId === overId) return;

		setGraphBlocks((graphBlocks) => {
			const activeIndex = graphBlocks.findIndex(
				(block) => block.graphId === activeId
			);

			const overIndex = graphBlocks.findIndex(
				(block) => block.graphId === overId
			);

			return arrayMove(graphBlocks, activeIndex, overIndex);
		});
	};

	return (
		<DndContext onDragEnd={handleDragEnd} sensors={sensors}>
			<div className="flex gap-x-4">
				<Sidebar
					setGraphBlocks={setGraphBlocks}
					setBlockAdded={setBlockAdded}
				/>
				<Body
					isBlockAdded={isBlockAdded}
					graphBlocks={graphBlocks}
					totalWidth={totalWidth}
					setGraphBlocks={setGraphBlocks}
					setBlockAdded={setBlockAdded}
					IDS={IDS}
				/>
			</div>
		</DndContext>
	);
};

export default Main;
