import { useEffect, useRef } from "react";

const useScrollYListener = () => {
  console.log("heilo");
  const color = useRef("transparent");
  const handleScroll = () => {
    if (window.scrollY > 50) {
      color.current = "white";
    } else {
      color.current = "transparent";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return color;
};

export default useScrollYListener;
