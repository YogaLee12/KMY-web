'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from 'clsx';
import { useEffect } from 'react';

const links = [
    { name: 'About', href: '/' },

    { name: 'Examples', href: '/examples' },
    { name: 'Contact', href: '/contact' },
    { name: 'Feedback', href: '/feedback' },
];

export default function NavLinks() {
    const pathname = usePathname();


    useEffect(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}, [pathname]);  // 确保每次路径变化时滚动到顶部

    return (
        <div className="ml-auto flex space-x-6  -translate-y-4">
        {links.map((link) => (
<Link
  key={link.name}
  href={link.href}
  className={clsx(
    'relative px-3 py-2 text-white text-2xl font-light hover:font-bold',
    'after:absolute after:bottom-0.5 after:left-1/2 after:-translate-x-1/2',
      'after:h-[3px] after:bg-white after:content-[""] after:rounded-full',
    'after:w-0 hover:after:w-[70%] after:transition-[width] after:duration-300 after:origin-center',
    {
      'after:w-[70%]': pathname === link.href,
    }
  )}
>
  <span className="hidden md:block">{link.name}</span>
</Link>

        ))}
        </div>
    );
}
