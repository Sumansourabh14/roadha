import FAQHome from "@/components/accordions/FAQHome";
import H2 from "@/components/text/H2";
import { useTranslations } from "next-intl";

const FAQ = () => {
  const t = useTranslations("FAQ");

  return (
    <section className="relative py-30 overflow-hidden w-full">
      <div className="absolute -bottom-28 -left-28 w-96 h-96 bg-cyan-400/20 rounded-full blur-2xl opacity-25 pointer-events-none z-0"></div>
      <div className="absolute top-10 right-0 w-72 h-72 bg-zinc-400/20 rounded-full blur-2xl opacity-30 pointer-events-none z-0"></div>

      <H2 title={t("title")} />
      <section className="max-w-3xl mx-auto px-8">
        <FAQHome />
      </section>
    </section>
  );
};

export default FAQ;
