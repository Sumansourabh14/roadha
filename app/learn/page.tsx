import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const Learn = () => {
  return (
    <div className="max-w-[1390px] mx-auto px-8">
      <section className="py-8">
        <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
          Learn
        </h1>
      </section>

      <section className="grid grid-cols-2 py-4">
        <Link href={`/learn/road-safety-course-begineers`}>
          <Card>
            <CardHeader>
              <CardTitle>Road Safety</CardTitle>
              {/* <CardDescription>Card Description</CardDescription> */}
            </CardHeader>
            <CardContent></CardContent>
            <CardFooter>
              <p>Begineer</p>
            </CardFooter>
          </Card>
        </Link>
      </section>
    </div>
  );
};

export default Learn;
