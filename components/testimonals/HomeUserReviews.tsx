import React from "react";
import H2 from "../text/H2";
import { ReviewsMarquee } from "./ReviewsMarquee";
import { useTranslations } from "next-intl";

const HomeUserReviews = () => {
  const t = useTranslations("Testimonials");

  return (
    <section className="relative py-20 overflow-hidden w-full">
      <H2 title={t("title")} />
      <section className="px-8">
        <ReviewsMarquee />
      </section>
    </section>
  );
};

export default HomeUserReviews;
