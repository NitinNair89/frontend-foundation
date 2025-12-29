"use client";

import Button from "@/components/Button";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

const ThemePage = () => {
	return (
		<div className="container">
			<div className="flex flex-col gap-2 body-md">
				<p>
					Foundation Template starter kit ships with a{" "}
					<strong>built-in theme system by default</strong> - enabling you to
					focus on feature development right from the start.
				</p>
				<p>
					To understand how theming works in{" "}
					<Link
						className="link text-primary"
						href="https://github.com/NitinNair89/frontend-foundation"
						target="_blank"
					>
						Frontend Foundation Template
						<SquareArrowOutUpRight className="icon icon-end" />
					</Link>
					, read the documentation using the links below.
					<br />
					<Link
						className="link text-primary"
						href="https://github.com/NitinNair89/frontend-foundation/blob/main/docs/theme-system.md"
						target="_blank"
					>
						Theme System Documentation
						<SquareArrowOutUpRight className="icon icon-end" />
					</Link>
				</p>
			</div>

			<hr className="my-4" />
			<section className="card my-4">
				<h3 className="card-title uppercase">Button</h3>
				<div className="card-body">
					<p>
						Interactive component with two variations - <strong>primary</strong>{" "}
						and <strong>secondary</strong>.
					</p>
					<p>
						Each variant has styles applied for - <strong>hover</strong>,{" "}
						<strong>focussed</strong> and <strong>disabled</strong> state.
					</p>
					<p>
						These styles can be customised in -{" "}
						<span className="inline-code">
							src\styles\components\Button.css
						</span>
					</p>
				</div>

				<div className="flex flex-row gap-2">
					<div className="flex flex-col gap-2">
						<Button text="Primary" variant="primary" onPress={() => {}} />
						<Button
							text="Primary"
							variant="primary"
							disabled
							onPress={() => {}}
						/>
					</div>
					<div className="flex flex-col gap-2">
						<Button text="Secondary" variant="secondary" onPress={() => {}} />
						<Button
							text="Secondary"
							variant="secondary"
							disabled
							onPress={() => {}}
						/>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ThemePage;
