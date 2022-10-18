import { useState, useEffect } from "react";

export const useWindowResize = () => {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    });
    return () => {
      window.removeEventListener("resize", () => {
        setDimension({ width: window.innerWidth, height: window.innerHeight });
      });
    };
  }, []);

  return dimension;
};
