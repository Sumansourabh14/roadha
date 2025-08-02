import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import H1 from "@/components/text/H1";
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <Navbar />
      <section className="text-center py-20 px-8 lg:py-32 max-w-2xl mx-auto min-h-[500px]">
        <H1 title="Ohh, 404: Page not found" />
        <p className="my-8">Could not find the requested page :(</p>
        <Link href="/">Return Home</Link>
      </section>
      <Footer />
    </div>
  );
}
