import React, { createContext, useState, useContext } from "react";

const GraphContext = createContext();

export const GraphProvider = ({ children }) => {
	const [graphBlocks, setGraphBlocks] = useState([]);

	const handleDragEnd = (event) => {
		console.log("Drag end event: ", event); // Log the entire event object for debugging
		const { active, over } = event;

		if (!over) {
			return;
		}

		const blockId = active.id;
		const newStatus = over.id;

		// if (over && over.id === "graph") {
		setGraphBlocks((prevBlocks) => [...prevBlocks, blockId]); // Add active.id (the dragged item's id) to the graph
		console.log(graphBlocks);
		// }
		if (active) {
			console.log("Active Block ID: ", active.id); // Log the ID of the active block
		}
		console.log("over : ", over);
		if (over) {
			console.log("Over Block ID: ", over.id); // Log the ID of the hovered block
		}
	};

	return (
		<GraphContext.Provider
			value={{ graphBlocks, setGraphBlocks, handleDragEnd }}
		>
			{children}
		</GraphContext.Provider>
	);
};

export const useGraphContext = () => useContext(GraphContext);
