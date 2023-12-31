import { useEffect, useRef } from "react";

const useFadeIn = (duration = 1) => {
  const elem = useRef();

  useEffect(() => {
    const { current } = elem;
    if (current) {
      current.style.transition = `opacity ${duration}s`;
      current.style.opacity = 1;
    }
  }, [duration]);

  return { ref: elem, style: { opacity: 0 } };
};

export default useFadeIn;
