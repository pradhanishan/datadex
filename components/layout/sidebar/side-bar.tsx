import { LogoutButton } from '@/components/auth/logout-button';

export function SideBar() {
  return (
    <div className="hidden lg:inline h-full bg-slate-200 min-w-[280px] max-w-[300px] overflow-x-hidden dark:bg-slate-900 p-2">
      <LogoutButton />
    </div>
  );
}
