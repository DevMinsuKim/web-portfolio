"use client";

import { useScopedI18n } from "@/locales/client";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  const t = useScopedI18n("notFound");
  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-center px-4 text-center`}
    >
      <h2 className="text-2xl font-extrabold md:text-3xl">{t("title")}</h2>
      <p className="my-8 max-w-[320px] md:max-w-none">{t("description")}</p>
      <div className="flex flex-col gap-4 md:flex-row">
        <button className="btn rounded-full border border-base-border bg-base-100 shadow shadow-base-shadow dark:bg-base-300 dark:hover:bg-base-content/20">
          <Link href={"/"}> {t("homeButton")}</Link>
        </button>
      </div>
    </div>
  );
}
