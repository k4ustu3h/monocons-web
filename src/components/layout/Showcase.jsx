import fetchIcons from "@/hooks/fetchIcons";
import MonochromeIcon from "@/components/icons/MonochromeIcon";

export default function Showcase() {
	const { icons } = fetchIcons(200);

	return (
		<div
			style={{
				alignContent: "start",
				display: "grid",
				gap: "2rem",
				gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))",
				inset: 0,
				justifyItems: "center",
				padding: "2rem",
				pointerEvents: "none",
				position: "absolute",
				transition: "opacity 0.5s ease-in-out",
				zIndex: 0,
			}}
		>
			{(icons.length > 0 ? icons : Array.from({ length: 200 })).map(
				(filename, index) => (
					<MonochromeIcon
						key={filename || index}
						filename={filename}
					/>
				),
			)}
		</div>
	);
}
