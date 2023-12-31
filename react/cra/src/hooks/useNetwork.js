import { useCallback, useEffect, useState } from "react";

const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);

  const handleChange = useCallback(() => {
    onChange();
    setStatus(navigator.onLine);
  }, [onChange]);

  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, [handleChange]);

  return status;
};

export default useNetwork;
