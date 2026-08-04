import { M3eButton } from "@m3e/react/button";
import { M3eCard } from "@m3e/react/card";

import { SiGithub } from "@icons-pack/react-simple-icons";

export default function Download() {
	return (
		<section
			id="download"
			style={{ display: "flex", justifyContent: "center" }}
		>
			<M3eCard>
				<div
					slot="header"
					style={{
						display: "flex",
						flexDirection: "column",
						gap: "0.5rem",
					}}
				>
					<SiGithub height={48} width={48} />
					GitHub
				</div>
				<div slot="content">
					Download the latest realease directly from GitHub release
					page.
				</div>
				<div end="true" slot="actions">
					<M3eButton
						href="https://github.com/k4ustu3h/monocons-android/releases/latest"
						variant="filled"
					>
						Download Latest
					</M3eButton>
				</div>
			</M3eCard>
		</section>
	);
}
