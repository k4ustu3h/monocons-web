import { googleSansFlex } from "@/app/fonts";

import "@/styles/index.css";
import ThemeWrapper from "@/components/pages/theme/ThemeWrapper";

export const metadata = {
	title: "Monocons",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={googleSansFlex.variable}>
			<body>
				<ThemeWrapper>{children}</ThemeWrapper>
			</body>
		</html>
	);
}
