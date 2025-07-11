"use client";

import DisplayVideo from "@/components/sections/DisplayVideo";
import LoadingSection from "@/components/sections/LoadingSection";
import { VideoProps } from "@/lib/types";
import { getVideo } from "@/services/globalApi";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Video = () => {
  const [data, setData] = useState<VideoProps | null>(null);
  const pathname = usePathname();
  const id = pathname.slice(7);

  useEffect(() => {
    let mounted = true;

    const fetchVideo = async () => {
      const res = await getVideo(id);
      console.log({ res });

      if (mounted) {
        setData(res.data.data);
      }
    };

    fetchVideo();

    return () => {
      mounted = false;
    };
  }, [id]);

  if (!data) return <LoadingSection text="Fetching video details..." />;

  return (
    <section className="max-w-[1390px] mx-auto px-8 min-h-[70vh]">
      <section className="pt-32 mb-16">
        <DisplayVideo
          _id={data._id}
          title={data.title}
          description={data.description}
          videoUrl={data.videoUrl}
          isPublic={data.isPublic}
          duration={data.duration}
          views={data.views}
        />
      </section>
    </section>
  );
};

export default Video;
