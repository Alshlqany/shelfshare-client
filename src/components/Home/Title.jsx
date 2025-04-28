import React from "react";

const Title = ({ title }) => {
  const [w1, w2] = title.split(" ");

  return (
    <div className="text-4xl font-light mb-10  border-b-1 w-fit pb-5 ">
      <span className="text-primary font-bold">{w1}</span> {w2}
    </div>
  );
};

export default Title;
