import Image from 'next/image';

export default function IndexAboutUs(){
    return(
        <section  id="AboutUs"  className="flex w-full md:flex-row flex-col-reverse px-40 scroll-mt-28 ">
				{/* 图片区域*/}
				<div className="hidden md:flex items-center justify-center w-1/2">
					<Image className="ml-30 -mt-3" src="/goal.png" alt="Our goal" width={521*0.8} height={422*0.8} />
					<Image className="ml-10 -mt-3" src="/Table.png" alt="Table with logo on it" width={413} height={413} />
				</div>
				{/* Text Area */}
				<div className="w-full ml-30  md:w-1/2 px-8 md:px-12 py-10 flex flex-col justify-center">
					
						{/* 标题组 */}
						<div className="flex justify-center items-left flex-col max-w-3xl ">
							<span className="text-[1.6rem] font-light text-[#603cf7] mb-1">
								ABOUT US
							</span>
							<h1 className="text-[2.2rem] md:text-5xl  leading-tight text-[#44305a]">
								Company Profile
							</h1>
						</div>
			
						{/* P1 */}
						<p className="text-[1.4rem] mt-7 text-[#44305a] leading-relaxed font-light">
						<span className="font-bold">Skynode Studio Technologies Ltd.</span>is a Brisbane-based digitalstudio focused on delivering fast, friendly, and maintainable websolutions for the modern era.
						</p>
						{/* P2 */}
						<p className="text-[1.4rem] mt-4 text-[#44305a]">
						In a time when artificial intelligence is reshaping how we buildand interact with technology, we aim to harness its potential tocreate smarter, lighter, and more efficient digital products.
						</p>
				</div>
	
				
			</section>
    )
}