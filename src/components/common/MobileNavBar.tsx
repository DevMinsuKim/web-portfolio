"use client";

import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MenuIcon from "../ui/icons/MenuIcon";
import LanguageSwitcher from "./LanguageSwitcher";
import { ThemeSwitcher } from "./ThemeSwitcher";
import CloseIcon from "../ui/icons/CloseIcon";
import useCursorStore from "@/store/cursorStore";
import { useScopedI18n } from "@/locales/client";
import useDeviceStore from "@/store/deviceStore";
import LogoIcon from "../ui/icons/LogoIcon";

export default function MobileNavBar() {
  const isMobile = useDeviceStore((state) => state.isMobile);
  const isCustomCursor = useCursorStore((state) => state.isCustomCursor);
  const toggleCustomCursor = useCursorStore(
    (state) => state.toggleCustomCursor,
  );

  const scopedT = useScopedI18n("customCursorToogle");

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
    } else {
      document.body.style.overflow = "";
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
    <div>
      <div className="navbar flex p-0 md:hidden">
        <div className="flex-1">
          <Link className="btn btn-ghost w-40 px-1" href={"/"}>
            <LogoIcon />
          </Link>
        </div>
        <div className="flex-none">
          <button
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
        <div
          className="fixed inset-0 bg-black/5 dark:bg-black/50"
          onClick={() => {
            toggleMenu();
          }}
        />
      )}

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ clipPath: "inset(0% 0% 0% 100%)", opacity: 0 }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
            exit={{ clipPath: "inset(0% 0% 0% 100%)", opacity: 0 }}
            transition={{ tension: 220, friction: 30 }}
            className="fixed right-0 top-0 h-screen max-w-[320px] rounded-l-3xl bg-base-100 px-4 shadow-xl dark:bg-base-200 md:hidden"
          >
            <div className="mt-2 flex justify-end">
              <button
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
                  {isCustomCursor ? scopedT("off") : scopedT("on")}
                  <input
                    type="checkbox"
                    className="toggle toggle-primary"
                    checked={!isCustomCursor}
                    onChange={() => toggleCustomCursor()}
                  />
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
