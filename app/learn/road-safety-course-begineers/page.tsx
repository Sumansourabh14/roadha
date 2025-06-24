import ItemTable from "@/components/tables/ItemTable";
import H1 from "@/components/text/H1";
import roadSafetyCourseBegineerData from "@/data/road_safety_rules_with_tags.json";

const RoadSafety = () => {
  return (
    <div>
      <section className="py-8">
        <H1 title="Ultimate Road Safety Course" />
      </section>
      <ItemTable data={roadSafetyCourseBegineerData} />
    </div>
  );
};

export default RoadSafety;
