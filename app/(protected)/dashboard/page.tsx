import { logout } from '@/actions';
import Header from '@/components/header/header';
import { ModeToggle } from '@/components/header/mode-toggle';
import { Search } from '@/components/header/search';
import { Button } from '@/components/ui/button';
import { getCurrentUser } from '@/lib/session';

export default async function DashboardPage() {
  const currentUser = await getCurrentUser();
  return (
    <div>
      <form action={logout}>
        <Button>logout</Button>
      </form>
    </div>
  );
}
