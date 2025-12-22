import { AppHeader } from "@/components/AppHeader";
import { ThemeProvider } from "@/providers/theme-provider";
import "@/styles/global.css";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<meta name="author" content="Nitin Chandran Nair" />
				<meta
					name="description"
					content="Long-lived, swap-safe, production-grade frontend foundation"
				/>
				<meta
					name="keywords"
					content="frontend, template, foundation, nextjs, tailwind"
				/>
				<title>Frontend Foundation Template</title>
			</head>
			<body className="min-h-screen bg-surface text-primary">
				<ThemeProvider>
					<AppHeader />
					<main>{children}</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
