import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faqs from "@/data/faq.json";

const FAQHome = () => {
  return (
    <div>
      <Accordion
        type="single"
        collapsible
        defaultValue="What is this site about?"
      >
        {faqs.map((item, index) => (
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
