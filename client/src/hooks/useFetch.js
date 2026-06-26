import { useEffect, useState } from "react";
import API from "../api.js";

function useFetch(endpoint, fallback = []) {
  const [data, setData] = useState(fallback);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    API.get(endpoint)
      .then((res) => {
        if (active) {
          setData(Array.isArray(res.data) && res.data.length > 0 ? res.data : fallback);
        }
      })
      .catch(() => {
        if (active) {
          setData(fallback);
          setError("Backend unavailable. Showing fallback data.");
        }
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [endpoint]);

  return { data, loading, error };
}

export default useFetch;
