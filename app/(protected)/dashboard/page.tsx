import { logout } from '@/actions';
import Header from '@/components/layout/header/header';
import { ModeToggle } from '@/components/layout/header/mode-toggle';
import { Search } from '@/components/layout/header/search';
import { Button } from '@/components/ui/button';
import { getCurrentUser } from '@/lib/session';

export default async function DashboardPage() {
  return (
    <div>
      <form action={logout}>
        <Button>logout</Button>
      </form>
    </div>
  );
}
