"use client";

import { M3eTheme } from "@m3e/react/theme";

export default function ThemeWrapper({ children }) {
	return <M3eTheme color="#2962ff">{children}</M3eTheme>;
}
