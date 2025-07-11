import H1 from "@/components/text/H1";
import UploadFile from "@/components/utils/UploadFile";

const UploadVideo = () => {
  return (
    <section className="max-w-[1390px] mx-auto px-8 min-h-[70vh]">
      <section className="pt-32 pb-8">
        <H1 title="Upload Video" />
      </section>
      <section>
        <UploadFile />
      </section>
    </section>
  );
};

export default UploadVideo;
