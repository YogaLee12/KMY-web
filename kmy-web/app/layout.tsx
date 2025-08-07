'use client';
import Footer from "./ui/footer";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react'; 
import clsx from 'clsx';
import TopNav from './ui/header';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  // 监听窗口宽度 → 设置字体和是否Mobile
  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;

      // 设置字体大小
      let baseSize: number;
      let designWidth: number;

      if (width >= 1024) {
        // PC
        baseSize = 15;
        designWidth = 1920;
      } else if (width >= 768) {
        // Tablet
        baseSize = 12;
        designWidth = 1024;
      } else {
        // Mobile
        baseSize = 10;
        designWidth = 375;
      }

      const newFontSize = (width / designWidth) * baseSize;
      document.documentElement.style.fontSize = `${newFontSize}px`;

      // 设置是否Mobile
      setIsMobile(width < 768);
    };

    updateLayout(); // 初始调用
    window.addEventListener('resize', updateLayout);

    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  // 动态背景图路径判断
  const getBackgroundImage = () => {
    if (pathname === '/') return "url('/index-background1.png')";
    if (pathname === '/contact') return "url('/background2.png')";
    return undefined;
  };

  const bodyClass = clsx(
    'antialiased min-h-screen w-full h-full overflow-x-hidden transition-all duration-300',
    'bg-no-repeat bg-top bg-center'
  );
let bodyStyle: React.CSSProperties;

if (!isMobile) {
  // 非 Mobile：设置背景图
  bodyStyle = {
    backgroundImage: getBackgroundImage(),
    backgroundSize: '100% auto',
    backgroundPosition: 'top center',
    backgroundRepeat: 'no-repeat',
  };
} else if (pathname === '/'|| pathname === '/contact') {
  // Mobile 且首页：设置纯色背景
  bodyStyle = {
    backgroundColor: '#603cf7',
  };
} else {
  // Mobile 且非首页：无背景
  bodyStyle = {};
}

  return (
    <html lang="en">
      <body className={bodyClass} style={bodyStyle}>
        <TopNav />
        <div className="mt-[100px] min-h-[100vh]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}



