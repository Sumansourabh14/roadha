import React from "react";
import H2 from "../text/H2";
import { ReviewsMarquee } from "./ReviewsMarquee";

const HomeUserReviews = () => {
  return (
    <section className="relative py-20 overflow-hidden w-full">
      <H2 title="Used by 1600+ users already" />
      <section className="px-8">
        <ReviewsMarquee />
      </section>
    </section>
  );
};

export default HomeUserReviews;
