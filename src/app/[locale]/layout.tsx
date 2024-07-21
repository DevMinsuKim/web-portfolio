"use client";

import AnimatedCursor from "@/components/common/AnimatedCursor";
import NavBar from "@/components/common/NavBar";
import I18nProvider from "@/providers/I18nProvider";
import { ReactElement } from "react";

export default function SubLayout({
  children,
  params,
}: {
  children: ReactElement;
  params: { locale: string };
}) {
  return (
    <I18nProvider params={params}>
      <NavBar />

      {children}
      <AnimatedCursor />
    </I18nProvider>
  );
}
