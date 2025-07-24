'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function IndexAboutUs() {
  return (
    <section
      id="AboutUs"
      className="flex w-full md:flex-row flex-col-reverse px-40 scroll-mt-28"
    >
      {/* 图片区域 */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
        className="hidden md:flex items-center justify-center w-1/2"
      >
        <Image
          className="ml-30 -mt-3"
          src="/goal.png"
          alt="Our goal"
          width={521 * 0.8}
          height={422 * 0.8}
        />
        <Image
          className="ml-10 -mt-3"
          src="/Table.png"
          alt="Table with logo on it"
          width={413}
          height={413}
        />
      </motion.div>

      {/* 文字区域 */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full ml-30 md:w-1/2 px-8 md:px-12 py-10 flex flex-col justify-center"
      >
        {/* 标题组 */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex justify-center items-left flex-col max-w-3xl"
        >
          <span className="text-[1.6rem] font-light text-[#603cf7] mb-1">
            ABOUT US
          </span>
          <h1 className="text-[2.2rem] md:text-5xl leading-tight text-[#44305a]">
            Company Profile
          </h1>
        </motion.div>

        {/* P1 */}
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-[1.4rem] mt-7 text-[#44305a] leading-relaxed font-light"
        >
          <span className="font-bold">Skynode Studio Technologies Ltd.</span> is
          a Brisbane-based digital studio focused on delivering fast, friendly,
          and maintainable web solutions for the modern era.
        </motion.p>

        {/* P2 */}
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-[1.4rem] mt-4 text-[#44305a]"
        >
          In a time when artificial intelligence is reshaping how we build and
          interact with technology, we aim to harness its potential to create
          smarter, lighter, and more efficient digital products.
        </motion.p>
      </motion.div>
    </section>
  );
}
