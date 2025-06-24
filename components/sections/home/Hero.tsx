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
          Join the movement to promote awareness, report unsafe driving, and
          save lives. Empowering citizens with tools to educate, report, and
          change road behavior.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/report">
            <Button className="text-base px-6 py-3">Report an Incident</Button>
          </Link>
          <Link href="/learn">
            <Button
              variant="outline"
              className="text-base px-6 py-3 border-gray-500"
            >
              Learn Road Rules
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
