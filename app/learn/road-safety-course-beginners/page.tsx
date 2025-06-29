import ItemTable from "@/components/tables/ItemTable";
import H1 from "@/components/text/H1";
import { API_URL } from "@/utils/API";

const getLessons = async () => {
  try {
    const res = await fetch(`${API_URL}/api/v1/courses/lessons`);

    if (!res.ok) {
      console.error("Failed to fetch lessons");
      return null;
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const RoadSafety = async () => {
  const data = await getLessons();

  return (
    <section className="px-8">
      <section className="pt-24 pb-8">
        <H1 title="Ultimate Road Safety Course" />
      </section>

      <section className="min-h-[60vh]">
        {!data ? (
          <p className="text-red-600 font-medium text-center">
            Something went wrong. Please try again later.
          </p>
        ) : data.data?.length > 0 ? (
          <ItemTable data={data.data} />
        ) : (
          <p className="text-gray-600 text-center">No lessons found.</p>
        )}
      </section>
    </section>
  );
};

export default RoadSafety;
