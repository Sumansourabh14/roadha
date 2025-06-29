import { SITE_METADATA } from "@/data/constants";
import Link from "next/link";
import SocialLink from "../navigation/SocialLink";
import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

const socialLinks = [
  {
    id: "1",
    title: "Twitter/X",
    link: "https://x.com/roadha_",
    icon: TwitterLogoIcon,
  },
  {
    id: "2",
    title: "GitHub",
    link: "https://github.com/Sumansourabh14/roadha",
    icon: GitHubLogoIcon,
  },
];

const Footer = () => {
  return (
    <footer className="border-t bg-white dark:bg-black text-gray-600 dark:text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-10 flex flex-col gap-10">
        {/* Top Row: Branding + Links + Social */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full">
          {/* Branding */}
          <div className="text-lg font-semibold">
            © 2025 {SITE_METADATA.title} | All Rights Reserved
          </div>

          {/* Nav Links */}
          <nav className="flex space-x-6 text-sm">
            <Link
              href="/learn"
              className="hover:text-black dark:hover:text-white"
            >
              Learn
            </Link>
          </nav>

          {/* Social Icons */}
          <div className="flex space-x-4 text-xl">
            {socialLinks.map((item) => (
              <SocialLink
                key={item.id}
                icon={item.icon}
                link={item.link}
                title={item.link}
              />
            ))}
          </div>
        </div>

        {/* Logo/Name Block */}
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
