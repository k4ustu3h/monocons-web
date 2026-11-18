import Image from "next/image";

import { M3eButton } from "@m3e/react/button";
import { M3eChip } from "@m3e/react/chips";
import { M3eHeading } from "@m3e/react/heading";

import SiGnome from "@icons-pack/react-simple-icons/icons/SiGnome";

export default function GNOME() {
	return (
		<section
			style={{
				alignItems: "stretch",
				display: "flex",
				flexWrap: "wrap",
				gap: "2em",
				justifyContent: "space-evenly",
				padding: "4em",
			}}
		>
			<Image
				alt="Monocons sample screenshot"
				height={1080}
				sizes="(max-width: 800px) 100vw, 800px"
				src="/images/sample-gnome.png"
				style={{
					borderRadius: "var(--md-sys-shape-corner-value-small)",
					height: "auto",
					maxWidth: "800px",
					width: "100%",
				}}
				width={1920}
			/>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "2em",
					maxWidth: "100%",
				}}
			>
				<div style={{ marginBottom: "auto" }}>
					<M3eChip
						style={{
							"--m3e-chip-label-text-color":
								"var(--md-sys-color-error)",
							"--m3e-outlined-chip-outline-color":
								"var(--md-sys-color-error)",
						}}
					>
						EXPERIMENTAL
					</M3eChip>
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						gap: "1em",
						marginBottom: "auto",
						marginTop: "auto",
					}}
				>
					<SiGnome size={64} />
					<M3eHeading>Use GNOME?</M3eHeading>
					<M3eHeading
						size="large"
						style={{ maxWidth: "25em" }}
						variant="title"
					>
						Monocons is also available for the GNOME desktop
						environment
					</M3eHeading>
					<div>
						<M3eButton
							href="/github-gnome"
							size="medium"
							variant="filled"
						>
							Try it out
						</M3eButton>
					</div>
				</div>
			</div>
		</section>
	);
}
