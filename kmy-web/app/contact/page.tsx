
'use client'
import Image from 'next/image'

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden  px-[10vw] py-[8vh] md:bg-[#603cf7] lg:bg-transparent z-0">
      {/* 顶部联系介绍区 */}
      <section className="flex flex-col md:flex-row lg:flex-row justify-between items-center lg:gap-12 md:gap-3">
        {/* 左侧文字 */}
        <div className="lg:w-[50%] md:w-[120%] text-center lg:text-left space-y-6 pb-10 md:pb-0 lg:pd-0">
          <h1 className="lg:text-[6rem] text-[6rem] md:text-[3rem] font-bold text-white">Let&apos;s get in touch</h1>
          <p
            style={{ fontFamily: 'cursive' }}
            className="w-[90%] leading-loose text-3xl text-[#f0f0f0]"
          >
            “Together, we begin a journey where possibilities know no bounds.”
          </p>

          {/* 使用锚点跳转 */}
          <a
            href="#form"
            className="inline-block border border-white text-white text-[1.3rem] px-13 py-4 rounded-3xl font-medium hover:bg-white hover:text-[#44305a] transition cursor-pointer"
          >
            Contact Us
          </a>
        </div>

        {/* 右侧联系方式盒子 */}
        <div className="border border-gray-300 rounded-xl p-10 w-full lg:w-[35rem] space-y-9 text-white">
          <h2 className="text-4xl font-bold">Contact Info</h2>
          <p className="text-2xl">Skynode Studio Technologies Ltd.</p>
          <p className="text-xl">
            <span className="font-semibold">Email:</span> SkynodeStudio@gmail.com
          </p>
          <p className="text-xl">
            <span className="font-semibold">Phone:</span> 0491234567
          </p>
<div className="flex space-x-4 text-xl pt-2 ">
  <a
    href="https://instagram.com"
    target="_blank"
    rel="noopener noreferrer"
    className="p-1.5 rounded-full"
  >
    <Image
      src="/icons/ins.png"
      alt="Instagram"
      width={43}
      height={43}
      className="transition-transform duration-300 ease-in-out hover:scale-120"
    />
  </a>

  <a
    href="https://x.com"
    target="_blank"
    rel="noopener noreferrer"
    className="p-1.5 rounded-full"
  >
    <Image
      src="/icons/X.png"
      alt="X"
      width={43}
      height={43}
      className="transition-transform duration-300 ease-in-out hover:scale-120"
    />
  </a>

  <a
    href="https://whatsapp.com"
    target="_blank"
    rel="noopener noreferrer"
    className="p-1.5 rounded-full"
  >
    <Image
      src="/icons/whatsapp.png"
      alt="WhatsApp"
      width={43}
      height={43}
      className="transition-transform duration-300 ease-in-out hover:scale-120"
    />
  </a>

  <a
    href="https://facebook.com"
    target="_blank"
    rel="noopener noreferrer"
    className="p-1.5 rounded-full"
  >
    <Image
      src="/icons/facebook.png"
      alt="Facebook"
      width={43}
      height={43}
      className="transition-transform duration-300 ease-in-out hover:scale-120"
    />
  </a>
    {/* 图片人物 */}
  <div className="absolute lg:-bottom-10 lg:right-0 md:-bottom-10 md:-right-20 lg:z-20 hidden md:block md:mr-20 ">
    <Image
      src="/Figure2.png"
      alt="Character"
      width={268}
      height={531}
      className="object-contain md:w-60 md:pb-20 "
    />
  </div>
</div>

        </div>
      </section>

      {/* 表单区域，添加 id="form" */}
      <section id="form" className="w-full md:mt-[24rem] mt-[7vh]">
        <div className="relative bg-gradient-to-b from-[#603cf7] to-[#706ac2] text-white rounded-2xl shadow-lg p-10 max-w-8xl mx-auto">
          <h2 className="text-5xl font-semibold mb-2">Enquiry form</h2>
          <p className="mb-8 text-lg">
            Please fill out the inquiry form below and we will contact you within 1 working day.
          </p>

          <form className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <input
                type="text"
                placeholder="First name *"
                className="rounded-xl p-3 bg-transparent border outline-none focus:ring-2"
              />
              <input
                type="text"
                placeholder="Last name *"
                className="rounded-xl p-3 bg-transparent border outline-none focus:ring-2"
              />
              <input
                type="email"
                placeholder="Email *"
                className="rounded-xl p-3 bg-transparent border outline-none focus:ring-2"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="rounded-xl p-3 bg-transparent border outline-none focus:ring-2"
              />
            </div>

            <textarea
              placeholder="Enquiry *"
              rows={5}
              className="w-full rounded-xl p-3 bg-transparent border outline-none focus:ring-2"
            />

            <button
              type="submit"
              className="px-6 py-2 bg-white text-[#7e45f3] rounded-full shadow hover:bg-gray-100 transition flex items-center gap-2 cursor-pointer"
            >
              Submit →
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
