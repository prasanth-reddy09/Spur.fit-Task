import React from "react";

const Table = ({ graphBlocks }) => {
	console.log("Table", graphBlocks);
	return (
		<div className="Table border px-4 py-3 rounded-xl shadow-lg">
			<div className="w-full px-4 border-t-[1px] border-gray-500 border-b-[1px] h-6 "></div>
		</div>
	);
};

export default Table;
