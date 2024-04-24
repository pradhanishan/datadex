import { logout } from '@/actions';
import { Button } from '@/components/ui/button';

export function LogoutButton() {
  return (
    <form action={logout}>
      <Button type="submit">logout</Button>
    </form>
  );
}
