import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const res = await fetch(url);
        if (!res.ok) {
          switch (res.status) {
            case 400:
              return;
            case 404:
              return;
            case 401:
              return;
            case 504:
              return;
          }
        }
        const data = await res.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { data, loading, error };
};
export default useFetch;
