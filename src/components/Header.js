import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { LuPen } from "react-icons/lu";

const Header = () => {
	return (
		<div className="header w-full py-3 px-7  mb-4 flex justify-between items-center  border  rounded-bl-2xl rounded-br-2xl shadow-md">
			<div className="flex gap-x-4 items-center">
				<span className="text-lg">
					<FaArrowLeft />
				</span>
				<h1 className="font-semibold text-lg ">Workout</h1>
				<span className="text-gray-600 text-xl">
					<LuPen />
				</span>
			</div>
			<div className="">
				<button className="text-white font-bold bg-purple-600 rounded-full px-6 py-2">
					Save Workout
				</button>
			</div>
		</div>
	);
};

export default Header;
