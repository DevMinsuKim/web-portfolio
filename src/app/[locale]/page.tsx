"use client";

import AboutMe from "@/components/aboutMe/AboutMe";
import Activity from "@/components/activity/Activity";
import Contact from "@/components/contact/Contact";
import Hero from "@/components/hero/Hero";
import Laptop from "@/components/laptop/Laptop";
import Project from "@/components/project/Project";
import Skill from "@/components/skill/Skill";
import ArrowDownIcon from "@/components/ui/icons/ArrowDownIcon";
import ArrowUpIcon from "@/components/ui/icons/ArrowUpIcon";
import WorkExperience from "@/components/workExperience/WorkExperience";
import useDeviceStore from "@/store/deviceStore";
import { useScrollStore } from "@/store/scrollStore";
import { useEffect, useState } from "react";

export default function Home() {
  const { isMobile, isTablet } = useDeviceStore();
  const { isScrolled } = useScrollStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main>
      {!isLoading && (
        <button
          className={`${isMobile && !isTablet && "bottom-[4.4rem] right-[0.95rem] h-[2.75rem] min-h-0 w-[2.75rem] rounded-[1.1rem] p-0"} btn fixed bottom-24 right-6 z-20 flex h-14 w-14 items-center justify-center rounded-3xl border-2 bg-base-100 shadow-xl`}
          onClick={() => (isScrolled ? scrollToTop() : scrollToBottom())}
          aria-label="Scroll Up Down Button"
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
        </button>
      )}

      <Hero />

      <Laptop />

      <div className="mx-auto max-w-screen-xl px-4">
        <AboutMe />
      </div>

      <div className="mx-auto max-w-screen-xl px-4">
        <WorkExperience />
      </div>

      <div className="mx-auto max-w-screen-xl px-4">
        <Project />
      </div>

      <div className="mx-auto max-w-screen-xl px-4">
        <Skill />
      </div>

      <div className="mx-auto max-w-screen-xl px-4">
        <Activity />
      </div>

      <Contact />
    </main>
  );
}
