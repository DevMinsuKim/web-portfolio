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
import OneResetIcon from "../ui/icons/OneResetIcon";
import MacModel from "../models/MacModel";
import { useSpring } from "@react-spring/three";
import Image from "next/image";

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
        <div className="text-center">
          <p className="text-5xl font-extralight">
            3년 차 프론트엔드 개발자{" "}
            <strong className="text-5xl font-extrabold"> 김민수</strong> 입니다.
          </p>
          <p className="mt-14 text-3xl">
            중학생 때부터 꿈꿔온 개발자 후회없이 할 수 있도록 노력하고있습니다.
          </p>
        </div>
        {/* <div>
          <p
            className={`${locale === "en" && "text-2xl"} text-end text-sm sm:text-2xl md:text-3xl`}
          >
            {scopedT("introduction1")}
          </p>
          <p className="my-2 h-[2px] bg-base-content" />
          <p
            className={`${locale === "en" && "text-xl"} text-end text-sm sm:text-2xl md:text-3xl`}
          >
            {scopedT("introduction2")}
          </p>
        </div>

        <div className="ml-2 flex flex-wrap items-end">
          <TypingAnimation
            text={scopedT("introduction3")}
            className={`${locale === "en" ? "text-4xl" : ""} text-base font-bold sm:text-4xl md:text-5xl`}
            ref={typingAnimationRef}
          />
          <button
            className={`${!isPageLoaded ? "hidden" : ""} `}
            onClick={handleReset}
          >
            <OneResetIcon className="h-5 w-5" />
          </button>
        </div> */}
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
