import { useState } from "react";

import fetchIcons from "@/hooks/fetchIcons";

import MonochromeIcon from "@/components/icons/MonochromeIcon";

export default function Showcase() {
	const { icons } = fetchIcons();

	const [loadedCount, setLoadedCount] = useState(0);

	const iconsLoaded = icons.length > 0 && loadedCount >= icons.length;

	return (
		<div
			style={{
				alignContent: "start",
				display: "grid",
				gap: "2rem",
				gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))",
				inset: 0,
				justifyItems: "center",
				padding: "2rem",
				pointerEvents: "none",
				position: "absolute",
				opacity: iconsLoaded ? 1 : 0,
				transition: "opacity 0.5s ease-in-out",
				zIndex: 0,
			}}
		>
			{icons.map((filename) => (
				<MonochromeIcon
					key={filename}
					filename={filename}
					onLoad={() => setLoadedCount((prev) => prev + 1)}
				/>
			))}
		</div>
	);
}
