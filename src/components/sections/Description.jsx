import Image from "next/image";

import { M3eHeading } from "@m3e/react/heading";

export default function Description() {
	return (
		<section
			style={{
				alignItems: "center",
				display: "flex",
				flexWrap: "wrap",
				gap: "2em",
				justifyContent: "space-evenly",
				padding: "4em",
			}}
		>
			<Image
				alt="Monocons sample screenshot"
				height={2513}
				src="/images/sample.png"
				style={{
					width: "256px",
					height: "auto",
				}}
				width={1187}
			/>
			<M3eHeading size="large" style={{ width: "25em" }} variant="title">
				Monocons is a monochrome icon pack that provides uniform icons
				for applications. The designs are modeled after each app&apos;s
				official monochrome icon, or the brand&apos;s logo if a monochrome
				variant does not exist.
			</M3eHeading>
		</section>
	);
}
