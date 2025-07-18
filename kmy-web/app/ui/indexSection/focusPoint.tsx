export default function IndexFocusPoint(){
    return(
        <section className="flex w-full md:flex-row flex-col-reverse">
			{/* 焦点区域*/}
				<div className="w-full md:w-1/2 px-8 md:px-12 py-10 flex flex-col justify-center">
					{/* 标题组 */}
					<div className="flex justify-center items-center flex-col items-start md:items-end ">
						<span className="text-sm font-light text-white mb-1">
							Technologies Ltd.
						</span>
						<h1 className="text-5xl md:text-6xl font-light leading-tight">
							Skynode Studio
						</h1>
					</div>
		
					{/* slogan */}
					<p className="italic text-lg mt-4 text-purple-200">
					“Weaving threads of the sky.”
					</p>
					{/* 简介段落 */}
					<p className="mt-6 max-w-md text-sm md:text-base text-purple-100">
					At Skynode Studio, we specialize in crafting modern, lightweight
					websites and digital solutions for startups, small businesses, and creators.
					</p>
					{/* 按钮 */}
					<div className="mt-8 flex space-x-4">
					<button className="border border-white text-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-purple-700 transition">
						Contact Us
					</button>
					<button className="border border-white text-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-purple-700 transition">
						More Info
					</button>
					</div>
				</div>
	
				{/* 图片区域*/}
				<div className="hidden md:flex items-center justify-center w-1/2 bg-purple-800">
					<p className="text-xl">这里是图片</p>
				</div>
			</section>
    )
}