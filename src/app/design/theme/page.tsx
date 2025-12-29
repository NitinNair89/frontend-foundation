"use client";

import Button from "@/components/Button";

const ThemePage = () => {
	return (
		<div className="container">
			<h2 className="title">Theme System</h2>
			<section className="card my-4">
				<h3 className="card-title uppercase">Button</h3>
				<div className="card-body">
					<p>
						Interactive component with two variations - <strong>primary</strong>{" "}
						and <strong>secondary</strong>. Each variant has styles applied for
						- <em>hover</em>, <em>focussed</em> and <em>disabled</em> state.
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
