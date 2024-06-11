
'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LINKS = [
    { name: 'Contacts', href: '/contacts' },
    { name: 'Products', href: '/products' },
    { name: 'Services', href: '/services' },
  ];

export const Header = () => {
    const pathname = usePathname();

    return(
        <header>
            <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-800">
                <div className="flex flex-wrap justify-center items-center mx-auto max-w-screen-xl">
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        {LINKS.map((link) => {
                            const isActive = link.href === pathname;
                            return (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className={`block py-2 pr-4 pl-3 ${
                                        isActive ? 'text-primary-700' : 'text-gray-700'
                                        } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700`}
                                        aria-current="page">
                                        {link.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </nav>
        </header>
    )
}