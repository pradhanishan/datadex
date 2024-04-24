import React from 'react';
import { BiSolidBookBookmark } from 'react-icons/bi';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center space-y-4">
      <div>
        <h1 className="text-3xl font-semibold">Datadex</h1>
        <BiSolidBookBookmark />
      </div>
      {children}
    </div>
  );
}
