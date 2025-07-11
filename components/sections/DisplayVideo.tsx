import React from "react";
import H1 from "../text/H1";
import { VideoProps } from "@/lib/types";

const DisplayVideo = ({
  _id,
  title,
  description,
  videoUrl,
  isPublic,
  duration,
  views,
}: VideoProps) => {
  return (
    <div className="flex flex-col gap-8" key={_id}>
      <H1 title={title} />
      <div className="flex gap-8 items-center">
        {isPublic ? <p>Public</p> : <p>Private</p>}
        {duration && <p>{duration} seconds</p>}
        <p>{views} views</p>
      </div>
      {description && <p>{description}</p>}
      <div className="max-w-[800px] mx-auto">
        <video src={`${videoUrl}?tr=w-800`} controls />
      </div>
    </div>
  );
};

export default DisplayVideo;
