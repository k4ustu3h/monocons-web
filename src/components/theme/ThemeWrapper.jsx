"use client";

import { useSyncExternalStore } from "react";

import { M3eTheme } from "@m3e/react/theme";

import useTheme from "@/hooks/context/useTheme";

const emptySubscribe = () => () => {};

export default function ThemeWrapper({ children }) {
	const { seedColor } = useTheme();

	const mounted = useSyncExternalStore(
		emptySubscribe,
		() => true,
		() => false,
	);

	return (
		<M3eTheme color={seedColor || "#2962ff"} variant="expressive">
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
