import H1 from "@/components/text/H1";
import TweetEmbed from "@/components/utils/TweetEmbed";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ethanol Blended Petrol - Issues | Roadha",
  description: "Ethanol Blended Petrol",
};

const EthanolBlendedPetrol = () => {
  return (
    <>
      <section className="flex flex-col gap-[24px] px-8 py-20 md:py-24 max-w-[1440px] mx-auto">
        <H1 title="Ethanol Blended Petrol" />

        <section className="max-w-xl space-y-4 mt-2">
          <p>
            India&apos;s new E20 fuel blend (20% ethanol, 80% petrol) aims to
            cut emissions and reduce oil imports.
          </p>
          <p className="text-3xl font-bold uppercase text-red-500">But...</p>
          <TweetEmbed tweetId={"1951686572598038845"} />
          <p>
            The concerning part about this is that most existing vehicles are
            designed for E10 or lower, leading to engine issues, corrosion, and
            lower mileage.
          </p>
          <p>
            Ethanol absorbs water, which can harm fuel systems and reduce
            performance in older cars and two-wheelers.
          </p>
          <p>
            Until vehicles are fully E20-compatible, users may face higher
            maintenance costs and inconsistent fuel efficiency.
          </p>
          <TweetEmbed tweetId={"1951830984032411705"} />
          <TweetEmbed tweetId={"1951850758665544175"} />

          <p>This is a daylight robbery, to be honest.</p>

          <p className="text-3xl font-bold uppercase text-red-500">
            How to raise our voice against this?
          </p>
        </section>
      </section>
    </>
  );
};

export default EthanolBlendedPetrol;
