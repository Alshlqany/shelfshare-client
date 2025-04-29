import React, { useRef } from "react";
import Title from "./Title";
import BooksRow from "./BooksRow";
import { useScroll, useTransform } from "framer-motion";

const TopBooks = ({ filterId = "new", title = "Best selling" }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["45%", "-45%"]);

  return (
    <section ref={targetRef} className="relative h-[500vh]">
      <div className="flex justify-center"></div>
      <div className="sticky top-2/12 flex flex-col h-fit justify-center items-center overflow-hidden">
        <Title title={title} />
        <BooksRow filterId={filterId} x={x} />
      </div>
    </section>
  );
};

export default TopBooks;
