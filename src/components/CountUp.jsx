import { useState, useEffect, useRef } from "react";

const useInView = (options) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, options]);

  return [ref, isVisible];
};

// Countup function
const CountUp = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [ref, isVisible] = useInView({ threshold: 0.5 });

  useEffect(() => {
    let animationFrame;
    if (isVisible) {
      let start = 0;
      const increment = end / (duration / 16);

      const animate = () => {
        start += increment;
        if (start < end) {
          setCount(Math.ceil(start));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
      animate();
    } else {
      setCount(0);
    }

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return <span ref={ref}>{count}+</span>;
};

export default CountUp;
