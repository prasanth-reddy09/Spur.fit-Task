import React from "react";

const CurvedArrow = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="226.77" // 6 cm in pixels
			height="50" // Adjust height as needed
			viewBox="0 0 226.77 50"
		>
			<path
				d="M10,40 Q113.385,10,216.77,40" // Adjusted for 6 cm length
				stroke="black"
				fill="transparent"
				strokeWidth="2"
				markerEnd="url(#arrowhead)"
			/>
			<defs>
				<marker
					id="arrowhead"
					markerWidth="10"
					markerHeight="7"
					refX="10"
					refY="3.5"
					orient="auto"
				>
					<polygon points="0 0, 10 3.5, 0 7" fill="black" />
				</marker>
			</defs>
		</svg>
	);
};

export default CurvedArrow;
