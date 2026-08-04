import { M3eHeading } from "@m3e/react/heading";

import Monocons from "@/assets/svgs/Monocons";

export default function Hero() {
	return (
		<section
			style={{
				boxSizing: "border-box",
				height: "100vh",
				padding: "24px",
			}}
		>
			<div
				style={{
					alignItems: "center",
					backgroundColor:
						"var(--md-sys-color-surface-container-high)",
					borderRadius: "var(--md-sys-shape-corner-value-large)",
					boxSizing: "border-box",
					display: "flex",
					flexDirection: "column",
					height: "100%",
					justifyContent: "flex-end",
					paddingBottom: "256px",
				}}
			>
				<div
					style={{
						alignItems: "center",
						display: "flex",
						flexDirection: "column",
						gap: "1rem",
					}}
				>
					<Monocons height={100} width={100} />
					<M3eHeading variant="display">Monocons</M3eHeading>
				</div>
			</div>
		</section>
	);
}
