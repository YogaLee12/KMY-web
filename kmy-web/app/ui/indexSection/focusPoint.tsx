'use client';
import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function IndexFocusPoint(){
	const router = useRouter();
    return(
        <section className="flex w-full md:flex-row flex-col-reverse px-40">
			{/* 焦点区域*/}
				<div className="w-full ml-9 md:w-4/5 h-screen px-8 md:px-12 md:mt-10 pt-10 pb-0 flex flex-col justify-start">
					{/* 标题组 */}
					<div className="flex justify-center  flex-col items-start ">
						<span className="md:text-[2rem] font-extralight  text-white mb-1 ml-130">
							Technologies Ltd.
						</span>
						<h1 className="text-5xl md:text-[6.75rem]  leading-tight">
							Skynode Studio
						</h1>
					</div>
		
					{/* slogan */}
					<p  style={{ fontFamily: 'cursive', }} className=" text-[1.7rem] mt-4 text-white">
					“Weaving threads of the sky.”
					</p>
					
					{/* 简介段落 */}
					<p className="mt-10 max-w-3xl text-sm md:text-[1.4rem] leading-relaxed ">
					At Skynode Studio, we specialize in crafting modern, lightweight
					websites and digital solutions for startups, small businesses, and creators.
					</p>
					{/* 按钮 */}
					<div className="mt-8 flex space-x-4">
					<button
					 onClick={() => router.push('/contact')}
					className="border border-white text-white text-[1.3rem] px-13 py-4 rounded-3xl font-medium hover:bg-white hover:text-[#44305a] transition cursor-pointer">
						Contact Us
					</button>
					<span className="py-5"></span>
					<a href="#AboutUs">
					<button className="border border-white text-white text-[1.3rem] px-13 py-4 rounded-3xl font-medium hover:bg-white hover:text-[#44305a] transition cursor-pointer">
						More Info
					</button>
					</a>
					</div>
				</div>
	
				{/* 图片区域*/}
				<div className="hidden md:flex items-center justify-center w-1/2">
					<Image  className="ml-60 mt-20" src="/Figure1.png" alt="figure1" width={502} height={836} />
				</div>
			</section>
    )
}