export default function BusinessScope() {
    return (
        <section className="w-full bg-white py-16 px-4 md:px-12 text-center text-gray-800">
            {/* 标题区 */}
            <div className="mb-12">
            <p className="text-sm font-semibold text-purple-600 uppercase tracking-wider">
                Business Scope
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mt-2">
                We are committed to
            </h2>
            </div>
    
            {/* 卡片区域 */}
            <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 max-w-6xl mx-auto">
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
                className="flex-1 border border-gray-300 rounded-xl p-6 text-left shadow-sm hover:shadow-md transition"
                >
                <div className="bg-gray-100 w-fit p-3 rounded-lg mb-4">
                    <img
                    src={item.icon}
                    alt={item.title}
                    className="w-6 h-6 object-contain"
                    />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">
                    <strong>Lorem ipsum</strong> {item.desc}
                    <strong>et dolore</strong>
                </p>
                </div>
            ))}
            </div>
        </section>
    );
}
