"use client";

import React, { useEffect } from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import LanguageSwitcher from "./LanguageSwitcher";
import Link from "next/link";
import MobileNavBar from "./MobileNavBar";
import { gsap } from "gsap";
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

  const t = useScopedI18n("customCursorButton");

  useEffect(() => {
    gsap.to(".navbar", {
      top: isScrolled ? "0.75rem" : "0rem",
      duration: 0.5,
      ease: "power2.out",
    });
  }, [isScrolled]);

  useEffect(() => {
    gsap.set(".scroll-progress", { scaleX: 0, opacity: 1 });

    const handleScroll = () => {
      const scrollProgress =
        window.scrollY / (document.body.scrollHeight - window.innerHeight);
      gsap.to(".scroll-progress", {
        scaleX: scrollProgress,
        ease: "power2.out",
        duration: 0.1,
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="scroll-progress fixed left-0 right-0 top-0 z-40 h-1 origin-left bg-primary opacity-0" />
      <header
        className={`navbar fixed z-40 w-full px-4 ${isScrolled && "top-3"}`}
      >
        <div
          className={`mx-auto w-full max-w-screen-xl ${isScrolled && "rounded-xl border border-base-border bg-base-100/95 px-3 shadow-md shadow-base-shadow dark:bg-base-300/95"}`}
        >
          <nav className="navbar hidden p-0 md:flex">
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
                    data-tooltip-content={isCustomCursor ? t("on") : t("off")}
                  >
                    <CursorArrowIcon className="h-6 w-6" />
                  </button>
                  <Tooltip id="tooltip" className="custom-tooltip" />
                  <p className="mx-1">|</p>
                </>
              )}

              <ThemeSwitcher />
            </div>
          </nav>

          <MobileNavBar />
        </div>
      </header>
    </>
  );
}
