import { useEffect, useState } from "react";

export function useAuthenticatedFetch(url, options = {}, token) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(url, {
          ...options,
          headers: {
            ...options.headers,
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }

        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error.message);
      }

      setIsLoading(false);
    };

    if (token) {
      fetchData();
    } else {
      setError("No token found");
    }
  }, [url, options, token]);

  return { data, error, isLoading };
}
