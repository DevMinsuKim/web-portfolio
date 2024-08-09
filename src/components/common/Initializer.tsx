"use client";

import { useScrollListener } from "@/store/scrollStore";
import { useEffect } from "react";
import * as ChannelService from "@channel.io/channel-web-sdk-loader";
import useDeviceStore from "@/store/deviceStore";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Initializer() {
  const { checkDevice } = useDeviceStore();
  useScrollListener();

  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
  }

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
