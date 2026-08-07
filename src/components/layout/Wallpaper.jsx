import Image from "next/image";

import useWallpaper from "@/hooks/useWallpaper";

export default function Wallpaper() {
	const wallpaperUrl = useWallpaper();

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
