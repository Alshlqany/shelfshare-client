import { useRef } from "react";
import StyledNavLink from "./StyledNavLink";

const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative hover:text-red-500 z-10 block cursor-pointer text-white text-xs uppercase md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};
export default Tab;
