import { M3eButton } from "@m3e/react/button";
import { M3eHeading } from "@m3e/react/heading";

import SiGithub from "@icons-pack/react-simple-icons/icons/SiGithub";

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
						"var(--md-sys-color-surface-container-lowest)",
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
						<M3eButton href="#download" variant="filled">
							<Download slot="icon" />
							Download
						</M3eButton>
						<M3eButton href="/github-android" variant="tonal">
							<SiGithub slot="icon" />
							View on GitHub
						</M3eButton>
					</div>
				</div>
			</div>
		</section>
	);
}
