import { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/todos";

export const useSuggestions = () => {
  const [query, setQuery] = useState("");
  const [previousQuery, setPreviousQuery] = useState("");
  const { data: suggestions, loading, error, fetchData } = useFetch();
  const [cancelTokenSource, setCancelTokenSource] = useState(null);

  const getSuggestions = (input) => {
    setQuery(input);
  };

  useEffect(() => {
    if (query !== previousQuery) {
      if (cancelTokenSource) {
        cancelTokenSource.cancel("Operation canceled due to new request.");
      }

      const source = axios.CancelToken.source();
      setCancelTokenSource(source);

      fetchData(BASE_URL, { q: query }, source.token);
      setPreviousQuery(query);
    }
  }, [query, cancelTokenSource, fetchData, previousQuery]);

  const getRandomTasks = () => {
    if (!suggestions) return [];
    const shuffled = suggestions.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 5);
  };

  return {
    suggestions: getRandomTasks(),
    loading,
    error,
    getSuggestions,
  };
};
