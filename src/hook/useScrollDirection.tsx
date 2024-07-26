import { useRef, useEffect } from "react";

export default function useScrollDirection() {
  const scrollDirection = useRef("down");
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop.current) {
        scrollDirection.current = "down";
      } else {
        scrollDirection.current = "up";
      }
      lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollDirection.current;
}
