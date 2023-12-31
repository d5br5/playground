import { useEffect } from "react";

const useBeforeLeave = (onBefore) => {
  const handle = () => {
    console.log("leave");
    onBefore();
  };

  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

export default useBeforeLeave;
