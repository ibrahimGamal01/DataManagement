// FadeScaleTransition.jsx
import { useState, useEffect } from "react";

const FadeScaleTransition = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const top = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const bottom = top + windowHeight;

      const element = document.getElementById("fade-scale-transition-element");
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top + top;
      const elementBottom = elementTop + rect.height;

      if (elementTop < bottom && elementBottom > top) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const classes = `transition-opacity transition-transform duration-1000 ${
    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
  }`;

  return (
    <div id="fade-scale-transition-element" className={classes}>
      {children}
    </div>
  );
};

export default FadeScaleTransition;
