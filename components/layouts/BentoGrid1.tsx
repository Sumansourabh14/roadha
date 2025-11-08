import { FileTextIcon, InputIcon } from "@radix-ui/react-icons";

import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { ShieldIcon } from "lucide-react";
import { useTranslations } from "next-intl";

export function BentoGrid1() {
  const t = useTranslations("Features");

  const features = [
    {
      Icon: FileTextIcon,
      name: t.raw("features")[1].heading,
      description: t.raw("features")[1].paragraph,
      href: "/learn/road-safety-course-beginners",
      cta: t.raw("features")[1].cta,
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:row-start-1 lg:row-end-3 lg:col-start-2 lg:col-end-3",
    },
    {
      Icon: InputIcon,
      name: t.raw("features")[0].heading,
      description: t.raw("features")[0].paragraph,
      href: "/ask/roadha",
      cta: t.raw("features")[0].cta,
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
      Icon: ShieldIcon,
      name: t.raw("features")[2].heading,
      description: t.raw("features")[2].paragraph,
      href: "/road-safety/beginner/wear-seatbelts-and-helmets",
      cta: t.raw("features")[2].cta,
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-3",
    },
    // {
    //   Icon: GlobeIcon,
    //   name: "Weekly Video Lessons",
    //   description:
    //     "Short, voice-over videos recorded via Google Slides — uploaded every week.",
    //   href: "/videos",
    //   cta: "Watch now",
    //   background: <img className="absolute -right-20 -top-20 opacity-60" />,
    //   className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    // },
    // {
    //   Icon: CalendarIcon,
    //   name: "Structured Timeline",
    //   description: "Follow a clear learning path.",
    //   href: "/timeline",
    //   cta: "View roadmap",
    //   background: <img className="absolute -right-20 -top-20 opacity-60" />,
    //   className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    // },
    // {
    //   Icon: BellIcon,
    //   name: "Safest Cars List",
    //   description:
    //     "Curated list of India's safest cars — inspired by Levelsio's flight picks.",
    //   href: "/safest-cars",
    //   cta: "Check safety index",
    //   background: <img className="absolute -right-20 -top-20 opacity-60" />,
    //   className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    // },
  ];

  return (
    <BentoGrid className="lg:grid-rows-3 max-w-[1000px] mx-auto py-16 px-6">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}
