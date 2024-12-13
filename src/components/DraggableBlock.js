import React from "react";
import { useDraggable } from "@dnd-kit/core";

const DraggableBlock = ({ id, parts }) => {
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id: id,
		data: { parts },
	});

	const style = {
		transform: transform
			? `translate3d(${transform.x}px, ${transform.y}px, 0)`
			: undefined,
	};

	return (
		<div
			ref={setNodeRef}
			{...attributes}
			{...listeners}
			style={style}
			className="child-block w-[34%] h-[70px] border flex items-end gap-x-1 z-30 rounded-xl bg-slate-300"
		>
			{parts.map((part, index) => (
				<div
					key={index}
					style={{ height: `${part.height}%` }}
					className={`w-full ${index === 0 ? "rounded-bl-xl" : ""} ${
						index === parts.length - 1 ? "rounded-br-xl" : ""
					} bg-blue-600`}
				></div>
			))}
		</div>
	);
};

export default DraggableBlock;
