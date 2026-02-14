import H1 from "@/components/text/H1";
import { SITE_METADATA } from "@/data/constants";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import Link from "next/link";

export const metadata: Metadata = {
  title: `About | ${SITE_METADATA.title}`,
  description: "About",
};

const About = () => {
  const t = useTranslations("About");

  return (
    <>
      <section className="flex flex-col gap-[24px] px-8 py-12 md:py-24 max-w-[1440px] mx-auto">
        <H1 title={t("title")} />

        <section className="max-w-xl space-y-4 mt-8">
          {t.raw("paragraphs").map((text: string, index: number) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: text }} />
          ))}

          <h2 className="text-xl font-bold">{t("justStartingOut.title")}</h2>
          {t
            .raw("justStartingOut.paragraphs")
            .map((text: string, index: number) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: text }} />
            ))}

          <div className="py-4">
            <Link
              href="/road-safety/beginner"
              className="py-4 px-12 bg-green-300 text-black rounded-sm font-bold text-xl"
            >
              {t("cta.title")}
            </Link>
          </div>

          {t.raw("ending").map((text: string, index: number) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: text }} />
          ))}
        </section>
      </section>
    </>
  );
};

export default About;
