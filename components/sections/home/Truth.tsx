import H2 from "@/components/text/H2";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Truth = () => {
  const t = useTranslations("Truth");

  return (
    <section className="max-w-[1000px] py-20 px-8 mx-auto">
      <div className="max-w-5xl mx-auto mb-12 text-center">
        <H2 title={t("title")} />
        <Link
          href={`/truth`}
          className="py-4 px-12 bg-green-300 text-black rounded-sm font-bold text-xl"
        >
          {t("button")}
        </Link>
      </div>
    </section>
  );
};

export default Truth;
