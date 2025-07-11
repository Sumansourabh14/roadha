import DisplayVideos from "@/components/sections/DisplayVideos";
import H1 from "@/components/text/H1";

const AllVideos = () => {
  return (
    <section className="max-w-[1390px] mx-auto px-8 min-h-[70vh]">
      <section className="pt-32 pb-8">
        <H1 title="Road Safety Videos" />
      </section>
      <section className="mb-16">
        <DisplayVideos />
      </section>
    </section>
  );
};

export default AllVideos;
