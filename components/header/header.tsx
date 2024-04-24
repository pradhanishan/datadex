import { ModeToggle } from '@/components/header/mode-toggle';
import { Search } from '@/components/header/search';
import React from 'react';

import { NavBar } from './nav-bar';

export default function Header() {
  return (
    <header>
      <div
        className="flex justify-between items-center px-2 py-4 bg-gray-200
      dark:bg-slate-900"
      >
        <div>
          <h1 className="font-semibold text-xl text-slate-800 dark:text-slate-300">Datadex</h1>
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
