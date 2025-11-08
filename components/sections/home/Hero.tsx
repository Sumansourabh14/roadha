import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="w-full py-48 flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl sm:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold tracking-tight">
          {t("title")}
        </h1>
        <p className="max-w-xl mt-6 text-lg text-center mx-auto">
          {t("subtitle")}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/learn">
            <Button className="text-base px-6 py-5 cursor-pointer">
              {t("button")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
