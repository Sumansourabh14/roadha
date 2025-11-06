import { BentoGrid1 } from "@/components/layouts/BentoGrid1";
import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import TriviaPopup from "@/components/popups/TriviaPopup";
import FAQ from "@/components/sections/home/FAQ";
import Hero from "@/components/sections/home/Hero";
import Truth from "@/components/sections/home/Truth";
import WhyRoadha from "@/components/sections/home/WhyRoadha";
import HomeUserReviews from "@/components/testimonals/HomeUserReviews";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col gap-[32px] items-center sm:items-start">
        <Hero />
        <WhyRoadha />
        <Truth />
        <BentoGrid1 />
        <HomeUserReviews />
        <FAQ />
        <TriviaPopup />
      </main>
      <Footer />
    </div>
  );
}
