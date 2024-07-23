"use client";

import React, { useEffect, useRef, useState } from "react";

import ArrowDownIcon from "../ui/icons/ArrowDownIcon";
import { motion } from "framer-motion";
import { useCurrentLocale, useScopedI18n } from "@/locales/client";
import TypingAnimation, { TypingAnimationRef } from "../common/TypingAnimation";

import ReplayIcon from "../ui/icons/ReplayIcon";
import EmailIcon from "../ui/icons/EmailIcon";
import GithubIcon from "../ui/icons/GithubIcon";
import LinkdeinIcon from "../ui/icons/LinkdeinIcon";
import YouTubeIcon from "../ui/icons/YouTubeIcon";
import InfoIcon from "../ui/icons/InfoIcon";

export default function Hero() {
  const locale = useCurrentLocale();
  const scopedT = useScopedI18n("Hero");

  const [isPageLoaded, setIsPageLoaded] = useState(false);

  const typingAnimationRef = useRef<TypingAnimationRef>(null);
  const handleReset = () => {
    typingAnimationRef.current?.reset();
  };

  useEffect(() => {
    const handleDOMContentLoaded = () => {
      setIsPageLoaded(true);
    };

    if (document.readyState === "complete") {
      handleDOMContentLoaded();
    } else {
      document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);
      return () => {
        document.removeEventListener(
          "DOMContentLoaded",
          handleDOMContentLoaded,
        );
      };
    }
  }, []);

  return (
    <section className="relative flex h-[calc(100dvh-64px)] min-h-[700px] flex-col items-center justify-center">
      <div className="relative z-10 flex items-center justify-center">
        <div className="flex flex-col items-center text-center">
          <div className="text-3xl md:text-4xl lg:text-5xl">
            {scopedT("introHeader")}{" "}
            {isPageLoaded ? (
              <span className="relative">
                <TypingAnimation
                  text={scopedT("name")}
                  className="my-2 inline-block rounded-l-3xl rounded-br-3xl bg-base-content p-2 text-3xl font-extrabold text-base-100 md:text-4xl lg:text-5xl"
                  ref={typingAnimationRef}
                />
                <button
                  className={`${!isPageLoaded ? "hidden" : ""} absolute right-[-5px] top-[-10px] rounded-full bg-base-content p-1 text-base-100`}
                  onClick={handleReset}
                >
                  <ReplayIcon className="h-4 w-4" />
                </button>
              </span>
            ) : (
              <strong className="my-2 inline-block rounded-3xl bg-base-content p-2 text-3xl font-extrabold text-base-100 md:text-4xl lg:text-5xl">
                {scopedT("name")}
              </strong>
            )}{" "}
            {locale === "ko" && scopedT("introFooter")}
          </div>
          <p className="mt-10 max-w-[600px] text-base md:max-w-[720px] md:text-lg">
            {scopedT("introDescription")}
          </p>
        </div>
      </div>

      <div className="mt-10 flex w-full items-center justify-center">
        <div className="flex flex-col items-center gap-y-4 rounded-3xl border bg-base-100 p-6 shadow dark:border-none dark:bg-base-200">
          <button className="btn btn-ghost w-full bg-primary text-white hover:bg-primary/80">
            <EmailIcon className="h-7 w-7" />
            <p>{scopedT("contactMe")}</p>
          </button>

          <div className="flex items-center justify-center rounded-2xl border p-2 text-center shadow dark:border-none dark:bg-base-100">
            <InfoIcon className="mr-2 h-7 w-7 flex-shrink-0 rounded-full border shadow dark:border-none dark:bg-base-200" />
            <p className="mr-1 text-xs font-bold sm:text-sm">
              {scopedT("channelTalk")}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <button className="btn flex items-center justify-center bg-base-100">
              <GithubIcon className="h-7 w-7" />
            </button>
            <button className="btn flex items-center justify-center bg-base-100">
              <LinkdeinIcon className="h-7 w-7" />
            </button>
            <button className="btn flex items-center justify-center bg-base-100">
              <YouTubeIcon className="h-7 w-7" />
            </button>
          </div>
        </div>
      </div>

      {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: 10 }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <ArrowDownIcon className="h-7 w-7" />
        </motion.div>
      </div> */}
    </section>
  );
}
