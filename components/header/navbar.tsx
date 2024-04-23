import Link from 'next/link';
import React from 'react';

const navItems: {
  name: string;
  href: string;
}[] = [
  { name: 'item1', href: '#' },
  { name: 'item2', href: '#' },
  { name: 'item3', href: '#' },
  { name: 'item4', href: '#' },
];

function NavItem({ name, href }: { name: string; href: string }) {
  return (
    <Link key={name} href={href}>
      <li className="whitespace-nowrap text-sm hover:cursor-pointer hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-200">
        {name}
      </li>
    </Link>
  );
}

export function NavBar() {
  return (
    <div className="hidden md:flex md:gap-16 md:justify-center md:items-center">
      <h1 className="text-2xl font-semibold dark:text-slate-300">Datadex</h1>
      <nav>
        <ul className="flex gap-8">
          {navItems.map((navitem) => (
            <NavItem name={navitem.name} href={navitem.href} />
          ))}
        </ul>
      </nav>
    </div>
  );
}
