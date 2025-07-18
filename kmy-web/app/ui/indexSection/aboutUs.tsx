export default function IndexAboutUs(){
    return(
        <section className="flex w-full md:flex-row flex-col-reverse bg-red-700">
				{/* 图片区域*/}
				<div className="hidden md:flex items-center justify-center w-1/2 bg-purple-800">
						<p className="text-xl">这里是图片</p>
				</div>
				{/* Text Area */}
				<div className="w-full md:w-1/2 px-8 md:px-12 py-10 flex flex-col justify-center">
					
						{/* 标题组 */}
						<div className="flex justify-center items-center flex-col items-start">
							<span className="text-xl font-light text-white mb-1">
								ABOUT US
							</span>
							<h1 className="text-xl md:text-3xl font-light leading-tight">
								Company Profile
							</h1>
						</div>
			
						{/* P1 */}
						<p className="text-m mt-4 text-purple-200">
						Skynode Studio Technologies Ltd.is a Brisbane-based digitalstudio focused on delivering fast, friendly, and maintainable websolutions for the modern era.
						</p>
						{/* P2 */}
						<p className="mt-6 max-w-md text-sm md:text-base text-purple-100">
						In a time when artificial intelligence is reshaping how we buildand interact with technology, we aim to harness its potential tocreate smarter, lighter, and more efficient digital products.
						</p>
				</div>
	
				
			</section>
    )
}