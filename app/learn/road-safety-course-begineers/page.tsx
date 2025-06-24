import ItemTable from "@/components/tables/ItemTable";
import roadSafetyCourseBegineerData from "@/data/road_safety_rules_with_tags.json";

const RoadSafety = () => {
  return (
    <div>
      <ItemTable data={roadSafetyCourseBegineerData} />
    </div>
  );
};

export default RoadSafety;
