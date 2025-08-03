'use client';
import Footer from "./ui/footer";
import { usePathname } from 'next/navigation';
import { useEffect} from 'react'; 
import clsx from 'clsx';
import TopNav from './ui/header';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

useEffect(() => {
  const setFontSize = () => {
    const width = window.innerWidth;
    const baseSize = 15; // 100px 作为设计稿基准宽度（1920 或 1440 的话就是 100）
    const designWidth = 1920; // 你设计稿的宽度

    const newFontSize = (width / designWidth) * baseSize;
    document.documentElement.style.fontSize = `${newFontSize}px`;
  };

  setFontSize(); // 初始调用
  window.addEventListener('resize', setFontSize);

  return () => window.removeEventListener('resize', setFontSize);
}, []);

  // 动态背景图路径判断
  const getBackgroundImage = () => {
    if (pathname === '/') return "url('/index-background1.png')";
    if (pathname === '/contact') return "url('/background2.png')";
    return undefined;
  };

  // 动态类名
  const bodyClass = clsx(
    'antialiased min-h-screen w-full h-full overflow-x-hidden transition-all duration-300',
    'bg-no-repeat bg-top bg-center'
  );

  // 设置背景样式，宽度始终覆盖整个body宽度
  const bodyStyle: React.CSSProperties = {
    backgroundImage: getBackgroundImage(),
    backgroundSize: '100% auto',  // 宽度 100%，高度自适应
    backgroundPosition: 'top center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <html lang="en">
      <body className={bodyClass} style={bodyStyle}>
        <TopNav />
        <div className="mt-[100px] min-h-[100vh]">{children}</div>
        			{/* Footer */}
			<Footer/>
      </body>
    </html>
  );
}


