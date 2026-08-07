"use client";

import { useEffect, useState } from "react";

import { ThemeContextObj } from "@/hooks/context/useTheme";

import useWallpaper from "@/hooks/useWallpaper";

import { extractSeedColor } from "@/utils/monet";

export default function ThemeContext({ children }) {
	const wallpaperUrl = useWallpaper();

	const [seedColor, setSeedColor] = useState("#2962ff");
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (!wallpaperUrl) return;

		async function generateTheme() {
			try {
				setIsLoading(true);
				const hex = await extractSeedColor(wallpaperUrl);
				setSeedColor(hex);
			} catch (error) {
				console.error("Theme extraction failed:", error);
				setSeedColor("#2962ff");
			} finally {
				setIsLoading(false);
			}
		}

		generateTheme();
	}, [wallpaperUrl]);

	return (
		<ThemeContextObj.Provider
			value={{ wallpaperUrl, seedColor, isLoading }}
		>
			{children}
		</ThemeContextObj.Provider>
	);
}
