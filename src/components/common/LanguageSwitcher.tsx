"use client";

import LanguageIcon from "../ui/icons/LanguageIcon";
import { useChangeLocale, useCurrentLocale } from "@/locales/client";

export default function LanguageSwitcher() {
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();

  const getColor = (buttonLocale: string) => {
    return locale === buttonLocale ? "text-primary" : "";
  };

  return (
    <div className="flex items-center">
      {/* <LanguageIcon className={`h-5 w-5`} /> */}
      <button
        className={`${getColor("ko")} btn btn-ghost text-base px-2`}
        onClick={() => changeLocale("ko")}
      >
        한국어
      </button>
      <p className="mx-1">|</p>
      <button
        className={`${getColor("en")} btn btn-ghost text-base px-2`}
        onClick={() => changeLocale("en")}
      >
        English
      </button>
    </div>
  );
}
