import { useEffect, useState } from "react";

export const useColorScheme = () => {
  const [colorScheme, setColorScheme] = useState(
    window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark"
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");
    const changeHandler = () =>
      setColorScheme(mediaQuery.matches ? "light" : "dark");

    mediaQuery.addEventListener("change", changeHandler);

    return () => {
      mediaQuery.removeEventListener("change", changeHandler);
    };
  }, []);

  return colorScheme;
};
