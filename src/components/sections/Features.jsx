import SiAndroid from "@icons-pack/react-simple-icons/icons/SiAndroid";
import SiGithub from "@icons-pack/react-simple-icons/icons/SiGithub";
import SiMaterialdesign from "@icons-pack/react-simple-icons/icons/SiMaterialdesign";

import featuresData from "@/data/features.json";

import Lawnicons from "@/assets/svgs/Lawnicons";

import CardSection from "@/components/layout/CardSection";

const iconMap = {
	android: <SiAndroid height={48} width={48} />,
	github: <SiGithub height={48} width={48} />,
	lawnicons: <Lawnicons height={48} width={48} />,
	md: <SiMaterialdesign height={48} width={48} />,
};

export default function Features() {
	return (
		<CardSection
			bgColor="var(--md-sys-color-primary-container)"
			data={featuresData}
			fgColor="var(--md-sys-color-on-primary-container)"
			iconMap={iconMap}
			title="Features"
		/>
	);
}
