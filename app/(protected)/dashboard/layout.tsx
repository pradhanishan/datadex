import Header from '@/components/header/header';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <Header />
      {children}
    </div>
  );
}
