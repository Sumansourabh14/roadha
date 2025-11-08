import H2 from "@/components/text/H2";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";

type Ability = {
  heading: string;
  paragraph: string;
};

export default function WhyRoadha() {
  const t = useTranslations("WhyRoadha");

  return (
    <section className="max-w-[1000px] py-20 px-8 mx-auto">
      <div className="max-w-5xl mx-auto mb-12">
        <H2 title={t("heading")} />
        <section className="max-w-2xl space-y-4">
          {t.raw("paragraphs").map((text: string, index: number) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: text }} />
          ))}
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            {t("subheading")}
          </h3>
        </section>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {t.raw("abilities").map((ability: Ability, index: number) => (
          <Card key={index}>
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">{ability.heading}</h3>
              <p className="text-zinc-400">{ability.paragraph}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
