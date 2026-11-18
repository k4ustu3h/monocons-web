import { useEffect, useState } from "react";

const GITHUB_API_URL =
	"https://api.github.com/repos/k4ustu3h/monocons-android/contents/svgs";
const CACHE_KEY = "monocons_showcase_cache";
const CACHE_DURATION_MS = 24 * 60 * 60 * 1000;
const COUNT = 160;

function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

export default function useFetchIcons() {
	const [icons, setIcons] = useState([]);

	useEffect(() => {
		async function getIcons() {
			try {
				const now = Date.now();
				const cachedData = localStorage.getItem(CACHE_KEY);

				if (cachedData) {
					try {
						const { timestamp, filenames } = JSON.parse(cachedData);

						if (now - timestamp < CACHE_DURATION_MS) {
							setIcons(filenames.slice(0, COUNT));
							return;
						}
					} catch (e) {
						localStorage.removeItem(CACHE_KEY);
					}
				}

				const response = await fetch(GITHUB_API_URL);

				if (response.ok) {
					const files = await response.json();
					const rawFilenames = files
						.filter((file) => file.name.endsWith(".svg"))
						.map((file) => file.name);

					const shuffledFilenames = shuffle(rawFilenames).slice(
						0,
						COUNT,
					);

					localStorage.setItem(
						CACHE_KEY,
						JSON.stringify({
							filenames: shuffledFilenames,
							timestamp: now,
						}),
					);

					setIcons(shuffledFilenames);
				}
			} catch (error) {
				console.error("Failed to fetch showcase icons:", error);
			}
		}

		getIcons();
	}, []);

	return { icons };
}
