"use client";

import Contributing from "@/components/sections/Contributing";
import Description from "@/components/sections/Description";
import Download from "@/components/sections/Download";
import Features from "@/components/sections/Features";
import Footer from "@/components/sections/Footer";
import GNOME from "@/components/sections/GNOME";
import Hero from "@/components/sections/Hero";

export default function Home() {
	return (
		<>
			<Hero />
			<Description />
			<Features />
			<Download />
			<Contributing />
			<GNOME />
			<Footer />
		</>
	);
}
