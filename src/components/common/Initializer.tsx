"use client";

import { useScrollListener } from "@/store/scrollStore";
import { useEffect } from "react";
import * as ChannelService from "@channel.io/channel-web-sdk-loader";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Initializer() {
  // useEffect(() => {
  // useScrollListener();

  //   ChannelService.loadScript();

  //   ChannelService.boot({
  //     pluginKey: process.env.NEXT_PUBLIC_CHANNEL_KEY ?? "",
  //   });
  // }, []);

  return null;
}
