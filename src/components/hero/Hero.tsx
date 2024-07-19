"use client";

import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import { RobotModel } from "../models/RobotModel";
import { Vector3 } from "three";

export default function Hero() {
  // const ref = useRef()

  function Rig() {
    const { camera, mouse } = useThree();
    const vec = new Vector3();

    return useFrame(() => {
      camera.position.lerp(vec.set(-mouse.x, mouse.y, camera.position.z), 0.05);
      camera.lookAt(0, 0, 0);
    });
  }

  return (
    <section>
      <div className="justify-evenly md:flex">
        <p>안녕하세요 3년차 프론트 엔드 개발자 김민수입니다.</p>

        <div className="mt-10 h-[600px] w-[600px] bg-red-400">
          <Canvas shadows dpr={[1, 2]} camera={{}}>
            <Suspense fallback={null}>
              {/* <Rig /> */}
              {/* <axesHelper args={[5]} /> */}
              <Stage preset="rembrandt" intensity={1} environment="city">
                <RobotModel />
              </Stage>
            </Suspense>
            {/* <OrbitControls /> */}
          </Canvas>
        </div>
      </div>
    </section>
  );
}
