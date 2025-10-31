import H1 from "@/components/text/H1";
import { SITE_METADATA } from "@/data/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Reckless Driving - Issues | ${SITE_METADATA.title}`,
  description: "Reckless driving",
};

const RecklessDriving = () => {
  return (
    <>
      <section className="flex flex-col gap-[24px] px-8 py-20 md:py-32 max-w-[1440px] mx-auto">
        <H1 title="Reckless Driving" />

        <section className="max-w-xl space-y-4 mt-8">
          <p>
            Reckless driving happens when a person drives without manners.
            Example: Not in a straight line, not steadyily, not within speed
            limit, zig-zag driving.
          </p>
          <p>
            According to this tweet{" "}
            <a
              href="https://x.com/ChandivaliCCWA/status/1702038942139433270"
              target="_blank"
              className="underline"
            >
              posted on X
            </a>
            : A 14-year-old hits a senior citizen at Nahar Amrit Shakti Road,
            Chandivali. Senior citizen is now advised to go on bedrest for the
            next 3 months. Parents penalised for 5K.
          </p>
          <p>
            This is a major safety concern for pedestrians when parents hand
            over their cars to kids.
          </p>
          <p>What a sad state of law in this country!</p>

          <p className="text-3xl font-bold uppercase text-red-500">
            NEVER GIVE YOUR CAR TO YOUR UNDERAGE CHILD.
          </p>
          <p className="text-3xl font-bold uppercase text-red-500">
            STOP RECKLESS DRIVING.
          </p>
        </section>
      </section>
    </>
  );
};

export default RecklessDriving;
