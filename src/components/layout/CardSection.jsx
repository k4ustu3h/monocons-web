import { M3eButton } from "@m3e/react/button";
import { M3eCard } from "@m3e/react/card";
import { M3eHeading } from "@m3e/react/heading";

export default function CardSection({
	bgColor,
	data,
	fgColor,
	iconMap,
	id,
	title,
}) {
	return (
		<section
			id={id}
			style={{
				alignItems: "center",
				backgroundColor: bgColor,
				display: "flex",
				padding: "4em 2em",
				flexDirection: "column",
				gap: "2em",
			}}
		>
			{title && (
				<M3eHeading style={{ color: fgColor }}>{title}</M3eHeading>
			)}
			<div
				style={{
					display: "flex",
					gap: "2em",
					justifyContent: "center",
					flexWrap: "wrap",
				}}
			>
				{data.map((item) => (
					<M3eCard
						key={item.title}
						style={{ maxWidth: "20em" }}
						variant="elevated"
					>
						<M3eHeading
							emphasized
							slot="header"
							style={{
								display: "flex",
								flexDirection: "column",
								gap: "0.5rem",
							}}
							variant="headline"
						>
							{iconMap[item.icon]}
							{item.title}
						</M3eHeading>
						<div slot="content">{item.description}</div>
						{item.href && item.buttonText && (
							<div end="true" slot="actions">
								<M3eButton href={item.href} variant="filled">
									{item.buttonText}
								</M3eButton>
							</div>
						)}
					</M3eCard>
				))}
			</div>
		</section>
	);
}
