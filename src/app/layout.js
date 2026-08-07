import { googleSansFlex } from "@/app/fonts";

import "@/styles/styles.css";

import ThemeContext from "@/contexts/ThemeContext";

import ThemeWrapper from "@/components/theme/ThemeWrapper";

export const metadata = {
	title: "Monocons",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={googleSansFlex.variable}>
			<body>
				<ThemeContext>
					<ThemeWrapper>{children}</ThemeWrapper>
				</ThemeContext>{" "}
			</body>
		</html>
	);
}
