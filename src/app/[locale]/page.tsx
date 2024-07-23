"use client";

import Hero from "@/components/hero/Hero";
import Mac from "@/components/mac/Mac";
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
    <main className="mx-auto max-w-screen-xl px-4">
      <div className="absolute inset-0 z-0 min-w-[320px] bg-gradient-to-t from-primary/20 to-base-200 dark:from-indigo-950 dark:to-base-100"></div>

      <div
        style={{
          position: "absolute",
          minWidth: "320px",
          bottom: 0,
          left: 0,
          width: "100%",
          overflow: "hidden",
          lineHeight: 0,
          transform: "rotate(180deg)",
        }}
      >
        <svg
          className="h-[40px] sm:h-[250px]"
          style={{
            position: "relative",
            display: "block",
            width: "calc(170% + 1.3px)",
          }}
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-base-100"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="fill-base-100"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-base-100"
          ></path>
        </svg>
      </div>

      <AnimatePresence>
        <motion.button
          className={`${isMobile && !isTablet && "bottom-[4.4rem] right-[0.8rem] h-12 w-12 rounded-[1.2rem] p-0"} btn fixed bottom-24 right-6 z-20 flex h-14 w-14 items-center justify-center rounded-3xl border-2 bg-base-100 shadow-xl`}
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
      <Mac />

      <div className="h-[1000px]"></div>
    </main>
  );
}
