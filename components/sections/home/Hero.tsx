import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full py-48 flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
          Making Roads Safer, Together
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
