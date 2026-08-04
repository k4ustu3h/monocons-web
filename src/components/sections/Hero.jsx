import { M3eHeading } from "@m3e/react/heading";

import Monocons from "@/assets/svgs/Monocons";

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
				<Monocons height={100} width={100} />
				<M3eHeading variant="display">Monocons</M3eHeading>
			</div>
		</section>
	);
}
