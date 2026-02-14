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
import { useTranslations } from "next-intl";
import Link from "next/link";

export const metadata = {
  title: `Learn | ${SITE_METADATA.title}`,
  description: "Learn Road Safety",
};

const Learn = () => {
  const t = useTranslations("Learn");

  return (
    <section className="max-w-[1440px] mx-auto px-8 min-h-[70vh]">
      <section className="pt-24 pb-8">
        <H1 title={t("title")} />
      </section>

      <section className="grid grid-cols-1 py-4">
        <Link href={`/learn/road-safety-course-beginners`}>
          <Card className="max-w-[500px] mx-auto">
            <CardHeader>
              <CardTitle className="text-xl">{t("course.title")}</CardTitle>
              <CardDescription className="pt-4">
                {t("course.description")}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm">15/52 {t("course.lessons")}</p>
              <Badge variant="default">{t("course.difficulty")}</Badge>
            </CardContent>
          </Card>
        </Link>
      </section>
    </section>
  );
};

export default Learn;
