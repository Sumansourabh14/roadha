import H1 from "@/components/text/H1";
import { SITE_METADATA } from "@/data/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `About | ${SITE_METADATA.title}`,
  description: "About",
};

const About = () => {
  return (
    <>
      <section className="flex flex-col gap-[24px] px-8 py-20 md:py-32 max-w-[1440px] mx-auto">
        <H1 title="About" />

        <section className="max-w-xl space-y-4 mt-8">
          <p>
            <strong>Roadha</strong> is a step-by-step road safety platform built
            for India, packed with tips & rules.
          </p>
        </section>
      </section>
    </>
  );
};

export default About;
