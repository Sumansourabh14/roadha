import { BentoGrid1 } from "@/components/layouts/BentoGrid1";
import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import TriviaPopup from "@/components/popups/TriviaPopup";
import FAQ from "@/components/sections/home/FAQ";
import Hero from "@/components/sections/home/Hero";
import WhyRoadha from "@/components/sections/home/WhyRoadha";
import H2 from "@/components/text/H2";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col gap-[32px] items-center sm:items-start">
        <Hero />
        <WhyRoadha />
        <section className="max-w-[1000px] py-20 px-8 mx-auto">
          <div className="max-w-5xl mx-auto mb-12 text-center">
            <H2 title="Are the accidents really that much?" />
            <Link
              href={`/truth`}
              className="py-4 px-12 bg-white text-black rounded-sm font-bold text-xl"
            >
              Sadly, yes
            </Link>
          </div>
        </section>
        <BentoGrid1 />
        <section className="relative py-30 overflow-hidden w-full">
          <div className="absolute -bottom-28 -left-28 w-96 h-96 bg-cyan-400/20 rounded-full blur-2xl opacity-25 pointer-events-none z-0"></div>
          <div className="absolute top-10 right-0 w-72 h-72 bg-zinc-400/20 rounded-full blur-2xl opacity-30 pointer-events-none z-0"></div>

          <h2 className="scroll-m-20 text-4xl font-semibold tracking-tight text-center mb-8">
            FAQs
          </h2>
          <section className="max-w-3xl mx-auto px-8">
            <FAQ />
          </section>
        </section>
        <TriviaPopup />
      </main>
      <Footer />
    </div>
  );
}
