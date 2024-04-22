import React from 'react';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-gradient-to-t from-sky-400 to-sky-700">
      {children}
    </div>
  );
}
