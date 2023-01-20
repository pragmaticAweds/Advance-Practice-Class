import { useEffect, useState } from "react";

const useScrollYListener = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const contentWrapper = document.getElementById("content");

    const handleScroll = () => {
      setScroll(contentWrapper.scrollTop);
    };

    contentWrapper.addEventListener("scroll", handleScroll);

    return () => {
      contentWrapper.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scroll;
};

export default useScrollYListener;
