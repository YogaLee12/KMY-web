export default function BusinessScope() {
    return (
        <section className="w-full bg-white py-16 px-4 md:px-12 text-center text-gray-800">
            {/* 标题区 */}
            <div className="mb-12">
            <p className="text-[1.6rem] font-light text-[#603cf7] mb-1">
                Business Scope
            </p>
            <h2 className="text-[2rem] md:text-4xl  leading-tight text-[#44305a]">
                We are committed to
            </h2>
            </div>
    
            {/* 卡片区域 */}
            <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 max-w-6xl mx-auto mt-20">
            {/* 单个卡片 */}
            {[
                {
                title: 'Static website',
                icon: '/icons/website.png',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
                },
                {
                title: 'E-commerce',
                icon: '/icons/cart.png',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
                },
                {
                title: 'Social media | BBS',
                icon: '/icons/chat.png',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
                },
            ].map((item, idx) => (
                <div
  key={idx}
  className="group flex-1 border border-gray-300 rounded-xl p-6 m-3 text-left shadow-sm hover:shadow-md transition cursor-pointer hover:bg-[#44305a]"
>
  <div className="bg-gray-100 w-fit p-3 rounded-lg mb-4 -mt-14 -ml-10">
    <img
      src={item.icon}
      alt={item.title}
        className="w-12 h-12 transition-transform duration-300 ease-in-out group-hover:scale-130"
    />
  </div>
  <h3 className="text-xl font-semibold mt-3 mb-4 text-[#44305a] group-hover:!text-white ">
    {item.title}
  </h3>
  <p className="text-sm leading-relaxed text-[#44305a] group-hover:!text-white">
    <strong>Lorem ipsum</strong> {item.desc} <strong>et dolore</strong>
  </p>
</div>

            ))}
            </div>
        </section>
    );
}
