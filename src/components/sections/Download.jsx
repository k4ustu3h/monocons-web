import SiGithub from "@icons-pack/react-simple-icons/icons/SiGithub";
import SiObtainium from "@icons-pack/react-simple-icons/icons/SiObtainium";

import downloadSources from "@/data/downloadSources.json";

import IzzyOnDroid from "@/assets/svgs/IzzyOnDroid";

import CardSection from "@/components/layout/CardSection";

const iconMap = {
	github: <SiGithub height={48} width={48} />,
	izzyondroid: <IzzyOnDroid height={48} width={48} />,
	obtainium: <SiObtainium height={48} width={48} />,
};

export default function Download() {
	return (
		<CardSection
			data={downloadSources}
			iconMap={iconMap}
			id="download"
			title="Downloads"
		/>
	);
}
