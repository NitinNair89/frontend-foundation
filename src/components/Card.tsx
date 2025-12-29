import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

type CardProps = {
	title: string;
	description: string;
	href: string;
};

export function Card({ title, description, href }: CardProps) {
	return (
		<div className="card">
			<h2 className="title">{title}</h2>
			<p className="card-body">{description}</p>
			<div className="card-actions">
				<Link href={href} target="_blank" className="link flex items-center">
					<p>Read Docs</p>
					<SquareArrowOutUpRight size={16} strokeWidth={1} className="ms-1" />
				</Link>
			</div>
		</div>
	);
}
