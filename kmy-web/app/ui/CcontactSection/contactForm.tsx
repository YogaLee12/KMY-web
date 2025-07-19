export default function ContactForm() {
    return (
        <div className="relative bg-gradient-to-b from-purple-500 to-purple-600 px-6 md:px-16 py-16 rounded-t-[3rem]">
            {/* 插画人物（左上角） */}
            <img
            src="/images/character-left.png"
            alt="Character"
            className="absolute -top-12 left-4 h-24"
            />
    
            <div className="bg-purple-500/30 p-8 rounded-xl shadow-xl text-white max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Enquiry form</h2>
            <p className="mb-8 text-sm">
                Please fill out the inquiry form below and we will contact you within 1 working day.
            </p>
    
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input className="p-3 rounded border border-white bg-transparent" placeholder="First name *" required />
                <input className="p-3 rounded border border-white bg-transparent" placeholder="Last name *" required />
                <input className="p-3 rounded border border-white bg-transparent" placeholder="Email *" type="email" required />
                <input className="p-3 rounded border border-white bg-transparent" placeholder="Phone" type="tel" />
    
                <textarea className="md:col-span-2 p-3 rounded border border-white bg-transparent min-h-[120px]" placeholder="Enquiry *" required />
    
                <button type="submit" className="col-span-2 w-fit bg-white text-purple-700 px-6 py-2 rounded-full font-medium">
                Submit →
                </button>
            </form>
            </div>
        </div>
        );
    }
