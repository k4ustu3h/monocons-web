import {
	hexFromArgb,
	sourceColorFromImage,
} from "@evowizz/material-color-utilities-canary";

export async function extractSeedColor(imageUrl) {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.crossOrigin = "anonymous";
		img.src = imageUrl;

		img.onload = async () => {
			try {
				const argb = await sourceColorFromImage(img);
				const hex = hexFromArgb(argb);
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
