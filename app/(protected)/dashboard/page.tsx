import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { subjectService } from '@/services';

interface ISubjectCardProps {
  name: string;
  description: string;
}

function SubjectCard({ name, description }: ISubjectCardProps) {
  return (
    <Card className="flex flex-col justify-between ">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter>
        <Button className="w-1/2 sm:w-full" variant="secondary">
          View
        </Button>
      </CardFooter>
    </Card>
  );
}

export default async function DashboardPage() {
  const subjects = await subjectService.getAllSubjects();

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 xl:grid-cols-4 p-2">
      {subjects.map((subject) => {
        return <SubjectCard key={subject.id} name={subject.name} description={subject.description} />;
      })}
    </div>
  );
}
