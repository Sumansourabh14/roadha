import ItemTable from "@/components/tables/ItemTable";
import H1 from "@/components/text/H1";
import { SITE_METADATA } from "@/data/constants";
import roadSafetyCourseBeginnerData from "@/data/road_safety_rules_with_tags.json";

export const metadata = {
  title: `Road Safety Course - Beginner | ${SITE_METADATA.title}`,
  description:
    "FREE Step-by-step course covering road safety rules, tips & scenarios in India.",
};

const RoadSafety = () => {
  return (
    <section className="px-8">
      <section className="pt-24 pb-8 text-center space-y-8">
        <H1 title="Road Safety Course - Beginner" />
        <p className="text-lg">
          FREE Step-by-step course covering road safety rules, tips & scenarios
          in India.
        </p>
      </section>
      <hr />
      <section className="pt-12 pb-32">
        <ItemTable data={roadSafetyCourseBeginnerData} />
      </section>
    </section>
  );
};

export default RoadSafety;
