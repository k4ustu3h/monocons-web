import { M3eButton } from "@m3e/react/button";
import { M3eHeading } from "@m3e/react/heading";

import { Download } from "@nine-thirty-five/material-symbols-react/rounded";

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
					<div
						style={{
							display: "flex",
							gap: "1rem",
						}}
					>
						<M3eButton
							href="https://github.com/k4ustu3h/monocons-android/releases/latest"
							variant="filled"
						>
							<Download slot="icon" />
							Download Latest
						</M3eButton>
						<M3eButton
							href="https://github.com/k4ustu3h/monocons-android"
							variant="tonal"
						>
							View on GitHub
						</M3eButton>
					</div>
				</div>
			</div>
		</section>
	);
}
