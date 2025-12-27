"use client";

import { ThemeToggle } from "@/components/ThemeToggle";

export function AppHeader() {
	return (
		<header className="header">
			<h1 className="display-lg font-semibold">
				Frontend Foundation Template Starter
			</h1>
			<ThemeToggle />
		</header>
	);
}
