"use client";

import AnimatedCursor from "@/components/common/AnimatedCursor";
import NavBar from "@/components/common/NavBar";
import I18nProvider from "@/providers/I18nProvider";
import { ReactElement, useEffect } from "react";
import * as ChannelService from "@channel.io/channel-web-sdk-loader";
import { useScrollListener } from "@/store/scrollStore";
import { useScroll, useSpring } from "framer-motion";

export default function SubLayout({
  children,
  params,
}: {
  children: ReactElement;
  params: { locale: string };
}) {
  useScrollListener();

  useEffect(() => {
    ChannelService.loadScript();

    ChannelService.boot({
      pluginKey: process.env.NEXT_PUBLIC_CHANNEL_KEY ?? "",
    });
  }, []);

  return (
    <I18nProvider params={params}>
      <NavBar />

      {children}
      <AnimatedCursor />
    </I18nProvider>
  );
}
