import { useState, useEffect, useMemo } from "react";
import { useFetch } from "./useFetch";

const BASE_URL = "https://jsonplaceholder.typicode.com/todos";

export const useSuggestions = () => {
  const [query, setQuery] = useState("");
  const { data: suggestions, loading, error, fetchData } = useFetch();

  const getSuggestions = (input) => {
    setQuery(input); 
  };

  useEffect(() => {
    if (query) {

      fetchData(BASE_URL, { q: query });
      setQuery(query);
    }
  }, [query, fetchData]);

  const getRandomTasks = useMemo(() => {
    if (!suggestions) return [];
    const shuffled = [...suggestions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 5);
  },[suggestions]);

  return {
    suggestions: getRandomTasks,
    loading,
    error,
    getSuggestions,
  };
};
