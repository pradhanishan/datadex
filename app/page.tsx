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
            Know your data, the data behind <br />
            your data, and the data behind <br />
            the data behind your data
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Button className="w-[200px]">
            <Link href="/auth/login">login</Link>
          </Button>
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
