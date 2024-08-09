"use client";

import { I18nProviderClient } from "@/locales/client";
import React, { ReactNode } from "react";

export default function I18nProvider({
  params,
  children,
}: {
  params: { locale: string };
  children: ReactNode;
}) {
  const { locale } = params;
  return <I18nProviderClient locale={locale}>{children}</I18nProviderClient>;
}
