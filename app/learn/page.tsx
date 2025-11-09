import H1 from "@/components/text/H1";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SITE_METADATA } from "@/data/constants";
import Link from "next/link";

export const metadata = {
  title: `Learn | ${SITE_METADATA.title}`,
  description: "Learn Road Safety",
};

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
              <CardTitle className="text-xl">
                Road Safety Course (India)
              </CardTitle>
              <CardDescription className="pt-4">
                A complete beginner-friendly guide to road rules, tips &
                real-life scenarios.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm">14/52 lessons</p>
              <Badge variant="default">Beginner</Badge>
            </CardContent>
          </Card>
        </Link>
      </section>
    </section>
  );
};

export default Learn;
