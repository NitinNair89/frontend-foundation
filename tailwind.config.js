/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				primary: "var(--color-primary)",
				secondary: "var(--color-secondary)",
				muted: "var(--color-muted)",
				disabled: "var(--color-disabled)",

				surface: {
					primary: "var(--surface-primary)",
					secondary: "var(--surface-secondary)",
					subtle: "var(--surface-subtle)",
				},
				action: {
					primary: {
						DEFAULT: "var(--action-primary)",
						hover: "var(--action-primary-hover)",
						focus: "var(--action-primary-focussed)",
						disabled: "var(--action-primary-disabled)",
					},
					secondary: {
						DEFAULT: "var(--action-secondary)",
						hover: "var(--action-secondary-hover)",
						focus: "var(--action-secondary-focussed)",
						disabled: "var(--action-secondary-disabled)",
					},
				},
				accent: "var(--accent)",
			},
		},
	},
	plugins: [],
};
