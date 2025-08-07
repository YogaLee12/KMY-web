'use client'

import Link from 'next/link'
import Image from 'next/image'

type Project = {
  id: string
  title: string
  description: string
  liveUrl: string
  images: { src: string; alt: string }[]
}

const projects: Project[] = [
  {
    id: 'example1',
    title: 'Skynode official web',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    liveUrl: 'https://your-skynode-url.com',
    images: [
      { src: '/images/example1-img1.png', alt: 'preview1' },
      { src: '/images/example1-img2.png', alt: 'preview2' },
      { src: '/images/example1-img3.png', alt: 'preview3' },
    ],
  },
  {
    id: 'example2',
    title: 'Restaurant web template',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    liveUrl: 'https://your-ecommerce-url.com',
    images: [
      { src: '/images/example2-img1.png', alt: 'ecommerce1' },
      { src: '/images/example2-img2.png', alt: 'ecommerce2' },
      { src: '/images/example2-img3.png', alt: 'ecommerce3' },
    ],
  },
]

export default function ExamplesPage() {
  return (
    <main className="mt-[13vh] space-y-24">
      {projects.map((project,index) => (
        <section key={project.id} 
        className={`flex flex-col lg:flex-row items-center px-[5vw] pt-10 pb-10 gap-10 w-screen 
            ${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}`}
        >
          {/* 左侧内容 */}
          <div className="lg:w-[30%] text-center lg:text-left md:pl-10">
            <h2 className="text-[2.5rem] md:text-[3rem] font-bold tracking-tight text-[#44305a] mb-4">{project.title}</h2>
            <p className="text-gray-600 mb-10 max-w-[30rem] text-[2rem] md:text-[1.3rem]">{project.description}</p>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-[#44305a] text-white rounded-full shadow hover:bg-[#603cf7] transition md:text-[1.3rem] text-[1.6rem]"
            >
              VIEW LIVE SITE
            </a>
          </div>

          {/* 右侧图组 */}
<div className="group grid md:grid-cols-3 gap-4 md:w-[70%] md:pr-10">
  {project.images.map((img, index) => (
<Link
  href={`/examples/${project.id}`}
  key={index}
  className="transition-transform duration-300 ease-in-out group-hover:scale-[0.92] hover:scale-108"
>
      <Image
        src={img.src}
        alt={img.alt}
        width={300}
        height={300}
        className="rounded-md shadow-md w-[60vw] md:w-[20vw] h-auto object-cover aspect-square"
      />
    </Link>
  ))}
</div>
        </section>
      ))}
    </main>
  )
}
