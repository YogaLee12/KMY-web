'use client';
import { motion } from 'framer-motion';

export default function Founders() {
  const team = [
    {
      name: 'King Luo',
      role: 'Backend specialist',
      desc: 'Data analyst',
      img: '/images/King.jpg',
    },
    {
      name: 'Mark Yang',
      role: 'Front-end Dev',
      desc: 'UI/UX',
      img: '/images/Mark.jpg',
    },
    {
      name: 'Yoga Lee',
      role: 'Backend specialist',
      desc: 'Front-end Dev',
      img: '/images/Yoga.jpg',
    },
  ];

  return (
    <section className="text-center py-16 bg-white">
      {/* ✅ 标题动画 */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-[2rem] md:text-4xl leading-tight text-[#44305a]"
      >
        Co-Founders
      </motion.h2>

      {/* ✅ 卡片区域 */}
      <div className="flex flex-col md:flex-row justify-center gap-8 px-4 mt-10">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-center"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-40 h-40 rounded-full mb-4 mx-20 mt-10 object-cover"
            />
            <h3 className="text-xl text-[#44305a] font-semibold mb-2">
              {member.name}
            </h3>
            <p className="text-sm text-[#44305a]">{member.role}</p>
            <p className="text-sm text-[#44305a]">{member.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
