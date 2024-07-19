"use client";

import { Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { RobotModel } from "../models/RobotModel";
import ArrowDownIcon from "../ui/icons/ArrowDownIcon";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[calc(100vh-64px)]">
      <div className="">
        <p>안녕하세요 3년차 프론트 엔드 개발자 김민수입니다.</p>

        <div className="absolute bottom-32 left-1/2 h-[500px] max-h-[500px] w-[500px] max-w-[500px] -translate-x-1/2">
          {/* <div className="absolute left-1/2 top-1/2 h-[40%] w-[40%] -translate-x-1/2 -translate-y-1/2 transform rounded-3xl bg-gradient-to-t from-base-100 via-base-200 to-primary/50" /> */}
          <Canvas
            // shadows
            dpr={[1, 2]}
            // camera={}
          >
            <Suspense fallback={null}>
              {/* <Rig /> */}
              {/* <axesHelper args={[5]} /> */}
              <Stage
                preset="rembrandt"
                intensity={1}
                environment="city"
                shadows={false}
              >
                <RobotModel />
              </Stage>
            </Suspense>
            {/* <OrbitControls /> */}
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
      </div>
    </section>
  );
}
