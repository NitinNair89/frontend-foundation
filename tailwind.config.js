/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				primary: "hsl(var(--text-primary))",
				secondary: "hsl(var(--text-secondary))",

				surface: {
					DEFAULT: "hsl(var(--surface-default))",
					subtle: "hsl(var(--surface-subtle))",
				},
				border: {
					subtle: "hsl(var(--border-subtle))",
				},
				action: {
					hover: "hsl(var(--action-hover))",
				},
			},
		},
	},
	plugins: [],
};
