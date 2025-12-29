import { Card } from "@/components/Card";

const FEATURES = [
	{
		title: "Architecture & Boundaries",
		description:
			"How the app enforces swap-ability across state, transport, and CMS layers.",
		href: "https://github.com/NitinNair89/frontend-foundation/blob/main/docs/architecture.md",
	},
	{
		title: "Tailwind Architecture",
		description:
			"Token-driven theming and component-layer composition without utility bloat.",
		href: "https://github.com/NitinNair89/frontend-foundation/blob/main/docs/tailwind-architecture.md",
	},
	{
		title: "Theming System",
		description:
			"Light/dark mode powered by design tokens aligned with Figma variables.",
		href: "https://github.com/NitinNair89/frontend-foundation/blob/main/docs/theming.md",
	},
	{
		title: "State & Data Isolation",
		description:
			"How the frontend stays decoupled from transport and storage mechanisms.",
		href: "https://github.com/NitinNair89/frontend-foundation/blob/main/docs/state-and-data.md",
	},
];

export default function HomePage() {
	return (
		<section className="container">
			<h2 className="display-md text-gray-950 font-normal">
				A production-grade Next.js starter focused on architecture,
				swap-ability, and long-term maintainability.
			</h2>

			<div className="feature-grid">
				{FEATURES.map((feature) => (
					<Card
						key={feature.title}
						title={feature.title}
						description={feature.description}
						href={feature.href}
					/>
				))}
			</div>
		</section>
	);
}
