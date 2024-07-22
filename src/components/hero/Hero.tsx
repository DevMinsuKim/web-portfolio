"use client";

import { a as three } from "@react-spring/three";
import { ContactShadows, Environment, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { RobotModel } from "../models/RobotModel";
import ArrowDownIcon from "../ui/icons/ArrowDownIcon";
import { motion } from "framer-motion";
import {
  useChangeLocale,
  useCurrentLocale,
  useScopedI18n,
} from "@/locales/client";
import TypingAnimation, { TypingAnimationRef } from "../common/TypingAnimation";
import MacModel from "../models/MacModel";
import { useSpring } from "@react-spring/three";
import Image from "next/image";
import ReplayIcon from "../ui/icons/ReplayIcon";
import EmailIcon from "../ui/icons/EmailIcon";
import GithubIcon from "../ui/icons/GithubIcon";
import LinkdeinIcon from "../ui/icons/LinkdeinIcon";
import YouTubeIcon from "../ui/icons/YouTubeIcon";
import InfoIcon from "../ui/icons/InfoIcon";

export default function Hero() {
  const locale = useCurrentLocale();
  const scopedT = useScopedI18n("Hero");

  const [macOpen, setMacOpen] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  const typingAnimationRef = useRef<TypingAnimationRef>(null);
  const handleReset = () => {
    typingAnimationRef.current?.reset();
  };

  const props = useSpring({ open: Number(macOpen) });

  useEffect(() => {
    const handleDOMContentLoaded = () => {
      setIsPageLoaded(true);
    };

    if (
      document.readyState === "complete" ||
      document.readyState === "interactive"
    ) {
      handleDOMContentLoaded();
    } else {
      document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);
      return () => {
        document.removeEventListener(
          "DOMContentLoaded",
          handleDOMContentLoaded,
        );
      };
    }
  }, []);

  // h-[calc(100vh-64px)]

  return (
    <section className="relative h-[2000px]">
      <div className="relative z-10 flex items-center justify-center pt-36 sm:pt-60">
        <div className="flex flex-col items-center text-center">
          <div className="text-3xl md:text-4xl lg:text-5xl">
            {scopedT("introHeader")}{" "}
            {isPageLoaded ? (
              <span className="relative">
                <TypingAnimation
                  text={scopedT("name")}
                  className="my-2 inline-block rounded-3xl bg-base-content p-2 text-3xl font-extrabold text-base-100 md:text-4xl lg:text-5xl"
                  ref={typingAnimationRef}
                />
                <button
                  className={`${!isPageLoaded ? "hidden" : ""} absolute right-[-5px] top-[-10px] rounded-full bg-base-content p-1 text-base-100`}
                  onClick={handleReset}
                >
                  <ReplayIcon className="h-4 w-4" />
                </button>
              </span>
            ) : (
              <strong className="my-2 inline-block rounded-3xl bg-base-content p-2 text-3xl font-extrabold text-base-100 md:text-4xl lg:text-5xl">
                {scopedT("name")}
              </strong>
            )}{" "}
            {locale === "ko" && scopedT("introFooter")}
          </div>
          <p className="mt-14 max-w-[780px] text-base md:text-base lg:text-2xl">
            {scopedT("introDescription")}
          </p>
        </div>
      </div>

      {/* <div className="my-8 h-[1px] w-full bg-base-200" /> */}

      <div className="mt-20 flex w-full items-center justify-center">
        <div className="flex flex-col items-center gap-y-4 rounded-3xl border p-6 shadow dark:border-none dark:bg-base-200">
          <button className="btn btn-ghost w-full bg-primary text-white hover:bg-primary/80">
            <EmailIcon className="h-7 w-7" />
            <p>{scopedT("contactMe")}</p>
          </button>

          <div className="flex items-center justify-center rounded-2xl border p-2 shadow dark:border-none dark:bg-base-100">
            <InfoIcon className="mr-2 h-7 w-7 flex-shrink-0 rounded-full border shadow dark:border-none dark:bg-base-200" />
            <p className="mr-1 text-sm font-bold">{scopedT("channelTalk")}</p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <button className="btn flex items-center justify-center bg-base-100">
              <GithubIcon className="h-7 w-7" />
            </button>
            <button className="btn flex items-center justify-center bg-base-100">
              <LinkdeinIcon className="h-7 w-7" />
            </button>
            <button className="btn flex items-center justify-center bg-base-100">
              <YouTubeIcon className="h-7 w-7" />
            </button>
          </div>
        </div>
      </div>

      {/* <div className="absolute bottom-0 left-1/2 h-[700px] w-[700px] -translate-x-1/2">
        <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-base-200 p-2">
          <p className="text-center font-bold">
            아래 노트북을 클릭하면 내부 콘텐츠랑 상호작용도 가능합니다!
          </p>
        </div>

        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, -30], fov: 35 }}>
          <Suspense fallback={null}>
            <pointLight position={[0, 0, 0]} intensity={10} color={"white"} />
            <group
              rotation={[0, Math.PI, 0]}
              onClick={(e) => (e.stopPropagation(), setMacOpen(!macOpen))}
            >
              <MacModel
                open={macOpen}
                hinge={props.open.to([0, 1], [1.575, -0.425])}
              />
            </group>
            <Environment preset="city" />
            <ContactShadows
              position={[0, -4.5, 0]}
              scale={20}
              blur={2}
              far={4.5}
            />
          </Suspense>
        </Canvas>
      </div> */}

      <motion.div
        initial={{ y: 0 }}
        animate={{ y: 10 }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ArrowDownIcon className="h-7 w-7" />
      </motion.div>
    </section>
  );
}
