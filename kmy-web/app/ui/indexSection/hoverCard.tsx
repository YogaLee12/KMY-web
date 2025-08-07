'use client';

import React from 'react';
import clsx from 'clsx';

type HoverCardProps = {
  title: string;
  description: string;
  subDescription?: string;
  buttonText?: string;
  imageUrl: string;
  className?: string; // 外部可控制尺寸等
  onButtonClick?: () => void;
  style?: React.CSSProperties;
};

export default function HoverCard({
  title,
  description,
  subDescription,
  buttonText = 'More Info',
  imageUrl,
  className = 'w-full md:w-1/2 min-h-[420px]',
  onButtonClick,
  style
}: HoverCardProps) {
  return (
    <div
      className={clsx(
        'relative rounded-2xl overflow-hidden bg-cover bg-center group transition-shadow hover:shadow-lg',
        className
      )}
      style={{ backgroundImage: `url('${imageUrl}')`, ...style }}
    >
      {/* Hover 显示内容 */}
<div className="absolute inset-0 bg-[#44305a] bg-opacity-60 p-8 flex flex-col justify-between text-left text-white opacity-0 group-hover:opacity-95 transition-opacity duration-300">
  <div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-sm mb-2">{description}</p>
    {subDescription && <p className="text-sm">{subDescription}</p>}
  </div>
  
  {/* 底部右侧的按钮 */}
  <div className="w-full flex justify-end ">
    <button
      className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-[#44305a] transition text-sm font-medium cursor-pointer"
      onClick={onButtonClick}
    >
      {buttonText}
    </button>
  </div>
</div>
    </div>
  );
}
