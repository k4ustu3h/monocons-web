export default function MonochromeIcon({ filename }) {
	return (
		<div
			style={{
				alignItems: "center",
				backgroundColor: "var(--md-sys-color-surface)",
				borderRadius: "100%",
				display: "flex",
				height: "56px",
				justifyContent: "center",
				width: "56px",
			}}
		>
			{filename && (
				<div
					style={{
						backgroundColor: "var(--md-sys-color-on-surface)",
						height: "32px",
						WebkitMaskImage: `url('https://raw.githubusercontent.com/k4ustu3h/monocons-android/main/svgs/${filename}')`,
						WebkitMaskPosition: "center",
						WebkitMaskRepeat: "no-repeat",
						WebkitMaskSize: "contain",
						width: "32px",
					}}
				/>
			)}
		</div>
	);
}
