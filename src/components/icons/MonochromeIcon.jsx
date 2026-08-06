import { M3eShape } from "@m3e/react/shape";

export default function MonochromeIcon({ filename, onLoad }) {
	const imageUrl = `https://raw.githubusercontent.com/k4ustu3h/monocons-android/main/svgs/${filename}`;

	return (
		<M3eShape
			name="square"
			style={{
				"--m3e-shape-container-color": "var(--md-sys-color-surface)",
				"--m3e-shape-size": "56px",
			}}
		>
			<img
				alt=""
				onError={onLoad}
				onLoad={onLoad}
				src={imageUrl}
				style={{
					opacity: 0,
					position: "absolute",
					width: 0,
					height: 0,
				}}
			/>

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
							WebkitMaskImage: `url('${imageUrl}')`,
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
