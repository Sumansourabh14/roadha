import { FileTextIcon, InputIcon } from "@radix-ui/react-icons";

import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { ShieldIcon } from "lucide-react";

const features = [
  {
    Icon: FileTextIcon,
    name: "Ultimate Road Safety Guide",
    description:
      "FREE Step-by-step course covering road safety rules, tips & scenarios in India.",
    href: "/learn/road-safety-course-beginners",
    cta: "Start learning",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-3 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: InputIcon,
    name: "Ask Roadha",
    description: "Ask Roadha about any road safety tips and laws.",
    href: "/ask/roadha",
    cta: "Ask Roadha",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: ShieldIcon,
    name: "Seatbelt & Helmet Awareness",
    description:
      "Learn why skipping helmets or seatbelts, even for short trips, can be fatal. Includes real examples and laws.",
    href: "/road-safety/beginner/wear-seatbelts-and-helmets",
    cta: "Explore safety habits",
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

export function BentoGrid1() {
  return (
    <BentoGrid className="lg:grid-rows-3 max-w-[1000px] mx-auto py-16 px-6">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}
