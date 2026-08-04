"use client";

import { useEffect, useState } from "react";

import { M3eTheme } from "@m3e/react/theme";

export default function ThemeWrapper({ children }) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);
	return (
		<M3eTheme color="#2962ff">
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
