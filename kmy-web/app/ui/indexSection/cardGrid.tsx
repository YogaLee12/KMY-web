'use client';

import HoverCard from './hoverCard';
import { motion } from 'framer-motion';

type CardGridProps = {
  mainCard: {
    title: string;
    description: string;
    subDescription?: string;
    buttonText?: string;
    imageUrl: string;
    onButtonClick?: () => void;
  };
  imageCards: {
    title?: string;
    description?: string;
    buttonText?: string;
    imageUrl: string;
    onButtonClick?: () => void;
    height?: string;
  }[];
};

export default function CardGrid({ mainCard, imageCards }: CardGridProps) {
  return (
    <div className="w-[70%] h-[40rem] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4">
      {/* ✅ 主卡片动画包裹 */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
        className="lg:col-span-1 h-full"
      >
        <HoverCard
          title={mainCard.title}
          description={mainCard.description}
          subDescription={mainCard.subDescription}
          buttonText={mainCard.buttonText}
          imageUrl={mainCard.imageUrl}
          onButtonClick={mainCard.onButtonClick}
          className="h-full rounded-2xl"
        />
      </motion.div>

      {/* 右侧卡片动画区块 */}
      <div className="lg:col-span-2 grid grid-cols-2 gap-4 h-full">
        {[0, 1].map((col) => (
          <div key={col} className="grid grid-rows-[auto_1fr] gap-4 h-full">
            {/* 上方小卡片 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + col * 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <HoverCard
                title={imageCards[col * 2]?.title || ''}
                description={imageCards[col * 2]?.description || ''}
                buttonText={imageCards[col * 2]?.buttonText}
                imageUrl={imageCards[col * 2]?.imageUrl || ''}
                onButtonClick={imageCards[col * 2]?.onButtonClick}
                className="rounded-2xl"
                style={
                  imageCards[col * 2]?.height
                    ? { height: imageCards[col * 2]?.height }
                    : { minHeight: '200px' }
                }
              />
            </motion.div>

            {/* 下方小卡片 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + col * 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              className="h-full"
            >
              <HoverCard
                title={imageCards[col * 2 + 1]?.title || ''}
                description={imageCards[col * 2 + 1]?.description || ''}
                buttonText={imageCards[col * 2 + 1]?.buttonText}
                imageUrl={imageCards[col * 2 + 1]?.imageUrl || ''}
                onButtonClick={imageCards[col * 2 + 1]?.onButtonClick}
                className="rounded-2xl h-full"
              />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

