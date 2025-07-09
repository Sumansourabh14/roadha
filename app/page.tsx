import { BentoGrid1 } from "@/components/layouts/BentoGrid1";
import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import TriviaPopup from "@/components/popups/TriviaPopup";
import Hero from "@/components/sections/home/Hero";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col gap-[32px] items-center sm:items-start">
        <Hero />
        <BentoGrid1 />
        <TriviaPopup />
      </main>
      <Footer />
    </div>
  );
}
