import React from "react";

type HeadingH1 = {
  title: string;
};

const H1 = ({ title }: HeadingH1) => {
  return (
    <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
      {title}
    </h1>
  );
};

export default H1;
