import { RegistrationForm } from '@/components/auth/registration-form';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function Register() {
  return (
    <Card className="flex flex-col justify-center items-center">
      <CardHeader>
        <CardTitle className="text-3xl">Register</CardTitle>
      </CardHeader>
      <CardContent>
        <RegistrationForm />
      </CardContent>
      <CardFooter className="group">
        <Link href={'/auth/login'}>
          <span className="text-xs group-hover:text-sky-600 group-hover:underline group-hover:underline-offset-8 cursor-pointer">
            I already have an account
          </span>
        </Link>
      </CardFooter>
    </Card>
  );
}
