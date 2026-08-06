import { M3eHeading } from "@m3e/react/heading";

import Monocons from "@/assets/svgs/Monocons";

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer
			style={{
				backgroundColor: "var(--md-sys-color-tertiary-container)",
				color: "var(--md-sys-color-on-tertiary-container)",
				marginTop: "auto",
				padding: "3rem 2rem",
			}}
		>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "2rem",
					margin: "0 auto",
					maxWidth: "1200px",
				}}
			>
				<div
					style={{
						display: "flex",
						flexWrap: "wrap",
						gap: "1rem",
						justifyContent: "space-between",
					}}
				>
					<div
						style={{
							alignItems: "center",
							display: "flex",
							gap: "0.5em",
						}}
					>
						<Monocons height={32} width={32} />
						<M3eHeading variant="title">Monocons</M3eHeading>
					</div>
					<p
						style={{
							color: "var(--md-sys-color-on-surface-variant)",
							lineHeight: "1.5",
							margin: 0,
							maxWidth: "300px",
						}}
					>
						A monochrome icon pack featuring official app designs
						and brand logos.
					</p>
				</div>
				<M3eHeading style={{ textAlign: "center" }} variant="title">
					© {year} Monocons Contributors
				</M3eHeading>
			</div>
		</footer>
	);
}
