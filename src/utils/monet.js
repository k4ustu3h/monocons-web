import {
	hexFromArgb,
	sourceColorFromImage,
} from "@evowizz/material-color-utilities-canary";

const THEME_CACHE_KEY = "monocons_theme_seed";

export async function extractSeedColor(imageUrl) {
	try {
		const cached = localStorage.getItem(THEME_CACHE_KEY);
		if (cached) {
			const parsed = JSON.parse(cached);
			if (parsed.wallpaperUrl === imageUrl && parsed.seedColor) {
				return parsed.seedColor;
			}
		}
	} catch (e) {}

	return new Promise((resolve, reject) => {
		const img = new Image();
		img.crossOrigin = "anonymous";
		img.src = imageUrl.replace(/\/1920\/1080$/, "/128/72");

		img.onload = async () => {
			try {
				const argb = await sourceColorFromImage(img);
				const hex = hexFromArgb(argb);
				try {
					localStorage.setItem(
						THEME_CACHE_KEY,
						JSON.stringify({
							seedColor: hex,
							wallpaperUrl: imageUrl,
						}),
					);
				} catch (e) {
					// Ignore storage errors
				}
				resolve(hex);
			} catch (error) {
				reject(error);
			}
		};

		img.onerror = () => {
			reject(new Error("Failed to load image for color extraction."));
		};
	});
}
