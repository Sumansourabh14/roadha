import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full py-48 flex items-center justify-center px-6 bg-white dark:bg-[radial-gradient(125%_125%_at_50%_101%,rgba(27,122,27,1)_0%,rgba(27,110,27,0.9)_15%,rgba(27,90,27,0.8)_30%,rgba(40,40,40,1)_50%,rgba(20,20,20,1)_70%,rgba(0,0,0,1)_100%)]">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl sm:text-6xl 2xl:text-7xl font-extrabold tracking-tight">
          That&apos;s it! No More Accidents.
        </h1>
        <p className="mt-6 text-lg">
          A step-by-step road safety platform built for India — packed with
          tips, rules, videos, and curated resources to help you become a safer
          driver and informed citizen.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/learn">
            <Button className="text-base px-6 py-3 border-gray-500 cursor-pointer">
              Start Learning Road Safety
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
