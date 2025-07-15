import NavLinks from "./nav-link"
import Link from "next/link";

export default function TopNav(){
    return (
        <header className="bg-purple-700/10 h-[100px] w-full px-[8%] pt-[2%] pb-3 m-0 mb-2">
            <nav className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold">
                    {/* 这里放置logo图片 */}
                    <span className="relative top-4 left-20 text-white font-light text-sm">
                        Technologies Ltd.
                    </span>
                    {/* 主标题 */}
                    <h2 className="text-white font-light text-5xl leading-tight max-w-4xl">
                        Skynode
                    </h2>
                </Link>
                {/* Navigation Links */}
                    <NavLinks/>
            </nav>
        </header>
    )
}