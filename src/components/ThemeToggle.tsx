"use client";

import { useMounted } from "@/hooks/useMounted";
import { useTheme } from "next-themes";

export function ThemeToggle() {
	const { theme, setTheme } = useTheme();
	const mounted = useMounted();

	if (!mounted) return null;

	return (
		<button
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			className="rounded-md border px-3 py-1 text-sm"
		>
			{theme === "dark" ? "Light" : "Dark"}
		</button>
	);
}
