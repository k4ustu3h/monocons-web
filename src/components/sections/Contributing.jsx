import {
	Crowdsource,
	Table,
} from "@nine-thirty-five/material-symbols-react/rounded";

import SiGithubsponsors from "@icons-pack/react-simple-icons/icons/SiGithubsponsors";

import contributingData from "@/data/contributing.json";

import CardSection from "@/components/layout/CardSection";

const iconMap = {
	contribute: <Crowdsource height={48} width={48} />,
	dashboard: <Table height={48} width={48} />,
	sponsor: <SiGithubsponsors height={48} width={48} />,
};

export default function Contributing() {
	return (
		<CardSection
			bgColor="var(--md-sys-color-secondary-container)"
			data={contributingData}
			fgColor="var(--md-sys-color-on-secondary-container)"
			iconMap={iconMap}
			title="Get Involved"
		/>
	);
}
