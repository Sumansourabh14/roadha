import H1 from "@/components/text/H1";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const Learn = () => {
  return (
    <div className="max-w-[1390px] mx-auto px-8">
      <section className="py-8">
        <H1 title="Learn" />
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 py-4">
        <Link href={`/learn/road-safety-course-beginners`}>
          <Card>
            <CardHeader>
              <CardTitle>Ultimate Road Safety Course</CardTitle>
              <CardDescription>
                All you need to get started on road safety rules and tipss
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Beginner</p>
            </CardContent>
          </Card>
        </Link>
      </section>
    </div>
  );
};

export default Learn;
