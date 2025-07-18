
export default function Founders(){
    const team = [
        {
            name: "King Luo",
            role: "Backend specialist",
            desc: "Data analyst",
            img: "/images/founder1.png",
            },
            {
            name: "Mark Yang",
            role: "Front-end Dev",
            desc: "UI/UX",
            img: "/images/founder2.png",
            },
            {
            name: "Yoga Lee",
            role: "Backend specialist",
            desc: "Front-end Dev",
            img: "/images/Yoga.jpg",
            },
        ];
    return (
        <section className="text-center py-16 bg-white">
            <h2 className="text-2xl font-semibold text-gray-700 mb-8">Co-Founders</h2>
            <div className="flex flex-col md:flex-row justify-center gap-8 px-4">
            {team.map((member, index) => (
                <div key={index} className="flex flex-col items-center">
                <img
                    src={member.img}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mb-4"
                />
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
                <p className="text-sm text-gray-500">{member.desc}</p>
                </div>
            ))}
            </div>
        </section>
    )
}