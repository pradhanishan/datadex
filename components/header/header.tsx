import { Drawer } from '@/components/header/drawer';
import { ModeToggle } from '@/components/header/mode-toggle';
import { NavBar } from '@/components/header/nav-bar';
import { Search } from '@/components/header/search';
import React from 'react';

export default function Header() {
  return (
    <header className="">
      <div
        className="flex justify-center md:justify-between gap-8 items-center px-2 py-4 bg-gray-200
      dark:bg-slate-900"
      >
        <div className="flex justify-center items-center">
          <Drawer />
          <h1 className="hidden lg:inline font-semibold text-xl text-slate-800 dark:text-slate-300">Datadex</h1>
        </div>
        <NavBar />

        {/* container for search bar and theme toggle */}
        <div className="flex gap-1 lg:gap-2 justify-center items-center">
          <Search />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
