import { logout } from '@/actions';
import { auth } from '@/auth';
import { Button } from '@/components/ui/button';

export default async function DashboardPage() {
  const session = await auth();

  return (
    <div>
      <div>{JSON.stringify(session)}</div>
      <form action={logout}>
        <Button>logout</Button>
      </form>
    </div>
  );
}
