'use client';
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion'; 

export default function IndexFocusPoint() {
	const router = useRouter();

	return (
		<section className="flex w-full md:flex-row flex-col-reverse px-40">
			{/* 焦点区域 */}
			<div className="w-full ml-9 md:w-4/5 h-screen px-8 md:px-12 md:mt-10 pt-10 pb-0 flex flex-col justify-start">
				
				{/* 标题组 */}
				<div className="flex justify-center flex-col items-start">
					
					{/* 小标题 */}
					<motion.span
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						viewport={{ once: true, amount: 0.2 }}
						className="md:text-[2rem] font-extralight text-white mb-1 ml-130"
					>
						Technologies Ltd.
					</motion.span>

					{/* 主标题 */}
					<motion.h1
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true, amount: 0.2 }}
						className="text-5xl md:text-[6.75rem] leading-tight text-white"
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
					className="text-[1.7rem] mt-4 text-white"
				>
					“Weaving threads of the sky.”
				</motion.p>

				{/* 简介段落 */}
				<motion.p
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					viewport={{ once: true, amount: 0.2 }}
					className="mt-10 max-w-3xl text-sm md:text-[1.4rem] leading-relaxed text-white"
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
					className="mt-8 flex space-x-4"
				>
					<button
						onClick={() => router.push('/contact')}
						className="border border-white text-white text-[1.3rem] px-13 py-4 rounded-3xl font-medium hover:bg-white hover:text-[#44305a] transition cursor-pointer"
					>
						Contact Us
					</button>
					<a href="#AboutUs">
						<button className="border border-white text-white text-[1.3rem] px-13 py-4 rounded-3xl font-medium hover:bg-white hover:text-[#44305a] transition cursor-pointer">
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
				className="hidden md:flex items-center justify-center w-1/2"
			>
            <Image
                 src="/Figure1.png"
                 alt="figure1"
                 width={502}
                 height={836}
                 className="w-[30vw] h-auto ml-[10vw] mt-1vw"
             />
			</motion.div>
		</section>
	);
}
