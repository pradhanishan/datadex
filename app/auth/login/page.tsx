import { LoginForm } from '@/components/auth/login-form';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function Login() {
  return (
    <Card className="flex flex-col justify-center items-center">
      <CardHeader>
        <CardTitle className="text-3xl">Login</CardTitle>
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>
      <Link href={'/auth/register'}>
        <CardFooter className="group">
          <span className="text-xs group-hover:text-sky-600 group-hover:underline group-hover:underline-offset-8 cursor-pointer">
            I don&apos;t have an account
          </span>
        </CardFooter>
      </Link>
    </Card>
  );
}
