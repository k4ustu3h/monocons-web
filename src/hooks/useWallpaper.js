import { useEffect, useState } from "react";

const CACHE_KEY = "monocons_wallpaper_id";
const CACHE_DURATION_MS = 24 * 60 * 60 * 1000;

export default function useWallpaper() {
	const [wallpaperUrl, setWallpaperUrl] = useState(null);

	useEffect(() => {
		const now = Date.now();
		let selectedId = null;

		const cachedData = localStorage.getItem(CACHE_KEY);
		if (cachedData) {
			try {
				const { timestamp, id } = JSON.parse(cachedData);

				if (now - timestamp < CACHE_DURATION_MS) {
					selectedId = id;
				}
			} catch (e) {
				localStorage.removeItem(CACHE_KEY);
			}
		}

		if (!selectedId) {
			selectedId = Math.floor(Math.random() * 1084) + 1;

			localStorage.setItem(
				CACHE_KEY,
				JSON.stringify({
					timestamp: now,
					id: selectedId,
				}),
			);
		}

		setWallpaperUrl(`https://picsum.photos/id/${selectedId}/1920/1080`);
	}, []);

	return wallpaperUrl;
}
