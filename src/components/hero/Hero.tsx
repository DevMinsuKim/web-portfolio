"use client";

import { a as three } from "@react-spring/three";
import { ContactShadows, Environment, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useRef, useState } from "react";
import { RobotModel } from "../models/RobotModel";
import ArrowDownIcon from "../ui/icons/ArrowDownIcon";
import { motion } from "framer-motion";
import { useScopedI18n } from "@/locales/client";
import TypingAnimation, { TypingAnimationRef } from "../common/TypingAnimation";
import OneResetIcon from "../ui/icons/OneResetIcon";
import MacModel from "../models/MacModel";
import { useSpring } from "@react-spring/three";

export default function Hero() {
  const scopedT = useScopedI18n("Hero");

  const typingAnimationRef = useRef<TypingAnimationRef>(null);
  const handleReset = () => {
    typingAnimationRef.current?.reset();
  };

  const [macOpen, setMacOpen] = useState(false);

  const props = useSpring({ open: Number(macOpen) });

  return (
    <section className="relative h-[calc(100vh-64px)]">
      <div className="flex items-center justify-center rounded-3xl bg-base-200 p-10">
        <div>
          <p className="text-end text-4xl font-bold">
            {scopedT("introduction1")}
          </p>
          <p className="my-2 h-[2px] bg-base-content" />
          <p className="text-end text-4xl font-bold">
            {scopedT("introduction2")}
          </p>
        </div>

        <div className="ml-3 flex items-end">
          <TypingAnimation
            text={"개발자 김민수 입니다"}
            className="text-6xl font-bold"
            ref={typingAnimationRef}
          />
          <button
            onClick={() => {
              handleReset();
            }}
          >
            <OneResetIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 h-[700px] w-[700px] -translate-x-1/2">
        {/* <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
          <p>노트북을 클릭하면 내부 콘텐츠랑 상호작용도 가능합니다!</p>
        </div> */}

        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, -30], fov: 35 }}>
          <pointLight position={[0, 0, 0]} intensity={10} color={"white"} />
          <Suspense fallback={null}>
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
          </Suspense>
          <ContactShadows
            position={[0, -4.5, 0]}
            scale={20}
            blur={2}
            far={4.5}
          />
        </Canvas>
      </div>

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
