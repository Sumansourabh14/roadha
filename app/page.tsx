import { BentoGrid1 } from "@/components/layouts/BentoGrid1";
import Hero from "@/components/sections/home/Hero";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center p-8 pb-20 gap-16">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Hero />
        <BentoGrid1 />
      </main>
    </div>
  );
}
