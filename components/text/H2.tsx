import { HeadingProps } from "@/types";

const H2 = ({ title }: HeadingProps) => {
  return (
    <h2 className="scroll-m-20 text-center text-3xl md:text-5xl font-bold mb-12 tracking-tight text-balance">
      {title}
    </h2>
  );
};

export default H2;
