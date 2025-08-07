'use client';
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion'; 

export default function IndexFocusPoint() {
	const router = useRouter();

	return (
		<section className="
		 flex w-full h-screen
  md:flex-row flex-col-reverse 
  md:px-40 px-4  // Mobile 更窄 padding
  md:items-start items-center 
  md:justify-start justify-center 
  md:h-auto
		">
			{/* 焦点区域 */}
			<div className="w-full -mt-[40vh]  md:h-auto lg:w-4/5 lg:ml-9 md:-ml-9 px-8 lg:px-12 md:-mt-24  lg:mt-10 pt-10 pb-0 flex flex-col md:justify-start justify-center ">
				
				{/* 标题组 */}
				<div className="flex justify-center flex-col md:items-start items-center">
					{/* 小标题 */}
					<motion.span
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						viewport={{ once: true, amount: 0.2 }}
						className="lg:text-[2rem] md:text-[0.7rem] font-extralight text-white mb-1 md:ml-120 lg:ml-130 hidden md:block  "
					>
						Technologies Ltd.
					</motion.span>

					{/* Mobile Logo */}
				<motion.span
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.05 }}
						viewport={{ once: true, amount: 0.2 }}
						className="mb-1 mt-10vh md:hidden block  "
					>
						<Image
							src="/Logo-white.png"
							alt="Logo"
							width={150}
							height={150}
							className="h-50 w-auto mb-10"
						/>
					</motion.span>
					{/* 主标题 */}
					<motion.h1
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true, amount: 0.2 }}
						className="text-6xl md:text-[5rem] lg:text-[6.75rem] leading-tight text-white text-center md:text-left font-bold md:font-normal"
					>
						Skynode Studio
					</motion.h1>
				</div>

				{/* slogan */}
				<motion.p
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.3 }}
					viewport={{ once: true, amount: 0.2 }}
					style={{ fontFamily: 'cursive' }}
					className="lg:text-[1.7rem] mt-4 text-white text-center md:text-left"
				>
					“Weaving threads of the sky.”
				</motion.p>
                   
				{/* 简介段落 */}
				<motion.p
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					viewport={{ once: true, amount: 0.2 }}
					className="mt-10 max-w-3xl text-[1.4rem] md:text-[1.3rem] lg:text-[1.4rem] leading-relaxed text-white text-center md:text-left"
				>
					At Skynode Studio, we specialize in crafting modern, lightweight
					websites and digital solutions for startups, small businesses, and creators.
				</motion.p>

				{/* 按钮组 */}
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.5 }}
					viewport={{ once: true, amount: 0.2 }}
					className="mt-8 flex space-x-4 items-center justify-center md:justify-start"
				>
					<button
						onClick={() => router.push('/contact')}
						className="border border-white text-white text-[1.3rem] md:px-7 md:py-3 px-13 py-4 rounded-3xl font-medium hover:bg-white hover:text-[#44305a] transition cursor-pointer"
					>
						Contact Us
					</button>
					<a href="#AboutUs">
						<button className="border border-white text-white text-[1.3rem]  md:px-7 md:py-3 px-13 py-4 rounded-3xl font-medium hover:bg-white hover:text-[#44305a] transition cursor-pointer">
							More Info
						</button>
					</a>
				</motion.div>
			</div>

			{/* 图片区域 */}
			<motion.div
				initial={{ opacity: 0, x: 50 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.6, delay: 0.3 }}
				viewport={{ once: true, amount: 0.2 }}
				className="h-[50vw] hidden md:flex items-center justify-center w-1/2"
			>
            <Image
                 src="/Figure1.png"
                 alt="figure1"
                 width={502}
                 height={836}
                 className="w-[30vw] h-auto pl-[5vw]"
             />
			</motion.div>
		</section>
	);
}
