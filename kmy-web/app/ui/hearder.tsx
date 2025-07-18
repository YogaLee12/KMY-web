import NavLinks from "./nav-link"
import Link from "next/link";

export default function TopNav(){
    return (
        <header className="bg-white/40 fixed top-0 px-15 h-[100px] w-full pt-[2%] pb-0 m-0 mb-2 ">
            {/* PC端导航 */}
            <nav className="max-w-full mx-auto px-20 h-full flex flex-row items-center justify-between">
                {/* 这里放置logo图片 */}
                Logo
                <Link href="/" className="text-xl font-bold">
                    <span className="relative top-4 left-19 text-white font-light text-sm">
                        Technologies Ltd.
                    </span>
                    {/* 主标题 */}
                    <h2 className="text-white font-light text-5xl leading-tight max-w-4xl pb-10">
                        Skynode
                    </h2>
                </Link>
                {/* Navigation Links */}
                    <NavLinks/>
            </nav>
        </header>
    )
}