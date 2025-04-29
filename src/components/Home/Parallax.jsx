import React, { useEffect, useRef } from "react";
import Column from "./Column";
import { useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import useDimension from "../../hooks/useDimension";

const images = [
  "book_1.png",
  "book_2.png",
  "book_3.png",
  "book_4.png",
  "book_5.png",
  "book_6.png",
  "book_7.png",
  "book_8.png",
  "book_9.png",
  "book_10.png",
  "book_11.png",
  "book_12.png",
  "book_13.png",
  "book_14.png",
  "book_15.png",
  "book_16.png",
];
const Parallax = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const { height } = useDimension();
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="bg-primary">
      <div
        ref={container}
        className=" h-[175vh] flex gap-[2vw] justify-center box-border mt-20 overflow-hidden"
      >
        <Column images={[images[0], images[1], images[2], images[3]]} y={y} />
        <Column images={[images[4], images[5], images[6], images[7]]} y={y2} />
        <Column
          images={[images[8], images[9], images[10], images[11]]}
          y={y3}
        />
        <Column
          images={[images[12], images[13], images[14], images[15]]}
          y={y4}
        />
      </div>
    </div>
  );
};

export default Parallax;
