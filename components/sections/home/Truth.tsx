import H2 from "@/components/text/H2";
import Link from "next/link";

const Truth = () => {
  return (
    <section className="max-w-[1000px] py-20 px-8 mx-auto">
      <div className="max-w-5xl mx-auto mb-12 text-center">
        <H2 title="Are the accidents really that much?" />
        <Link
          href={`/truth`}
          className="py-4 px-12 bg-green-300 text-black rounded-sm font-bold text-xl"
        >
          Sadly, yes
        </Link>
      </div>
    </section>
  );
};

export default Truth;
