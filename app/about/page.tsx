import H1 from "@/components/text/H1";
import { SITE_METADATA } from "@/data/constants";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: `About | ${SITE_METADATA.title}`,
  description: "About",
};

const About = () => {
  return (
    <>
      <section className="flex flex-col gap-[24px] px-8 py-12 md:py-24 max-w-[1440px] mx-auto">
        <H1 title="About" />

        <section className="max-w-xl space-y-4 mt-8">
          <p>
            <strong>Roadha</strong> is your go-to guide for road safety in
            India.
          </p>
          <p>
            Whether you are new behind the wheel or just want to brush up on the
            rules, we have got you covered.
          </p>
          <p>Roadha breaks things down step-by-step.</p>
          <p>
            From understanding traffic signs to knowing what to do in an
            emergency, Roadha makes it easy to stay safe and informed.
          </p>
          <h2 className="text-xl font-bold">Just starting out?</h2>
          <p>
            Our beginner road safety course is the perfect way to get up to
            speed.
          </p>
          <p>
            It is packed with easy-to-follow lessons, real-world tips, and
            helpful visuals to make learning fun and practical.
          </p>

          <div className="py-4">
            <Link
              href="/road-safety/beginner"
              className="py-4 px-12 bg-green-300 text-black rounded-sm font-bold text-xl"
            >
              Start course (FREE)
            </Link>
          </div>

          <p>Every Indian citizen should take this course.</p>

          <p>Roadha believes safer roads start with smarter choices.</p>
          <p>
            <strong>Ride safe. Drive safe.</strong>
          </p>
        </section>
      </section>
    </>
  );
};

export default About;
