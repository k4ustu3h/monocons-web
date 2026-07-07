import { Google_Sans_Flex } from "next/font/google";

export const googleSansFlex = Google_Sans_Flex({
	adjustFontFallback: false,
	axes: ["ROND", "slnt", "wght", "wdth"],
	display: "swap",
	fallback: ["system-ui"],
	style: "normal",
	subsets: ["latin"],
	variable: "--font-google-sans-flex",
});
