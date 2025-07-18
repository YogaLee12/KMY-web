export default function IndexProjectTemp(){
    return(
        <section className="w-full bg-white py-16 px-4 md:px-12 text-center text-gray-800">
      {/* 标题区 */}
            <div className="mb-12">
                <p className="text-sm font-semibold text-purple-600 uppercase tracking-wider">
                Project Template
                </p>
                <h2 className="text-2xl md:text-3xl font-bold mt-2">
                Our recent works
                </h2>
            </div>

            {/* 内容布局 */}
            <div className="flex flex-col md:flex-row gap-8 items-stretch max-w-6xl mx-auto">
                {/* 左侧大卡片 */}
                <div className="relative rounded-2xl overflow-hidden w-full md:w-1/2 min-h-[420px] bg-cover bg-center" style={{ backgroundImage: `url('/images/static-project.jpg')` }}>
                <div className="absolute inset-0 bg-purple-900 bg-opacity-60 p-8 flex flex-col justify-between text-left text-white">
                    <div>
                    <h3 className="text-2xl font-bold mb-4">Static web design</h3>
                    <p className="text-sm mb-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <p className="text-sm">Ut enim ad minim veniam, quis nostrud exercitation.</p>
                    </div>
                    <div>
                    <button className="mt-4 px-5 py-2 border border-white rounded-full hover:bg-white hover:text-purple-700 transition text-sm font-medium w-fit">
                        More Info
                    </button>
                    </div>
                </div>
                </div>

                {/* 右边图像网格 */}
                <div className="grid grid-cols-2 gap-4 w-full md:w-1/2">
                <img src="/images/project1.jpg" alt="Project 1" className="rounded-2xl w-full h-full object-cover" />
                <img src="/images/project2.jpg" alt="Project 2" className="rounded-2xl w-full h-full object-cover" />
                <img src="/images/project3.jpg" alt="Project 3" className="rounded-2xl w-full h-full object-cover" />
                <img src="/images/project4.jpg" alt="Project 4" className="rounded-2xl w-full h-full object-cover" />
                </div>
            </div>
    </section>
    )
}