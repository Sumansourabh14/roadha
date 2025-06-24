import { SITE_METADATA } from "@/data/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t bg-white dark:bg-black text-gray-600 dark:text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Branding */}
          <div className="text-lg font-semibold">
            © 2025 {SITE_METADATA.title} | All Rights Reserved
          </div>

          {/* Links */}
          <nav className="flex space-x-6 text-sm">
            <Link href="#" className="hover:text-black dark:hover:text-white">
              Privacy
            </Link>
          </nav>
        </div>
        <div className="text-center pb-8">
          <h2
            className="font-bold tracking-tighter text-6xl sm:text-9xl lg:text-[11rem] xl:text-[14rem]"
            style={{ lineHeight: 1 }}
          >
            <span className="text-[#1b7a1b]">Road</span>ha.
          </h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
