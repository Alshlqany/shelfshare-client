import { useEffect, useState } from "react";

const useDimension = () => {
  const [dimention, setDimension] = useState({ width: 0, height: 0 });
  const updateDemension = () => {
    const { innerWidth, innerHeight } = window;
    setDimension({ width: innerWidth, height: innerHeight });
  };
  useEffect(() => {
    updateDemension();
    window.addEventListener("resize", updateDemension);
    return () => window.removeEventListener("resize", updateDemension);
  }, []);
  return dimention;
};
export default useDimension;
