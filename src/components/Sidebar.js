import React from "react";
import { SlQuestion } from "react-icons/sl";
import Blocks from "./Blocks";

const Sidebar = ({ setGraphBlocks, setBlockAdded }) => {
	return (
		<div className="sidebar px-3 py-4 w-[25%] h-screen border shadow-md rounded-xl ">
			<div className="flex border-b border-b-gray-400 pb-2 items-center">
				<p className="font-bold text-lg">
					Click or drag the blocks to build workout
				</p>
				<span className="text-gray-400 text-xl">
					<SlQuestion />
				</span>
			</div>

			<div className="blocks">
				<Blocks setGraphBlocks={setGraphBlocks} setBlockAdded={setBlockAdded} />
			</div>
		</div>
	);
};

export default Sidebar;
