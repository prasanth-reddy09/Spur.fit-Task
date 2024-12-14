import React from "react";
import CurvedArrow from "../svgs/Arrow";
import { useDroppable } from "@dnd-kit/core";

const DemoBlock = () => {
	const { setNodeRef, isOver } = useDroppable({ id: "demoGraph" });

	return (
		<div
			className={`demoGraph w-full h-[200px] pt-16  ${
				isOver ? "bg-red-500" : ""
			} `}
			ref={setNodeRef}
		>
			<div className=" w-full ">
				<div className="absolute -left-24 top-8">
					<CurvedArrow />
				</div>
				<div className="font-bold w-full ml-32">
					Click the block or drag them here to begin building your workout
				</div>
			</div>

			<div className="flex gap-x-1 flex-nowrap h-[80px] w-full mt-6">
				<div className=" flex flex-col justify-between  w-[30%]">
					<p className="text-gray-700 ">Warm Up</p>
					<div className="h-[25px] w-full bg-gray-300"></div>
				</div>
				<div className="flex flex-col justify-between w-full">
					<p className="text-gray-700">Main Set</p>
					<div className=" h-[45px] w-full bg-gray-300"></div>
				</div>
				<div className=" flex flex-col justify-between w-[30%]">
					<p className="text-gray-700">Cool Down</p>
					<div className="h-[25px] w-full bg-gray-300"></div>
				</div>
			</div>
		</div>
	);
};

export default DemoBlock;
