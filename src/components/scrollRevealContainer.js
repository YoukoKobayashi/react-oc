import { FC, useRef, useEffect } from 'react';
import scrollreveal from "scrollreveal";

const ScrollRevealContainer = ({
  children,
  move
}) => {
  const sectionRef = useRef < HTMLElement > (null);

  useEffect(() => {
    if (sectionRef.current)
      scrollreveal().reveal(sectionRef.current, {
        reset: true,
        delay: 400,
        opacity: 0,
        origin:
          move === "left"
            ? "left"
            : move === "right"
              ? "right"
              : move === "top"
                ? "top"
                : "bottom",
        distance: "40px"
      })
  }, [sectionRef]);

  return <section ref={sectionRef}>{children}</section>;
};

export default ScrollRevealContainer;