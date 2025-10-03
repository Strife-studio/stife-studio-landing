import { useState, useEffect } from "react";

export const useScrollVisibility = (threshold: number = 0.5) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * threshold;
      setIsVisible(window.scrollY <= scrollThreshold);
    };

    let timeout: NodeJS.Timeout;
    const debouncedHandleScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(handleScroll, 100);
    };

    window.addEventListener("scroll", debouncedHandleScroll);
    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
      clearTimeout(timeout);
    };
  }, [threshold]);

  return isVisible;
};
