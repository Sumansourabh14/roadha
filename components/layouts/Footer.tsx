import { SITE_METADATA } from "@/data/constants";
import Link from "next/link";
import SocialLink from "../navigation/SocialLink";
import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

const resources = [
  {
    title: "Truth",
    link: "/truth",
  },
];

const solutions = [
  {
    title: "Learn",
    link: "/learn",
  },
  // {
  //   title: "Resources",
  //   link: "/resources",
  // },
  {
    title: "Road Safety Course",
    link: "/road-safety/beginner",
  },
  {
    title: "Ask Roadha",
    link: "/ask/roadha",
  },
];

const issues = [
  {
    title: "Wrong side driving",
    link: "/issues/driving/wrong-side",
  },
  {
    title: "Drunk driving",
    link: "/issues/driving/drunk",
  },
  {
    title: "Reckless driving",
    link: "/issues/driving/reckless",
  },
  {
    title: "Ethanol Blended Petrol",
    link: "/issues/ethanol-blended-petrol",
  },
];

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-between items-start gap-4 w-full">
          <section>
            <h4 className="mb-4 text-muted-foreground uppercase">AGENDA</h4>
            <section className="flex flex-col space-y-2">
              {resources.map((item, index) => (
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
            <h4 className="mb-4 text-muted-foreground uppercase">ISSUES</h4>
            <section className="flex flex-col space-y-2">
              {issues.map((item, index) => (
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
            <h4 className="mb-4 text-muted-foreground uppercase">Solutions</h4>
            <section className="flex flex-col space-y-2">
              {solutions.map((item, index) => (
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
        </div>

        <section className="flex justify-between items-center border-t-2 border-dashed pt-4">
          <div className="text-md font-light text-muted-foreground">
            © {new Date().getFullYear()} {SITE_METADATA.title}. All Rights
            Reserved
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
            <span className="text-[#1b7a1b]">Road</span>ha
          </p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
