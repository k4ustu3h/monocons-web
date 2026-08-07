"use client";

import { useEffect, useState } from "react";

import { M3eTheme } from "@m3e/react/theme";

import useTheme from "@/hooks/context/useTheme";

export default function ThemeWrapper({ children }) {
	const { seedColor } = useTheme();

	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);
	return (
		<M3eTheme color={seedColor}>
			<div
				style={{
					opacity: mounted ? 1 : 0,
					transition: "opacity 0.4s ease-in-out",
				}}
			>
				{children}
			</div>
		</M3eTheme>
	);
}
