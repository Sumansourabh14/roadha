import { HeadingProps } from "@/types";

const H1 = ({ title }: HeadingProps) => {
  return (
    <h1 className="scroll-m-20 text-center text-4xl md:text-6xl font-extrabold tracking-tight text-balance">
      {title}
    </h1>
  );
};

export default H1;
