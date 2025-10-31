import H1 from "@/components/text/H1";
import TweetEmbed from "@/components/utils/TweetEmbed";
import { SITE_METADATA } from "@/data/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Wrong Side Driving - Issues | ${SITE_METADATA.title}`,
  description: "Wrong side driving",
};

const WrongSideDriving = () => {
  return (
    <>
      <section className="flex flex-col gap-[24px] px-8 py-12 md:py-24 max-w-[1440px] mx-auto">
        <H1 title="Wrong Side Driving" />

        <section className="max-w-xl space-y-4 mt-8">
          <p>
            Wrong side driving happens when a person drives against the
            authorized flow of traffic.
          </p>
          <p>
            Wrong-side driving is the{" "}
            <span className="bg-red-400 text-black px-1.5 mx-0.5 rounded-xs select-none">
              2nd highest cause of fatality
            </span>{" "}
            on Indian roads according to the &quot;Road Accident in India
            2019&quot; study.
          </p>
          <TweetEmbed tweetId={"1964413456523886709"} />
          <TweetEmbed tweetId={"1965117295719842122"} />
          <p>Now, how is this still occuring in {new Date().getFullYear()}??</p>
          <p className="text-3xl font-bold uppercase text-red-500">
            NEVER DRIVE ON the WRONG SIDE.
          </p>
        </section>
      </section>
    </>
  );
};

export default WrongSideDriving;
