'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function IndexAboutUs() {
  return (
    <section
      id="AboutUs"
      className="flex w-screen md:flex-row flex-col-reverse md:px-40 px-20  md:scroll-mt-28 -mt-[23vh]  pb-20 md:mt-0 justify-center text-center"
    >
      {/* 图片区域 */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
        className="md:flex items-center justify-center w-1/2 md:pr-40 pb-10 md:pb-0"
      >
       {/* Our goal */}
<Image
  className="md:w-[30vw] ml-[8vw] -mt-[1vw] max-w-[416px] w-[50vw]"
  src="/goal.png"
  alt="Our goal"
  width={521 * 0.8}  // = 416.8px
  height={422 * 0.8} // = 337.6px
/>

{/* Table with logo on it */}
<Image
  className="w-[25vw] h-auto md:ml-[4vw] -mt-[1vw] md:max-w-[413px] hidden md:block"
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
        className=" md:ml-30 md:w-1/2 md:px-12 py-10 flex flex-col justify-center md:text-left w-[70vw] "
      >
        {/* 标题组 */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex justify-center md:items-left items-center flex-col max-w-3xl"
        >
          <span className="md:text-[1.6rem] font-light md:text-[#603cf7] mb-1 text-[1.4rem] ">
            ABOUT US
          </span>
          <h1 className="md:text-[2.2rem] text-[4rem]  pb-20 md:pb-0 leading-tight md:text-[#44305a]">
            Company Profile
          </h1>
        </motion.div>

        {/* P1 */}
      <motion.p
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  viewport={{ once: true, amount: 0.2 }}
  className="md:text-[1.4rem] text-[1.6rem] mt-7 md:text-[#44305a] md:leading-relaxed md:font-light 
             w-[100%] mx-auto md:w-full md:ml-20"
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
  className="md:text-[1.4rem] text-[1.6rem] mt-4 md:text-[#44305a] 
              w-[100%] mx-auto md:w-full md:ml-20"
>
  In a time when artificial intelligence is reshaping how we build and
  interact with technology, we aim to harness its potential to create
  smarter, lighter, and more efficient digital products.
</motion.p>
      </motion.div>
    </section>
  );
}
