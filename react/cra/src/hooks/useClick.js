import { useEffect, useRef } from "react";

const useClick = (onClick) => {
  // if (typeof onClick !== "function") return;

  const element = useRef();

  useEffect(() => {
    const elem = element.current;
    if (elem) {
      elem.addEventListener("click", onClick);
    }
    return () => {
      elem.removeEventListener("click", onClick);
    };
  }, [onClick]);

  return element;
};

export default useClick;
