import { useSyncExternalStore } from "react";

const CACHE_KEY = "monocons_wallpaper_id";
const CACHE_DURATION_MS = 24 * 60 * 60 * 1000;

let cachedWallpaperUrl = null;

function getWallpaperUrl() {
	if (cachedWallpaperUrl) return cachedWallpaperUrl;
	if (typeof window === "undefined") return null;

	const now = Date.now();
	let selectedId = null;

	try {
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
	} catch (e) {
		selectedId = Math.floor(Math.random() * 1084) + 1;
	}

	cachedWallpaperUrl = `https://picsum.photos/id/${selectedId}/1920/1080`;
	return cachedWallpaperUrl;
}

function subscribe(callback) {
	const handleStorage = (event) => {
		if (event.key === CACHE_KEY) {
			cachedWallpaperUrl = null;
			callback();
		}
	};
	window.addEventListener("storage", handleStorage);
	return () => window.removeEventListener("storage", handleStorage);
}

const getServerSnapshot = () => null;

export default function useWallpaper() {
	return useSyncExternalStore(
		subscribe,
		getWallpaperUrl,
		getServerSnapshot,
	);
}
