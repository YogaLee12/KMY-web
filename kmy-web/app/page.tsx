import "./globals.css"
import Footer from "./ui/footer";
import BusinessScope from "./ui/indexSection/businessScope";
import IndexAboutUs from "./ui/indexSection/aboutUs";
import IndexFocusPoint from "./ui/indexSection/focusPoint";
import Founders from "./ui/indexSection/founders";
import IndexProjectTemp from "./ui/indexSection/projectTemp";


export default function Home() {
	return (
		<main className="w-full bg-purple-700 min-h-screen text-white ">
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
			
			{/* Footer */}
			<Footer/>
		</main>
		);
	}


