"use client";

import React, { useEffect, useState } from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import LanguageSwitcher from "./LanguageSwitcher";
import Link from "next/link";
import MobileNavBar from "./MobileNavBar";
import { animated, useSpring } from "@react-spring/web";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerSpring = useSpring({
    top: isScrolled ? "12px" : "0px",
    config: { tension: 220, friction: 20 },
  });

  return (
    <animated.header
      style={headerSpring}
      className={`${isScrolled && "top-3"} sticky top-0 z-20 w-full px-4`}
    >
      <div
        className={`mx-auto max-w-screen-xl ${isScrolled && "rounded-xl border bg-base-100/95 px-3 shadow-md dark:border-none dark:bg-black/90"}`}
      >
        <div className="navbar hidden p-0 md:flex">
          <div className="navbar-start">
            <LanguageSwitcher />
          </div>
          <div className="navbar-center">
            <Link className="btn btn-ghost text-xl" href={"/"}>
              Dev Minsu
            </Link>
          </div>
          <div className="navbar-end">
            <ThemeSwitcher />
          </div>
        </div>

        <MobileNavBar />
      </div>
    </animated.header>
  );
}
