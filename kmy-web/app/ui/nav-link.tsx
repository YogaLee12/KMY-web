'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from 'clsx';

const links = [
    { name: 'About', href: '/about' },
    { name: 'Examples', href: '/examples' },
    { name: 'Contact', href: '/contact' },
    { name: 'Feedback', href: '/feedback' },
];

export default function NavLinks() {
    const pathname = usePathname();

    return (
        <div className="ml-auto flex space-x-6">
        {links.map((link) => (
            <Link
            key={link.name}
            href={link.href}
            className={clsx(
                'relative px-3 py-2 text-white hover:text-purple-300 transition-colors duration-200',
                {
                'after:absolute after:inset-x-2 after:bottom-0 after:h-[2px] after:bg-white after:content-[""]':
                    pathname === link.href,
                }
            )}
            >
            <span className="hidden md:block">{link.name}</span>
            </Link>
        ))}
        </div>
    );
}
