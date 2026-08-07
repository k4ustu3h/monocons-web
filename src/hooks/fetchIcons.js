import { useEffect, useState } from "react";

const GITHUB_API_URL =
	"https://api.github.com/repos/k4ustu3h/monocons-android/contents/svgs";
const CACHE_KEY = "monocons_showcase_cache";
const CACHE_DURATION_MS = 24 * 60 * 60 * 1000;

export default function fetchIcons() {
	const [icons, setIcons] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const count = 160;

	useEffect(() => {
		async function getIcons() {
			try {
				setIsLoading(true);
				const now = Date.now();
				const cachedData = localStorage.getItem(CACHE_KEY);

				if (cachedData) {
					try {
						const { timestamp, filenames } = JSON.parse(cachedData);

						if (now - timestamp < CACHE_DURATION_MS) {
							console.log(
								"Using cached Monocons. Icons will not change until cache expires.",
							);
							setIcons(filenames.slice(0, count));
							setIsLoading(false);
							return;
						}
					} catch (e) {
						localStorage.removeItem(CACHE_KEY);
					}
				}

				console.log("Cache expired or missing. Fetching new icons...");
				const response = await fetch(GITHUB_API_URL);

				if (response.ok) {
					const files = await response.json();
					const rawFilenames = files
						.filter((file) => file.name.endsWith(".svg"))
						.map((file) => file.name);

					const shuffledFilenames = [...rawFilenames].sort(
						() => 0.5 - Math.random(),
					);

					localStorage.setItem(
						CACHE_KEY,
						JSON.stringify({
							timestamp: now,
							filenames: shuffledFilenames,
						}),
					);

					setIcons(shuffledFilenames.slice(0, count));
				}
			} catch (error) {
				console.error("Failed to fetch showcase icons:", error);
			} finally {
				setIsLoading(false);
			}
		}

		getIcons();
	}, [count]);

	return { icons, isLoading };
}
