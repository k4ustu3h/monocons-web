import { Download } from "@nine-thirty-five/material-symbols-react/rounded";

import SiGithub from "@icons-pack/react-simple-icons/icons/SiGithub";

import { M3eButton } from "@m3e/react/button";
import { M3eHeading } from "@m3e/react/heading";

import Monocons from "@/assets/svgs/Monocons";

export default function HeroOverlay() {
	return (
		<div
			style={{
				alignItems: "center",
				backdropFilter: "blur(24px)",
				backgroundColor:
					"color-mix(in srgb, var(--md-sys-color-surface-container-high) 75%, transparent)",
				borderRadius: "var(--md-sys-shape-corner-value-large)",
				boxSizing: "border-box",
				display: "flex",
				flexDirection: "column",
				gap: "1rem",
				margin: "0 1rem",
				maxWidth: "calc(100% - 2rem)",
				padding: "clamp(2rem, 5vw, 4rem)",
				position: "relative",
				textAlign: "center",
				zIndex: 1,
			}}
		>
			<Monocons height={100} width={100} />
			<M3eHeading variant="display">Monocons</M3eHeading>
			<div
				style={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "center",
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
	);
}
