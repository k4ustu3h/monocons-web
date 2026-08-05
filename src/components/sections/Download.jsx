import { M3eButton } from "@m3e/react/button";
import { M3eCard } from "@m3e/react/card";

import SiGithub from "@icons-pack/react-simple-icons/icons/SiGithub";
import SiObtainium from "@icons-pack/react-simple-icons/icons/SiObtainium";

import downloadSources from "@/data/downloadSources.json";

import IzzyOnDroid from "@/assets/svgs/IzzyOnDroid";

const iconMap = {
	github: <SiGithub height={48} width={48} />,
	izzyondroid: <IzzyOnDroid height={48} width={48} />,
	obtainium: <SiObtainium height={48} width={48} />,
};

export default function Download() {
	return (
		<section
			id="download"
			style={{
				display: "flex",
				flexWrap: "wrap",
				gap: "2em",
				justifyContent: "center",
				padding: "2em",
			}}
		>
			{downloadSources.map((source) => (
				<M3eCard key={source.title} style={{ maxWidth: "20em" }}>
					<div
						slot="header"
						style={{
							display: "flex",
							flexDirection: "column",
							gap: "0.5rem",
						}}
					>
						{iconMap[source.icon]}
						{source.title}
					</div>
					<div slot="content">{source.description}</div>
					<div end="true" slot="actions">
						<M3eButton href={source.href} variant="filled">
							{source.buttonText}
						</M3eButton>
					</div>
				</M3eCard>
			))}
		</section>
	);
}
