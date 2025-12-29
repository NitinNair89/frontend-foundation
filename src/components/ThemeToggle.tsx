"use client";

import { useMounted } from "@/hooks/useMounted";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
	const { theme, setTheme } = useTheme();
	const mounted = useMounted();

	if (!mounted) return null;

	return (
		<button
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			className="btn"
		>
			{theme === "dark" ? <Sun className="icon" /> : <Moon className="icon" />}
		</button>
	);
}
