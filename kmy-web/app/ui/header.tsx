'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import { useEffect, useState, useRef } from 'react';
import NavLinks from './nav-link';
import logoHorizontal from '@/public/logo-horizontal.svg';

export default function TopNav() {
  const pathname = usePathname();

  const [isScrolling, setIsScrolling] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false); // 新增状态
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // 判断是否滚动过
      if (scrollY > 0 ) {
        setHasScrolled(true);
      }else {
        setHasScrolled(false);
      }

      // 正在滚动中
      setIsScrolling(true);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  const isTransparentRoute = pathname === '/' || pathname === '/contact';

  const headerClass = clsx(
    'fixed top-0 px-[60px] h-[100px] w-full pt-[2%] pb-0 z-50 transition-all duration-300',
    {
      'bg-[#603cf7]': !isTransparentRoute || hasScrolled,
      'bg-[#603cf7]/80 backdrop-blur-md': isScrolling ,
      'bg-transparent': isTransparentRoute && !isScrolling && !hasScrolled,
    }
  );

  return (
    <header className={headerClass}>
      <nav className="max-w-full mx-auto h-full flex flex-row items-center justify-between">
        <Link href="/#">
          <Image
            src={logoHorizontal}
            alt="Logo"
            className="h-25 w-auto mb-10"
          />
        </Link>

        <NavLinks />
      </nav>
    </header>
  );
}


