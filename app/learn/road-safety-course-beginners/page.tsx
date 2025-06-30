import ItemTable from "@/components/tables/ItemTable";
import H1 from "@/components/text/H1";
import roadSafetyCourseBegineerData from "@/data/road_safety_rules_with_tags.json";

const RoadSafety = () => {
  return (
    <section className="px-8">
      <section className="pt-24 pb-8">
        <H1 title="Ultimate Road Safety Course 2025" />
      </section>
      <ItemTable data={roadSafetyCourseBegineerData} />
    </section>
  );
};

export default RoadSafety;
