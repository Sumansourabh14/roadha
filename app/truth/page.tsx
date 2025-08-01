import H1 from "@/components/text/H1";

const TruthPage = () => {
  return (
    <section className="flex flex-col gap-[32px] px-8 py-20 w-full max-w-[1440px] mx-auto">
      <H1 title="What's wrong with India?" />

      <section className="max-w-2xl space-y-4 mt-8">
        <p>It is simple.</p>
        <p>
          Indians keep on buying more & more cars. But have their brains gotten
          bigger with the road safety knowledge too?
        </p>
        <p>Not so much.</p>
        <p>
          According to MoRTH,{" "}
          <span className="text-4xl font-bold text-red-400">153,972</span>{" "}
          persons were{" "}
          <a
            href="https://tripc.iitd.ac.in/assets/publication/RSI_2023_web.pdf"
            className="underline hover:no-underline"
            target="_blank"
          >
            killed in road crashes
          </a>{" "}
          in the year 2021.
        </p>
        <p>Are these increasing year by year?</p>
        <p>Yes.</p>
        <p>Hence, Roadha.</p>
      </section>
    </section>
  );
};

export default TruthPage;
