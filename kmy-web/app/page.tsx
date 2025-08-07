import "./globals.css"

import BusinessScope from "./ui/indexSection/businessScope";
import IndexAboutUs from "./ui/indexSection/aboutUs";
import IndexFocusPoint from "./ui/indexSection/focusPoint";
import Founders from "./ui/indexSection/founders";
import IndexProjectTemp from "./ui/indexSection/projectTemp";


export default function Home() {
	
	return (
		<main className="w-full min-h-screen text-white ">
			{/* Focus Point Ares */}
			<IndexFocusPoint/>

			{/* Index About us section */}
			<IndexAboutUs/>

			{/* Business Scope */}
			<BusinessScope/>

			{/* Project Temp */}
			<IndexProjectTemp/>

			{/* Founders */}
			<Founders/>
			

		</main>
		);
	}


