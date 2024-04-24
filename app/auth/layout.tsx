import { BiSolidBookBookmark } from 'react-icons/bi';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center space-y-4">
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="flex gap-4 justify-center items-center">
          <h1 className="text-3xl font-semibold">Datadex</h1>
          <BiSolidBookBookmark size={32} />
        </div>
        <p className="text-xs text-slate-500">
          Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit. Impedit, ratione.
        </p>
      </div>
      {children}
    </div>
  );
}
