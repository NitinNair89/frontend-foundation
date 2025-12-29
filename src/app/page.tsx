import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

const FEATURES = [
	{
		id: 1,
		title: "Architecture & Boundaries",
		description:
			"How the app enforces swap-ability across state, transport, and CMS layers.",
		href: "https://github.com/NitinNair89/frontend-foundation/blob/main/docs/architecture.md",
	},
	{
		id: 2,
		title: "Tailwind Architecture",
		description:
			"Token-driven theming and component-layer composition without utility bloat.",
		href: "https://github.com/NitinNair89/frontend-foundation/blob/main/docs/tailwind-architecture.md",
	},
	{
		id: 3,
		title: "Theming System",
		description:
			"Light/dark mode powered by design tokens aligned with Figma variables.",
		href: "/design/theme",
	},
	{
		id: 4,
		title: "State & Data Isolation",
		description:
			"How the frontend stays decoupled from transport and storage mechanisms.",
		href: "https://github.com/NitinNair89/frontend-foundation/blob/main/docs/state-and-data.md",
	},
];

export default function HomePage() {
	return (
		<section className="container w-full">
			<div className="body-lg">
				<h2 className="font-semibold">
					A production-grade Next.js starter focused on architecture,
					swap-ability, and long-term maintainability.
				</h2>
			</div>

			<div className="grid grid-cols-2 gap-4 my-4 w-full">
				{FEATURES.map(({ id, title, description, href }) => (
					<div className="card w-3xl" key={id}>
						<h2 className="title">{title}</h2>
						<p className="card-body">{description}</p>
						<div className="card-actions">
							<Link href={href} target="_blank" className="link link-primary">
								<p>Read Docs</p>
								<SquareArrowOutUpRight className="icon icon-end" />
							</Link>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
