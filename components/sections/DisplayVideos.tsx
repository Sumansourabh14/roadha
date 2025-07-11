import { VideoProps } from "@/lib/types";
import { getVideos } from "@/services/globalApi";
import Link from "next/link";

const fetchVideos = async () => {
  try {
    const res = await getVideos();
    return res;
  } catch (error) {
    console.error(error);
  }
};

const DisplayVideos = async () => {
  const data = await fetchVideos();

  if (!data) {
    return <p className="text-red-500 text-center">Failed to load videos.</p>;
  }

  const videos = data.data.data;

  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {videos.map((item: VideoProps) => (
          <Link href={`/video/${item._id}`} key={item._id}>
            <div key={item._id}>
              <h3>{item.title}</h3>
              {item.description && <p>{item.description}</p>}
              <div className="max-w-[500px]">
                <video src={`${item.videoUrl}?tr=w-500`} />
              </div>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
};

export default DisplayVideos;
