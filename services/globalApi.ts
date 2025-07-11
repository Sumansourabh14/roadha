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

const BACKEND_API = process.env.NEXT_PUBLIC_BACKEND_URL_ENDPOINT;

export const uploadVideo = async ({
  videoUrl,
  thumbnail,
  title,
  description,
  duration,
  views,
  isPublic,
}: VideoProps) => {
  const res = await axios.post(`${BACKEND_API}/api/v1/upload/video`, {
    videoUrl,
    thumbnail,
    title,
    description,
    duration,
    views,
    isPublic,
  });

  return res;
};

export const getVideos = async () => {
  const res = await axios.get(`${BACKEND_API}/api/v1/videos`);
  return res;
};

export const getVideo = async (id: string) => {
  const res = await axios.get(`${BACKEND_API}/api/v1/videos/${id}`);
  return res;
};
