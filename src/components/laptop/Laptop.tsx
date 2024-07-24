"use client";

import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef, useState } from "react";
import LaptopModel from "../models/LaptopModel";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
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

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.9, once: true });

  useEffect(() => {
    setMacOpen(isInView);
  }, [isInView]);

  return (
    <section className="relative flex flex-col items-center justify-center">
      <motion.div ref={ref}>
        <div className="h-[410px] w-full sm:h-[600px] md:h-[710px] lg:w-[1000px]">
          <Canvas camera={{ position: [0, 0, -30], fov: 35 }}>
            <Suspense fallback={null}>
              {/* <pointLight position={[0, 0, 0]} intensity={10} color="white" /> */}
              <group
                rotation={[0, Math.PI, 0]}
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
            </Suspense>
            {!isMobile && (
              <OrbitControls
                enablePan={true}
                enableZoom={false}
                minPolarAngle={Math.PI / 2.2}
                maxPolarAngle={Math.PI / 2.2}
              />
            )}
          </Canvas>
        </div>
      </motion.div>

      <div className="z-10 flex flex-col items-center rounded-3xl border bg-base-100 px-6 py-4 shadow dark:border-none dark:bg-base-200">
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
            <InfoIcon className="mr-2 h-7 w-7 flex-shrink-0 rounded-full border shadow dark:border-none dark:bg-base-200" />
            <p className="mr-1 text-xs font-bold sm:text-sm">
              {scopedT("info")}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
