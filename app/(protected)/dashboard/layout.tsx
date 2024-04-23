import { Header } from '@/components/header/header';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <Header />
      {/* To keep a gap between fixed header and dashboard content */}
      <div className="h-[80px]"></div>
      {children}
    </div>
  );
}
