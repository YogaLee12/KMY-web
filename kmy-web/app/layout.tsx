// layout.tsx
'use client';

import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import TopNav from './ui/hearder';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const bodyClass = clsx(
    'antialiased min-h-screen h-full',
    pathname === '/' && "bg-[url('/index-background1.png')] bg-no-repeat bg-top",
	pathname === '/contact' && "bg-[url('/background2.png')] bg-no-repeat bg-top",
  );

  return (
    <html lang="en">
      <body className={bodyClass}>
        <TopNav />
        <div className="mt-[100px]">{children}</div>
      </body>
    </html>
  );
}
