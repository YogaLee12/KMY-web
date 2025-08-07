'use client';

import CardGrid from './cardGrid';
import { motion } from 'framer-motion';

export default function IndexProjectTemp() {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-12 text-center text-[#44305a]">
      {/* 标题区 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mb-12"
      >
        <p className="text-[1.6rem] font-light text-[#603cf7] mb-1">
          Project Template
        </p>
        <h2 className="text-[2rem] md:text-4xl leading-tight text-[#44305a]">
          Our recent works
        </h2>
      </motion.div>

      {/* 内容布局区：CardGrid 插入这里 */}
      <CardGrid
        mainCard={{
          title: 'Static web design',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
          subDescription:
            'Ut enim ad minim veniam, quis nostrud exercitation.',
          imageUrl: '/images/static-project.png',
          buttonText: 'More Info',
          onButtonClick: () => alert('Clicked More Info!'),
        }}
        imageCards={[
          {
            imageUrl: '/images/Ecommerce.png',
            title: 'E-commerce Web Development',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            buttonText: 'More Info',
            height: '20rem',
          },
          {
            imageUrl: '/images/onlieShop.png',
            title: 'E-commerce Online Shop',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            buttonText: 'More Info',
          },
          {
            imageUrl: '/images/personalWeb.png',
            title: 'Personal Website',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            buttonText: 'More Info',
            height: '23rem',
          },
          {
            imageUrl: '/images/socialMedia.png',
            title: 'Social Media & BSB',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            buttonText: 'More Info',
          },
        ]}
      />
    </section>
  );
}

