import HeroOverlay from "@/components/layout/HeroOverlay";
import Showcase from "@/components/layout/Showcase";
import Wallpaper from "@/components/layout/Wallpaper";

export default function Hero() {
	return (
		<section
			style={{
				boxSizing: "border-box",
				height: "100vh",
				padding: "24px",
			}}
		>
			<div
				style={{
					alignItems: "center",
					backgroundColor:
						"var(--md-sys-color-surface-container-lowest)",
					borderRadius: "var(--md-sys-shape-corner-value-large)",
					boxSizing: "border-box",
					display: "flex",
					flexDirection: "column",
					height: "100%",
					isolation: "isolate",
					justifyContent: "flex-end",
					overflow: "hidden",
					paddingBottom: "256px",
					position: "relative",
				}}
			>
				<Wallpaper />
				<Showcase />
				<HeroOverlay />
			</div>
		</section>
	);
}
