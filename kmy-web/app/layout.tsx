import type { Metadata } from "next"
import "./globals.css"
import { inter } from "@/app/ui/fonts"
import TopNav from "@/app/ui/hearder";


export const metadata: Metadata = {
	title: "SkyNode Studio|天穹编织社",
	description: "每一行代码，都是世界的一缕天空",
};

export default function RootLayout({
	children,
	}: Readonly<{
	children: React.ReactNode;
	}>) {
	return (
		<html lang="en">
		<body
			className={`${inter.className} antialiased bg-purple-900 min-h-screen h-full`} 
		>
			<TopNav />
			<div className="mt-[100px] bg-purple-900 px-40 w-full flex flex-row items-center justify-between">
			{children}
			</div>
		</body>
		</html>
	);
}
