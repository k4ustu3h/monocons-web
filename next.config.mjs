const nextConfig = {
	images: {
		formats: ["image/avif", "image/webp"],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "picsum.photos",
			},
		],
	},
	async redirects() {
		return [
			{
				source: "/github-android",
				destination: "https://github.com/k4ustu3h/monocons-android",
				permanent: true,
			},
			{
				source: "/github-gnome",
				destination: "https://github.com/k4ustu3h/monocons-gnome",
				permanent: true,
			},
			{
				source: "/sponsors",
				destination: "https://github.com/sponsors/k4ustu3h",
				permanent: true,
			},
			{
				source: "/dashboard",
				destination: "https://monoconsrequests.vercel.app/",
				permanent: false,
			},
		];
	},
};

export default nextConfig;
