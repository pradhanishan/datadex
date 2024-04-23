import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { DoubleArrowRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { BiSolidBookBookmark } from 'react-icons/bi';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <Card className="flex flex-col justify-center items-center">
        <CardHeader>
          <CardTitle className="text-3xl flex items-center justify-between gap-6 ">
            Datadex <BiSolidBookBookmark size={28} />
          </CardTitle>
          <CardDescription>
            Document your data <br />
            know your data <br />
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Link href="/auth/login">
            <Button className="w-[200px] flex gap-4 group">
              get started <MdKeyboardDoubleArrowRight size={28} />
            </Button>
          </Link>
        </CardContent>
        <CardFooter>
          <p className="text-sm ">
            courtesy of <span className="font-semibold ">ipradhan</span>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
