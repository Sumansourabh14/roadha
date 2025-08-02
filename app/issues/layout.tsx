import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import { ReactNode } from "react";

export default function IssuesLayout({ children }: { children: ReactNode }) {
  return (
    <section>
      <Navbar />
      {children}
      <Footer />
    </section>
  );
}
