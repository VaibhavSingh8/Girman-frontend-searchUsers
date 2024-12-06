import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) throw new Error("Network response was not ok");

        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
