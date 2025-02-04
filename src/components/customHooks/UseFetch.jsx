import { useEffect, useState } from "react";

const UseFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed API fetch");
        }
        const fetchedData = await response.json();
        setData(fetchedData);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchAPI();
  }, [url]);

  return { data, error, loading };
};

export default UseFetch;
