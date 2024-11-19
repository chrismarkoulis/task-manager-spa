import { useState } from 'react';
import axios from 'axios';

export const useFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (url, params = {}, cancelToken = null) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(url, { params, cancelToken });
      setData(response.data);
    } catch (err) {
      if (axios.isCancel(err)) {
        console.log('Request canceled:', err.message);
      } else {
        setError(`Error: ${err.message}`);
      }
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchData };
};
