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

export default function Laptop() {
  const { isMobile } = useDeviceStore();

  const scopedT = useScopedI18n("Mac");

  const [macOpen, setMacOpen] = useState(false);

  const props = useSpring({ open: Number(macOpen) });

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.9, once: true });

  useEffect(() => {
    setMacOpen(isInView);
  }, [isInView]);

  return (
    <section className="relative flex flex-col items-center justify-center">
      {/* className="bottom-0 left-1/2 h-[700px] w-[700px] -translate-x-1/2" */}
      <motion.div
        className="h-[410px] w-full sm:h-[600px] md:h-[710px] lg:h-[1000px] lg:w-[1000px]"
        ref={ref}
      >
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, -30], fov: 35 }}>
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
              enablePan={false}
              enableZoom={false}
              minPolarAngle={Math.PI / 2.2}
              maxPolarAngle={Math.PI / 2.2}
            />
          )}
        </Canvas>

        <div className="absolute bottom-[-50px] left-1/2 z-10 flex w-full -translate-x-1/2 flex-col items-center rounded-3xl border bg-base-100 px-6 py-4 shadow dark:border-none dark:bg-base-200 md:bottom-[-20px] md:w-[70%] lg:bottom-[-10px] lg:w-[50%]">
          <Rotate3DIncon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-9 lg:w-9" />
          <p className="mt-3 text-center text-xs font-bold sm:text-sm md:text-base">
            {scopedT("Motion")}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
