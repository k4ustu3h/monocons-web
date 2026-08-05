import { M3eCard } from "@m3e/react/card";
import { M3eHeading } from "@m3e/react/heading";

import SiAndroid from "@icons-pack/react-simple-icons/icons/SiAndroid";
import SiGithub from "@icons-pack/react-simple-icons/icons/SiGithub";
import SiMaterialdesign from "@icons-pack/react-simple-icons/icons/SiMaterialdesign";

import featuresData from "@/data/features.json";

import Lawnicons from "@/assets/svgs/Lawnicons";

const iconMap = {
	android: <SiAndroid height={48} width={48} />,
	github: <SiGithub height={48} width={48} />,
	lawnicons: <Lawnicons height={48} width={48} />,
	md: <SiMaterialdesign height={48} width={48} />,
};

export default function Features() {
	return (
		<section
			style={{
				alignItems: "center",
				backgroundColor: "var(--md-sys-color-primary-container)",
				display: "flex",
				padding: "4em 2em",
				flexDirection: "column",
				gap: "2em",
			}}
		>
			<M3eHeading
				style={{ color: "var(--md-sys-color-on-primary-container)" }}
			>
				Features
			</M3eHeading>
			<div
				style={{
					display: "flex",
					gap: "2em",
					justifyContent: "center",
					flexWrap: "wrap",
				}}
			>
				{featuresData.map((feature) => (
					<M3eCard
						key={feature.title}
						style={{ maxWidth: "20em" }}
						variant="elevated"
					>
						<M3eHeading
							emphasized
							slot="header"
							style={{
								display: "flex",
								flexDirection: "column",
								gap: "0.5rem",
							}}
							variant="headline"
						>
							{iconMap[feature.icon]}
							{feature.title}
						</M3eHeading>
						<div slot="content">{feature.description}</div>
					</M3eCard>
				))}
			</div>
		</section>
	);
}
