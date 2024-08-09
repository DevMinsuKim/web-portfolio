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

  useEffect(() => {
    checkDevice();
  }, [checkDevice]);

  const initializeChannel = () => {
    window.ChannelIOInitialized = false;

    delete (window as any).ChannelIO;

    (function () {
      var w = window as any;

      var ch: any = function () {
        ch.c(arguments);
      };

      ch.q = [];
      ch.c = function (args: any) {
        ch.q.push(args);
      };

      w.ChannelIO = ch;

      function l() {
        if (w.ChannelIOInitialized) {
          w.ChannelIOInitialized = false;
        }
        w.ChannelIOInitialized = true;

        var s = document.createElement("script");
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://cdn.channel.io/plugin/ch-plugin-web.js";
        var x = document.getElementsByTagName("script")[0];
        if (x.parentNode) {
          x.parentNode.insertBefore(s, x);
        }
      }

      if (document.readyState === "complete") {
        l();
      } else {
        w.addEventListener("DOMContentLoaded", l);
        w.addEventListener("load", l);
      }
    })();
  };

  useEffect(() => {
    initializeChannel();

    ChannelService.boot({
      pluginKey: process.env.NEXT_PUBLIC_CHANNEL_KEY ?? "",
      zIndex: 20,
    });
  }, []);

  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
  }

  return null;
}
