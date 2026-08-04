import Image from "next/image";

import { M3eHeading } from "@m3e/react/heading";

export default function Hero() {
	return (
		<section>
			<div
				style={{
					alignItems: "center",
					display: "flex",
					flexDirection: "column",
					gap: "2rem",
					height: "100vh",
					justifyContent: "center",
				}}
			>
				<Image
					alt="Monocons Icon"
					height={100}
					src="/icon.svg"
					width={100}
				/>
				<M3eHeading variant="display">Monocons</M3eHeading>
			</div>
		</section>
	);
}
