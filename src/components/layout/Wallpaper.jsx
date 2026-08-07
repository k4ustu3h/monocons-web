import Image from "next/image";

import useTheme from "@/hooks/context/useTheme";

export default function Wallpaper() {
	const { wallpaperUrl } = useTheme();

	if (!wallpaperUrl) return null;

	return (
		<Image
			alt="Wallpaper"
			fill
			priority
			src={wallpaperUrl}
			style={{
				objectFit: "cover",
				zIndex: -1,
			}}
		/>
	);
}
