export type VideoProps = {
  _id: string;
  videoUrl: string;
  thumbnail?: string;
  title: string;
  description?: string;
  duration: number;
  views: number;
  isPublic: boolean;
};
