"use client";

import AboutMe from "@/components/aboutMe/AboutMe";
import Hero from "@/components/hero/Hero";
import Laptop from "@/components/laptop/Laptop";
import ArrowDownIcon from "@/components/ui/icons/ArrowDownIcon";
import ArrowUpIcon from "@/components/ui/icons/ArrowUpIcon";
import useDeviceStore from "@/store/deviceStore";
import { useScrollStore } from "@/store/scrollStore";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const { isMobile, isTablet } = useDeviceStore();
  const { isScrolled } = useScrollStore();

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main>
      <AnimatePresence>
        <motion.button
          className={`${isMobile && !isTablet && "bottom-[4.4rem] right-[0.95rem] h-[2.75rem] min-h-0 w-[2.75rem] rounded-[1.1rem] p-0"} btn fixed bottom-24 right-6 z-20 flex h-14 w-14 items-center justify-center rounded-3xl border-2 bg-base-100 shadow-xl`}
          onClick={() => (isScrolled ? scrollToTop() : scrollToBottom())}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {isScrolled ? (
            <ArrowUpIcon
              className={`${isMobile && !isTablet && "h-[1.2rem] w-[1.2rem]"} h-6 w-6`}
            />
          ) : (
            <ArrowDownIcon
              className={`${isMobile && !isTablet && "h-[1.2rem] w-[1.2rem]"} h-6 w-6`}
            />
          )}
        </motion.button>
      </AnimatePresence>

      <Hero />

      <div className="mx-auto max-w-screen-xl px-4">
        <Laptop />
      </div>

      <div className="mx-auto max-w-screen-xl px-4">
        <AboutMe />
      </div>

      <div className="h-[2000px]"></div>
    </main>
  );
}
