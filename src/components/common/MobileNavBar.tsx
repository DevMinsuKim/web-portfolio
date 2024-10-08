"use client";

import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import { gsap } from "gsap";
import MenuIcon from "../ui/icons/MenuIcon";
import LanguageSwitcher from "./LanguageSwitcher";
import { ThemeSwitcher } from "./ThemeSwitcher";
import CloseIcon from "../ui/icons/CloseIcon";
import useCursorStore from "@/store/cursorStore";
import { useScopedI18n } from "@/locales/client";
import useDeviceStore from "@/store/deviceStore";
import LogoIcon from "../ui/icons/LogoIcon";

export default function MobileNavBar() {
  const { isMobile } = useDeviceStore();
  const { isCustomCursor, toggleCustomCursor } = useCursorStore();

  const t = useScopedI18n("customCursorToogle");

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prevState) => !prevState);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        toggleMenu();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMenuOpen) {
        toggleMenu();
      }
    };

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      gsap.to(".mobile-menu", {
        clipPath: "inset(0% 0% 0% 0%)",
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      document.body.style.overflow = "";
      gsap.to(".mobile-menu", {
        clipPath: "inset(0% 0% 0% 100%)",
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen, toggleMenu]);

  return (
    <>
      <div className="navbar flex p-0 md:hidden">
        <div className="flex-1">
          <Link
            className="btn btn-ghost w-40 px-1"
            href={"/"}
            aria-label="Logo"
          >
            <LogoIcon />
          </Link>
        </div>
        <div className="flex-none">
          <button
            aria-label="toggleMenu"
            className="btn btn-ghost px-1"
            onClick={() => {
              toggleMenu();
            }}
          >
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <button
          aria-label="toggleMenu"
          className="fixed inset-0 bg-black/5 dark:bg-black/50"
          onClick={() => {
            toggleMenu();
          }}
        />
      )}

      <div
        className="mobile-menu fixed right-0 top-0 h-screen max-w-[20rem] rounded-l-3xl bg-base-100 px-4 shadow-xl dark:bg-base-200 md:hidden"
        style={{
          clipPath: "inset(0% 0% 0% 100%)",
          opacity: 0,
        }}
      >
        <div className="mt-2 flex justify-end">
          <button
            aria-label="toggleMenu"
            className="btn btn-ghost px-1"
            onClick={() => {
              toggleMenu();
            }}
          >
            <CloseIcon className="h-6 w-6" />
          </button>
        </div>

        <div className="mt-4 rounded-xl bg-base-200/50 p-2 dark:bg-black/40">
          <LanguageSwitcher />
        </div>
        <div className="mt-6 rounded-xl bg-base-200/50 p-2 dark:bg-black/40">
          <ThemeSwitcher />
        </div>
        {!isMobile && (
          <div className="mt-6 rounded-xl bg-base-200/50 p-2 dark:bg-black/40">
            <div className="flex flex-col gap-y-2 p-2">
              {isCustomCursor ? t("off") : t("on")}
              <input
                type="checkbox"
                className="toggle toggle-primary"
                checked={!isCustomCursor}
                onChange={() => toggleCustomCursor()}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
