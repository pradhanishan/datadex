import { ModeToggle } from '@/components/header/mode-toggle';
import { Search } from '@/components/header/search';
import React from 'react';

export default function Header() {
  return (
    <header>
      {/* container for search bar and theme toggle */}
      <div className="flex gap-2 justify-center items-center">
        <Search />
        <ModeToggle />
      </div>
    </header>
  );
}
