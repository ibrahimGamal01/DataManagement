import { useState, useEffect, useRef } from "react";

const MovementTransition = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const { top, bottom } = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        if ((top > 0 && top < windowHeight) || (bottom > 0 && bottom < windowHeight)) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const classes = `transition-transform duration-1000 ${
    isVisible ? "translate-x-0" : "-translate-x-full"
  }`;

  return (
    <div
      ref={ref}
      className={`flex ${classes}`}
      style={{ transitionTimingFunction: "ease-in-out" }}
    >
      {children}
    </div>
  );
};

export default MovementTransition;
