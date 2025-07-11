import axios from "axios";

type VideoProps = {
  videoUrl: string;
  thumbnail?: string;
  title: string;
  description?: string;
  duration: number;
  views: number;
  isPublic: boolean;
};

export const uploadVideo = async ({
  videoUrl,
  thumbnail,
  title,
  description,
  duration,
  views,
  isPublic,
}: VideoProps) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_URL_ENDPOINT}/api/v1/upload/video`,
    { videoUrl, thumbnail, title, description, duration, views, isPublic }
  );

  return res;
};
