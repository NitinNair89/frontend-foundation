import Link from "next/link";

type FeatureCardProps = {
	title: string;
	description: string;
	href: string;
};

export function FeatureCard({ title, description, href }: FeatureCardProps) {
	return (
		<Link href={href} target="_blank" className="feature-card">
			<h2 className="feature-title">{title}</h2>
			<p className="feature-description">{description}</p>
		</Link>
	);
}
