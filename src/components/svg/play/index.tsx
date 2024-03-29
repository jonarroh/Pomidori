function Play({
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
				viewBox="0 0 16 16"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M5.008 12.897a.644.644 0 0 1-.91-.227.719.719 0 0 1-.098-.364V3.693C4 3.31 4.296 3 4.662 3a.64.64 0 0 1 .346.103l6.677 4.306a.713.713 0 0 1 0 1.182l-6.677 4.306z"
					id="a"
				/>
			</svg>
		</>
	);
}

export default Play;
