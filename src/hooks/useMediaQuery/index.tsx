import { useEffect, useState } from "react";

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const mediaQueryChangeHandler = () => setMatches(mediaQueryList.matches);

    mediaQueryList.addEventListener('change', mediaQueryChangeHandler);
    setMatches(mediaQueryList.matches);

    return () => {
      mediaQueryList.removeEventListener('change', mediaQueryChangeHandler);
    };
  }, [query]);

  return matches;
}