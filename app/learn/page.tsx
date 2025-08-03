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
    <section className="max-w-[1440px] mx-auto px-8 min-h-[70vh]">
      <section className="pt-24 pb-8">
        <H1 title="Learn Road Safety" />
      </section>

      <section className="grid grid-cols-1 py-4">
        <Link href={`/learn/road-safety-course-beginners`}>
          <Card className="max-w-[500px] mx-auto">
            <CardHeader>
              <CardTitle>Ultimate Road Safety Course</CardTitle>
              <CardDescription>
                A complete beginner-friendly guide to road rules, tips &
                real-life scenarios.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Level: Beginner</p>
            </CardContent>
          </Card>
        </Link>
      </section>
    </section>
  );
};

export default Learn;
