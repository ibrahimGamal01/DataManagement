import  { useEffect, useRef, useState } from "react";

const FadeInTransition = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const fadeInObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        fadeInObserver.unobserve(entry.target);
      }
    });

    fadeInObserver.observe(ref.current);

    return () => {
      if (ref.current) {
        fadeInObserver.unobserve(ref.current);
      }
    };
  }, []);

  const classes = `transition-opacity duration-1000 
      ${isVisible ? "opacity-100" : "opacity-0"
    }`;

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
};

export default FadeInTransition;
