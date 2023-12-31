import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [payload, setPayload] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const callUrl = async () => {
    try {
      const data = await fetch(url);
      const json = await data.json();
      setPayload(json);
    } catch {
      setError("error!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    callUrl();
  }, []);
};
