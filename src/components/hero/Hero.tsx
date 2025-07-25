"use client";

import React, { useEffect, useRef, useState } from "react";
import { useCurrentLocale, useScopedI18n } from "@/locales/client";
import TypingAnimation, { TypingAnimationRef } from "../common/TypingAnimation";
import ReplayIcon from "../ui/icons/ReplayIcon";
import EmailIcon from "../ui/icons/EmailIcon";
import GithubIcon from "../ui/icons/GithubIcon";
import LinkdeinIcon from "../ui/icons/LinkdeinIcon";
import InfoIcon from "../ui/icons/InfoIcon";
import { useContactScrollStore } from "@/store/contactScrollStore";
import Link from "next/link";
import TistoryIcon from "../ui/icons/TistoryIcon";

export default function Hero() {
  const locale = useCurrentLocale();
  const t = useScopedI18n("hero");
  const { targetRef } = useContactScrollStore();
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const typingAnimationRef = useRef<TypingAnimationRef>(null);

  const handleReset = () => {
    typingAnimationRef.current?.reset();
  };

  useEffect(() => {
    setIsPageLoaded(true);
  }, []);

  const handleTabClick = () => {
    const offset = window.innerHeight / 10;
    const elementPosition = targetRef?.getBoundingClientRect().top;

    if (elementPosition !== undefined) {
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({ top: offsetPosition });
    }
  };

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center pt-20">
      <div className="absolute inset-0 min-w-[20rem] bg-gradient-to-t from-primary/20 to-base-200 dark:from-[#161430] dark:to-base-100" />

      <div
        style={{
          position: "absolute",
          minWidth: "20rem",
          bottom: 0,
          left: 0,
          width: "100%",
          overflow: "hidden",
          lineHeight: 0,
          transform: "rotate(180deg)",
        }}
      >
        <svg
          className="h-[5rem] md:h-[15.625rem]"
          style={{
            position: "relative",
            display: "block",
            width: "calc(170% + 0.081rem)",
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

      <div className="z-10 mx-auto px-4 md:max-w-screen-xl">
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center text-center">
            <div className="text-3xl md:text-4xl lg:text-5xl">
              {t("introHeader")}{" "}
              {isPageLoaded ? (
                <span className="relative">
                  <TypingAnimation
                    text={t("name")}
                    className="my-2 inline-block rounded-l-3xl rounded-br-3xl bg-base-content p-2 text-3xl font-extrabold text-base-100 md:text-4xl lg:text-5xl"
                    ref={typingAnimationRef}
                  />
                  <button
                    className={`${!isPageLoaded ? "hidden" : ""} absolute right-[-0.313rem] top-[-0.625rem] rounded-full bg-base-content p-1 text-base-100`}
                    onClick={handleReset}
                    aria-label="Name Animation Reset Button"
                  >
                    <ReplayIcon className="h-4 w-4" />
                  </button>
                </span>
              ) : (
                <strong className="my-2 inline-block rounded-3xl bg-base-content p-2 text-3xl font-extrabold text-base-100 md:text-4xl lg:text-5xl">
                  {t("name")}
                </strong>
              )}{" "}
              {locale === "ko" && t("introFooter")}
            </div>
            <p className="mt-10 max-w-[37.5rem] text-base md:max-w-[45rem] md:text-lg">
              {t("introDescription")}
            </p>
          </div>
        </div>

        <div className="mt-10 flex w-full items-center justify-center">
          <div className="flex flex-col items-center gap-y-4 rounded-3xl border bg-base-100 p-6 shadow dark:border-none dark:bg-base-200">
            <button
              className="btn btn-ghost w-full bg-primary text-white hover:bg-primary/80"
              onClick={() => handleTabClick()}
            >
              <EmailIcon className="h-7 w-7" />
              <p>{t("contactMe")}</p>
            </button>

            <div className="flex items-center justify-center rounded-2xl border p-2 text-center shadow dark:border-none dark:bg-base-400">
              <InfoIcon className="mr-2 h-7 w-7 flex-shrink-0 rounded-full border shadow dark:border-none dark:bg-base-200" />
              <p className="mr-1 text-xs font-bold md:text-sm">
                {t("channelTalk")}
              </p>
            </div>

            <div className="flex gap-4">
              <Link
                className="justify-cente1 btn flex items-center bg-base-400 hover:bg-base-content/20"
                href={process.env.NEXT_PUBLIC_GITHUB_URL ?? ""}
                target="_blank"
                aria-label="Github Link"
              >
                <GithubIcon className="h-7 w-7" />
              </Link>
              <Link
                className="btn flex items-center justify-center bg-base-400 hover:bg-base-content/20"
                href={process.env.NEXT_PUBLIC_LINKEDIN_URL ?? ""}
                target="_blank"
                aria-label="Linkdein Link"
              >
                <LinkdeinIcon className="h-7 w-7" />
              </Link>
              <Link
                className="btn flex items-center justify-center bg-base-400 hover:bg-base-content/20"
                href={process.env.NEXT_PUBLIC_TISTORY_URL ?? ""}
                target="_blank"
                aria-label="Tistory Link"
              >
                <TistoryIcon className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
