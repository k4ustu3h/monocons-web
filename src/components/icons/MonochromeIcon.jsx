import { M3eShape } from "@m3e/react/shape";

export default function MonochromeIcon({ filename }) {
	return (
		<M3eShape
			name="square"
			style={{
				"--m3e-shape-container-color": "var(--md-sys-color-surface)",
				"--m3e-shape-size": "56px",
			}}
		>
			<div
				style={{
					alignItems: "center",
					display: "flex",
					height: "100%",
					justifyContent: "center",
					width: "100%",
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
		</M3eShape>
	);
}
