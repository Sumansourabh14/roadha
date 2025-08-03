import H1 from "@/components/text/H1";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getRules } from "@/supabase/fetchDb";

const MotorVehicleDrivingRegulation2017 = async () => {
  const data = await getRules("aea31260-5f46-42e8-82ad-9e0dfcf26aa0");

  return (
    <section className="max-w-[1440px] mx-auto px-8 min-h-[600px] py-20 lg:py-24">
      <section>
        <H1 title="Motor Vehicle Driving Regulation 2017" />
      </section>

      <section className="max-w-4xl mx-auto py-12">
        <Accordion type="single" collapsible>
          {!!data.data &&
            data.data.map((item) => (
              <AccordionItem value={item.title} key={item.id}>
                <AccordionTrigger className="cursor-pointer text-lg">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="text-[1rem]">
                  {item.rule}
                </AccordionContent>
              </AccordionItem>
            ))}
        </Accordion>
      </section>
    </section>
  );
};

export default MotorVehicleDrivingRegulation2017;
