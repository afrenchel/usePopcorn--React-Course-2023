import { useState, useEffect } from "react";

export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem("key");
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  //Using local storage
  useEffect(() => {
    localStorage.setItem("key", JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}
