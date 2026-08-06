import Image from "next/image";

export default function Wallpaper() {
	return (
		<Image
			fill
			priority
			src="https://picsum.photos/1920/1080"
			style={{
				objectFit: "cover",
				zIndex: -1,
			}}
		/>
	);
}
