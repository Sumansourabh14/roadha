import H1 from "@/components/text/H1";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Truth | Roadha",
  description: "What's wrong with us?",
};

const TruthPage = () => {
  return (
    <section className="flex flex-col gap-[32px] px-8 py-20 md:py-32 max-w-[1440px] mx-auto">
      <H1 title="We are just clueless on roads." />

      <section className="max-w-xl space-y-4 mt-8">
        <p>
          We keep buying more and more vehicles. But have our brains gotten
          bigger with road safety knowledge too?
        </p>

        <p>Not at all.</p>

        <p>You know it. I know it.</p>

        <p>
          According to the Ministry of Road Transport and Highways (MoRTH),{" "}
          <strong>
            over 1.5 lakh people were killed in road crashes in 2021 alone
          </strong>
          .
        </p>
        <p>
          That’s{" "}
          <span className="bg-red-400 text-black px-1.5 mx-0.5 rounded-xs select-none">
            1 person every 3.5 minutes
          </span>
          .
        </p>

        <p>What’s worse?</p>
        <p>
          These numbers <strong>keep increasing</strong> every year.
        </p>
        <p>And most of these accidents? </p>

        <p>
          They’re avoidable: caused by overspeeding, ignorance, and lack of
          basic awareness.
        </p>

        <p>
          <strong>So, why Roadha?</strong>
        </p>

        <p>
          Because there’s no easy, fun, and India-specific way to{" "}
          <strong>learn road safety</strong>.
        </p>

        <p>We don’t teach it in schools.</p>
        <p>We don’t re-learn it before buying a new car.</p>
        <p>We don’t quiz ourselves before hitting the highway.</p>

        <p>
          <strong>
            <span className="bg-green-400 text-black px-1.5 mx-0.5 rounded-xs select-none">
              Roadha
            </span>
          </strong>{" "}
          is India’s first road safety learning platform
        </p>
        {/* <ul className="list-disc list-inside pl-4">
          <li>Breaks down rules into simple, relatable tips 📘</li>
          <li>
            Makes safety learning interactive with quizzes and scenarios ✅
          </li>
          <li>
            Will eventually let users <strong>track their vehicles</strong>,{" "}
            <strong>store documents</strong>, and{" "}
            <strong>compete on leaderboards</strong> — all for building a
            smarter driving culture. 🏆
          </li>
        </ul> */}

        <p className="text-2xl">
          <strong>Not just a platform. A public movement.</strong>
        </p>
      </section>
    </section>
  );
};

export default TruthPage;
