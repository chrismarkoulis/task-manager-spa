import { useState, useCallback } from "react";
import axios from "axios";

export const useFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async (url, params = {}) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(url, { params });
      setData(response.data);
    } catch (err) {
      setError(`Error: ${err.message}`);
      setData(null);
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error, fetchData };
};
