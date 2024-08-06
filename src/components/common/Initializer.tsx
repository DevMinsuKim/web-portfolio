"use client";

import { useScrollListener } from "@/store/scrollStore";
import { useEffect } from "react";
import * as ChannelService from "@channel.io/channel-web-sdk-loader";
import useDeviceStore from "@/store/deviceStore";

export default function Initializer() {
  const { checkDevice } = useDeviceStore();
  useScrollListener();

  useEffect(() => {
    checkDevice();

    ChannelService.loadScript();

    ChannelService.boot({
      pluginKey: process.env.NEXT_PUBLIC_CHANNEL_KEY ?? "",
      zIndex: 20,
    });
  }, [checkDevice]);

  return null;
}
