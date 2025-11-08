import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";

type Question = {
  question: string;
  answer: string;
};

const FAQHome = () => {
  const t = useTranslations("FAQ");

  return (
    <div>
      <Accordion
        type="single"
        collapsible
        defaultValue="What is this site about?"
      >
        {t.raw("questions").map((item: Question, index: number) => (
          <AccordionItem value={item.question} key={index}>
            <AccordionTrigger className="cursor-pointer">
              {item.question}
            </AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQHome;
