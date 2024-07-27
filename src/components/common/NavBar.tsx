"use client";

import React, { useEffect } from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import LanguageSwitcher from "./LanguageSwitcher";
import Link from "next/link";
import MobileNavBar from "./MobileNavBar";
import { motion, useAnimation, useScroll, useSpring } from "framer-motion";
import useCursorStore from "@/store/cursorStore";
import CursorArrowIcon from "../ui/icons/CursorArrowIcon";
import { Tooltip } from "react-tooltip";
import { useScopedI18n } from "@/locales/client";
import useDeviceStore from "@/store/deviceStore";
import LogoIcon from "../ui/icons/LogoIcon";
import { useScrollStore } from "@/store/scrollStore";

export default function NavBar() {
  const { isScrolled } = useScrollStore();
  const { isMobile } = useDeviceStore();
  const { isCustomCursor, toggleCustomCursor } = useCursorStore();

  const scopedT = useScopedI18n("customCursorButton");

  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      top: isScrolled ? "0.75rem" : "0rem",
      transition: { tension: 220, friction: 20 },
    });
  }, [isScrolled, controls]);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        className="fixed left-0 right-0 top-0 z-40 h-1 origin-left bg-primary"
        style={{ scaleX }}
      />
      <motion.header
        animate={controls}
        className={`${isScrolled && "top-3"} fixed z-40 w-full px-4`}
      >
        <div
          className={`mx-auto max-w-screen-xl ${isScrolled && "border-base-border shadow-base-shadow rounded-xl border bg-base-100/95 px-3 shadow-md dark:bg-base-300/95"}`}
        >
          <div className="navbar hidden p-0 md:flex">
            <div className="navbar-start">
              <LanguageSwitcher />
            </div>

            <div className="navbar-center">
              <Link className="btn btn-ghost w-60" href={"/"}>
                <LogoIcon />
              </Link>
            </div>

            <div className="navbar-end">
              {!isMobile && (
                <>
                  <button
                    onClick={() => toggleCustomCursor()}
                    className="btn btn-ghost px-2"
                    data-tooltip-id="tooltip"
                    data-tooltip-content={
                      isCustomCursor ? scopedT("on") : scopedT("off")
                    }
                  >
                    <CursorArrowIcon className="h-6 w-6" />
                  </button>
                  <Tooltip id="tooltip" className="custom-tooltip" />
                  <p className="mx-1">|</p>
                </>
              )}

              <ThemeSwitcher />
            </div>
          </div>

          <MobileNavBar />
        </div>
      </motion.header>
    </>
  );
}
