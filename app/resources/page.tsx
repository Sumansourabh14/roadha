import H1 from "@/components/text/H1";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getSources } from "@/supabase/fetchDb";
import Link from "next/link";

const Resources = async () => {
  const data = await getSources();

  return (
    <section className="max-w-[1440px] mx-auto px-8 min-h-[600px] py-20 lg:py-24">
      <section>
        <H1 title="Resources" />
      </section>

      <section className="max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-12 py-12 mx-auto">
        {!!data.data &&
          data.data.map((item) => (
            <Card key={item.id}>
              <CardHeader>
                <Link href={`/resources/${item.id}`}>
                  <CardTitle>{item.title}</CardTitle>
                </Link>
                <CardDescription>
                  A complete beginner-friendly guide to road rules, tips &
                  real-life scenarios.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <a
                  href={`${item.file_url}`}
                  target="_blank"
                  className="text-sm text-muted-foreground underline"
                >
                  Original PDF <span className="text-lg">↗</span>
                </a>
              </CardFooter>
            </Card>
          ))}
      </section>
    </section>
  );
};

export default Resources;
