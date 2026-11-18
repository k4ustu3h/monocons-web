"use client";

import { useEffect, useMemo, useState } from "react";

import { ThemeContextObj } from "@/hooks/context/useTheme";

import useWallpaper from "@/hooks/useWallpaper";

import { extractSeedColor } from "@/utils/monet";

export default function ThemeContext({ children }) {
	const wallpaperUrl = useWallpaper();

	const [seedColor, setSeedColor] = useState("#2962ff");
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (!wallpaperUrl) return;

		let cancelled = false;

		async function generateTheme() {
			try {
				setIsLoading(true);
				const hex = await extractSeedColor(wallpaperUrl);
				if (!cancelled) {
					setSeedColor(hex);
				}
			} catch (error) {
				console.error("Theme extraction failed:", error);
				if (!cancelled) {
					setSeedColor("#2962ff");
				}
			} finally {
				if (!cancelled) {
					setIsLoading(false);
				}
			}
		}

		generateTheme();

		return () => {
			cancelled = true;
		};
	}, [wallpaperUrl]);

	const contextValue = useMemo(
		() => ({ isLoading, seedColor, wallpaperUrl }),
		[isLoading, seedColor, wallpaperUrl],
	);

	return (
		<ThemeContextObj.Provider value={contextValue}>
			{children}
		</ThemeContextObj.Provider>
	);
}
