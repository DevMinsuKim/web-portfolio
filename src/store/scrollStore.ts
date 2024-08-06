import { useEffect } from "react";
import { create } from "zustand";

interface scrollState {
  isScrolled: boolean;
  setIsScrolled: (isScrolled: boolean) => void;
}

export const useScrollStore = create<scrollState>((set) => ({
  isScrolled: false,
  setIsScrolled: (isScrolled) => set({ isScrolled }),
}));

export const useScrollListener = () => {
  const { setIsScrolled } = useScrollStore();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setIsScrolled]);
};
