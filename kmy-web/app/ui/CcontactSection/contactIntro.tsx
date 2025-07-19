export default function ContactIntro() {
    return (
        <div className="relative bg-purple-600 text-white py-16 px-8 md:px-24">
            <h1 className="text-4xl font-bold">Let’s get in touch</h1>
            <p className="mt-4 italic text-lg max-w-xl">
            “Together, we begin a journey where possibilities know no bounds.”
            </p>
    
            <button className="mt-6 bg-white text-purple-700 font-semibold py-2 px-6 rounded-full">
            Contact Us
            </button>
    
            <div className="mt-12 p-6 border border-white rounded-xl max-w-sm bg-purple-500 bg-opacity-30">
            <h3 className="font-semibold">Contact Info</h3>
            <p className="mt-2">Skynode Studio Technologies Ltd.</p>
            <p>Email: SkynodeStudio@gmail.com</p>
            <p>Phone: 0491234567</p>
    
            <div className="flex gap-4 mt-4">
                <img src="/images/icon-ig.png" alt="Instagram" className="w-6 h-6" />
                <img src="/images/icon-mail.png" alt="Mail" className="w-6 h-6" />
                <img src="/images/icon-phone.png" alt="Phone" className="w-6 h-6" />
            </div>
            </div>
    
            {/* 插画人物（右下角） */}
            <img
            src="/images/character-right.png"
            alt="Character"
            className="absolute bottom-0 right-8 h-40"
            />
        </div>
        );
    }
