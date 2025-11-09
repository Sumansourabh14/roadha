import { IssueItem, NavItem } from "@/types";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { useTranslations } from "next-intl";
import Link from "next/link";
import SocialLink from "../navigation/SocialLink";

const socialLinks = [
  {
    id: "1",
    title: "Instagram",
    link: "https://instagram.com/roadha.india",
    icon: InstagramLogoIcon,
  },
  {
    id: "2",
    title: "Twitter/X",
    link: "https://x.com/roadha_",
    icon: TwitterLogoIcon,
  },
  {
    id: "3",
    title: "GitHub",
    link: "https://github.com/Sumansourabh14/roadha",
    icon: GitHubLogoIcon,
  },
];

const Footer = () => {
  const t = useTranslations("Navbar");
  const f = useTranslations("Footer");

  return (
    <footer className="border-t bg-white dark:bg-black text-gray-600 dark:text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-10 flex flex-col gap-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-between items-start gap-4 w-full">
          <section>
            <h4 className="mb-4 text-muted-foreground uppercase">
              {f.raw("agenda").title}
            </h4>
            <section className="flex flex-col space-y-2">
              {f.raw("agenda").items.map((item: NavItem, index: number) => (
                <Link
                  key={index}
                  href={item.link}
                  className="hover:text-black dark:hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </section>
          </section>

          <section>
            <h4 className="mb-4 text-muted-foreground uppercase">
              {t.raw("issues").title}
            </h4>
            <section className="flex flex-col space-y-2">
              {t.raw("issues").items.map((item: IssueItem, index: number) => (
                <Link
                  key={index}
                  href={item.link}
                  className="hover:text-black dark:hover:text-white"
                >
                  {item.title}
                </Link>
              ))}
            </section>
          </section>

          <section>
            <h4 className="mb-4 text-muted-foreground uppercase">
              {f.raw("solutions").title}
            </h4>
            <section className="flex flex-col space-y-2">
              {t.raw("navItems").map((item: NavItem, index: number) => (
                <Link
                  key={index}
                  href={item.link}
                  className="hover:text-black dark:hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </section>
          </section>
        </div>

        <section className="flex justify-between items-center border-t-2 border-dashed pt-4">
          <div className="text-md font-light text-muted-foreground">
            © {new Date().getFullYear()} {t("brand")} | {f("copyright")}
          </div>
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
        </section>

        <section className="text-center pb-8">
          <p
            className="font-bold tracking-tighter text-6xl sm:text-9xl lg:text-[11rem] xl:text-[14rem] 2xl:text-[16rem]"
            style={{ lineHeight: 1 }}
          >
            <span className="text-[#1b7a1b]">{t("brand")}</span>
          </p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
