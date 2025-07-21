import ContactForm from "@/app//ui/CcontactSection/contactForm";
import ContactIntro from "@/app/ui/CcontactSection/contactIntro";


export default function ContactPage() {
    return (
    <main className="w-full bg-purple-700 min-h-screen text-white">
        <ContactIntro/>
        <ContactForm/>
    </main>
    );
    }
    