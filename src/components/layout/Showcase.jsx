import { useCallback, useEffect, useRef, useState } from "react";

import useFetchIcons from "@/hooks/usefetchIcons";

import MonochromeIcon from "@/components/icons/MonochromeIcon";

export default function Showcase() {
	const { icons } = useFetchIcons();
	const [iconsLoaded, setIconsLoaded] = useState(false);
	const loadedCountRef = useRef(0);

	const handleLoad = useCallback(() => {
		loadedCountRef.current += 1;
		if (loadedCountRef.current >= icons.length) {
			setIconsLoaded(true);
		}
	}, [icons.length]);

	useEffect(() => {
		if (icons.length === 0) return;

		const timeoutId = setTimeout(() => {
			setIconsLoaded(true);
		}, 3000);

		return () => clearTimeout(timeoutId);
	}, [icons.length]);

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
					onLoad={handleLoad}
				/>
			))}
		</div>
	);
}
