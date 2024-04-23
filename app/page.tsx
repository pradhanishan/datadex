import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <Card className="flex flex-col justify-center items-center">
        <CardHeader>
          <CardTitle className="text-3xl">Datadex</CardTitle>
          <CardDescription>
            Document your database <br />
            like never before <br />
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Link href="/auth/login">
            <Button className="w-[200px]">login</Button>
          </Link>
        </CardContent>
        <CardFooter className="group">
          <p className="text-sm ">
            courtesy of{' '}
            <span className="font-semibold group-hover:text-sky-600 group-hover:underline group-hover:underline-offset-8 uppercase">
              ishan pradhan
            </span>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
