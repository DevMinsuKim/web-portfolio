"use client";

import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef, useState } from "react";
import LaptopModel from "../models/LaptopModel";
import {
  ContactShadows,
  Environment,
  OrbitControls,
  Html,
  useProgress,
} from "@react-three/drei";
import { useSpring } from "@react-spring/three";
import { motion, useInView } from "framer-motion";
import Rotate3DIncon from "../ui/icons/Rotate3DIncon";
import { useScopedI18n } from "@/locales/client";
import useDeviceStore from "@/store/deviceStore";
import InfoIcon from "../ui/icons/InfoIcon";

export default function Laptop() {
  const { isMobile } = useDeviceStore();

  const scopedT = useScopedI18n("laptop");

  const [macOpen, setMacOpen] = useState(false);

  const props = useSpring({ open: Number(macOpen) });

  const laptopRef = useRef(null);
  const laptopIsInView = useInView(laptopRef, { amount: 0.75, once: true });

  useEffect(() => {
    setMacOpen(laptopIsInView);
  }, [laptopIsInView]);

  const ModelLoader = () => {
    const { progress } = useProgress();
    return (
      <Html center className="flex flex-col gap-y-6">
        <motion.div className="h-3 w-52 animate-pulse overflow-hidden rounded-full bg-base-300 dark:bg-white/15">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-primary"
            transition={{ duration: 0.5 }}
          />
        </motion.div>
        <div className="text-center">
          {scopedT("loading")
            .split("\n")
            .map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
        </div>
      </Html>
    );
  };

  return (
    <section ref={laptopRef}>
      <div className={`h-[21rem] sm:h-[30rem] md:h-[35rem] xl:h-[43.75rem]`}>
        <Canvas camera={{ position: [0, 8, -15], fov: 55 }}>
          <Suspense fallback={<ModelLoader />}>
            <group
              rotation={[0, Math.PI, 0]}
              position={[0, 0.2, 0]}
              onClick={(e) => (e.stopPropagation(), setMacOpen(!macOpen))}
            >
              <LaptopModel
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
            {!isMobile && (
              <OrbitControls
                enablePan={true}
                enableZoom={false}
                minPolarAngle={Math.PI / 2.2}
                maxPolarAngle={Math.PI / 2.2}
              />
            )}
          </Suspense>
        </Canvas>
      </div>

      <div className="mx-auto max-w-screen-xl px-4">
        <div className="shadow-base-shadow border-base-border z-10 flex flex-col items-center rounded-3xl border bg-base-100 px-6 py-4 shadow dark:bg-base-300">
          <Rotate3DIncon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-9 lg:w-9" />
          <div className="mt-3 text-center text-xs font-bold sm:text-sm md:text-base">
            {isMobile
              ? scopedT("mobile")
                  .split("\n")
                  .map((line, idx) => <p key={idx}>{line}</p>)
              : scopedT("pc")
                  .split("\n")
                  .map((line, idx) => <p key={idx}>{line}</p>)}
          </div>

          {isMobile && (
            <div className="mt-2 flex items-center justify-center rounded-2xl border p-2 text-center shadow dark:border-none dark:bg-base-100">
              <InfoIcon className="mr-2 h-7 w-7 flex-shrink-0 rounded-full border shadow dark:border-none dark:bg-base-300" />
              <p className="mr-1 text-xs font-bold sm:text-sm">
                {scopedT("info")}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
