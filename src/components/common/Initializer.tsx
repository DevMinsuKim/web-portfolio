"use client";
import { useScrollListener } from "@/store/scrollStore";
import { useEffect } from "react";
import * as ChannelService from "@channel.io/channel-web-sdk-loader";

export default function Initializer() {
  useScrollListener();

  useEffect(() => {
    ChannelService.loadScript();

    ChannelService.boot({
      pluginKey: process.env.NEXT_PUBLIC_CHANNEL_KEY ?? "",
    });
  }, []);

  return null;
}
