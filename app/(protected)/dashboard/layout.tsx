import Header from '@/components/layout/header/header';
import { SideBar } from '@/components/layout/sidebar/side-bar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex  overflow-hidden">
        <SideBar />
        <div className="overflow-y-auto flex-1">{children}</div>
      </div>
    </div>
  );
}
