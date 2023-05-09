function Stop({
	width = 20,
	height = 20
}: {
	width: number;
	height: number;
}) {
	return (
		<>
			<svg
				fill="currentColor"
				width={width}
				height={height}
				viewBox="0 0 24 24"
				id="stop"
				data-name="Flat Color"
				xmlns="http://www.w3.org/2000/svg">
				<rect
					id="primary"
					x="2"
					y="2"
					width="20"
					height="20"
					rx="2"></rect>
			</svg>
		</>
	);
}

export default Stop;
