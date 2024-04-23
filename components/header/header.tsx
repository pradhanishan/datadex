import React from 'react';

import { ModeToggle } from './mode-toggle';
import { NavBar } from './navbar';
import { Search } from './search';

export function Header() {
  return (
    <header className="bg-slate-50 p-2 flex justify-between items-center dark:bg-slate-900 fixed w-full">
      <div>
        <NavBar />
      </div>
      <div className="flex gap-4 justify-center items-center">
        <Search />
        <ModeToggle />
      </div>
    </header>
  );
}
