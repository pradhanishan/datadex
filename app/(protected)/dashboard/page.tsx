import { logout } from '@/actions';
import { Button } from '@/components/ui/button';
import { getCurrentUser } from '@/lib/session';

export default async function DashboardPage() {
  const currentUser = await getCurrentUser();
  return (
    <div>
      <div>{JSON.stringify(currentUser)}</div>
      <form action={logout}>
        <Button>logout</Button>
      </form>
    </div>
  );
}
