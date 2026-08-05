import { M3eButton } from "@m3e/react/button";
import { M3eCard } from "@m3e/react/card";

import SiGithub from "@icons-pack/react-simple-icons/icons/SiGithub";
import SiObtainium from "@icons-pack/react-simple-icons/icons/SiObtainium";

import IzzyOnDroid from "@/assets/svgs/IzzyOnDroid";

const downloadSources = [
	{
		title: "GitHub",
		icon: <SiGithub height={48} width={48} />,
		description:
			"Download the latest release directly from the GitHub releases page.",
		href: "https://github.com/k4ustu3h/monocons-android/releases/latest",
		buttonText: "Download Latest",
	},
	{
		title: "IzzyOnDroid",
		icon: <IzzyOnDroid height={48} width={48} />,
		description:
			"Download Monocons directly via the IzzyOnDroid F-Droid repository.",
		href: "https://apt.izzysoft.de/fdroid/index/apk/k4ustu3h.monocons.izzy",
		buttonText: "Get on IzzyOnDroid",
	},
	{
		title: "Obtainium",
		icon: <SiObtainium height={48} width={48} />,
		description:
			"Download Monocons using the Obtainium app to enable auto updates.",
		href: "https://apps.obtainium.imranr.dev/redirect?r=obtainium://add/https://github.com/k4ustu3h/monocons-android",
		buttonText: "Get on Obtainium",
	},
];

export default function Download() {
	return (
		<section
			id="download"
			style={{
				display: "flex",
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
						{source.icon}
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
