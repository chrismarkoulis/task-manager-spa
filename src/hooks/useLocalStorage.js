import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
  const storedValue = localStorage.getItem(key);
  let parsedValue;

  try {
    parsedValue = storedValue ? JSON.parse(storedValue) : initialValue;
  } catch (error) {
    parsedValue = initialValue;
  }

  const [value, setValue] = useState(parsedValue);

  const setStoredValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setStoredValue];
};
