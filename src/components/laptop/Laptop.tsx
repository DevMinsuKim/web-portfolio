"use client";

import { Canvas } from "@react-three/fiber";
import React, { memo, Suspense, useRef, useState } from "react";
import LaptopModel from "../models/LaptopModel";
import {
  ContactShadows,
  Environment,
  OrbitControls,
  Html,
  useProgress,
} from "@react-three/drei";
import { useSpring } from "@react-spring/three";
import { gsap } from "gsap";
import { useScopedI18n } from "@/locales/client";
import useDeviceStore from "@/store/deviceStore";
import InfoIcon from "../ui/icons/InfoIcon";
import Rotate3DIcon from "../ui/icons/Rotate3DIncon";
import { useGSAP } from "@gsap/react";

export default function Laptop() {
  const { isMobile } = useDeviceStore();
  const t = useScopedI18n("laptop");
  const [laptopOpen, setLaptopOpen] = useState(false);
  const [props, api] = useSpring(() => ({ hinge: 0 }));
  const sectionRef = useRef<HTMLDivElement>(null);
  const laptopRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(laptopRef.current, {
      scrollTrigger: {
        trigger: laptopRef.current,
        start: "top 50%",
        end: "45% 50%",
        scrub: true,
        once: true,
        onUpdate: (self) => {
          const progress = self.progress;
          setLaptopOpen(progress > 0.5);
          api.start({ hinge: progress });
        },
      },
    });
  }, [api]);

  const handleClick = () => {
    setLaptopOpen(!laptopOpen);
    api.start({ hinge: laptopOpen ? 0 : 1 });
  };

  const ModelLoader = memo(() => {
    const { progress } = useProgress();

    return (
      <Html center className="flex flex-col gap-y-6">
        <div className="h-3 w-52 animate-pulse overflow-hidden rounded-full bg-base-300 dark:bg-white/15">
          <div className={`h-full w-[${progress}%] bg-primary`} />
        </div>
        <p className="text-center">{t("loading")}</p>
      </Html>
    );
  });

  ModelLoader.displayName = "ModelLoader";

  return (
    <section ref={sectionRef}>
      <div
        className={`h-[21rem] sm:h-[30rem] md:h-[35rem] xl:h-[43.75rem]`}
        ref={laptopRef}
      >
        <Canvas camera={{ position: [0, 8, -15], fov: 55 }}>
          <Suspense fallback={<ModelLoader />}>
            <group
              rotation={[0, Math.PI, 0]}
              position={[0, 0.2, 0]}
              onClick={(e) => (e.stopPropagation(), handleClick())}
            >
              <LaptopModel
                open={laptopOpen}
                hinge={props.hinge.to([0, 1], [1.575, -0.425])}
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
        <div className="z-10 flex flex-col items-center rounded-3xl border border-base-border bg-base-100 px-6 py-4 shadow shadow-base-shadow dark:bg-base-300">
          <Rotate3DIcon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-9 lg:w-9" />
          <p className="mt-3 text-center text-xs font-bold sm:text-sm md:text-base">
            {isMobile ? t("mobile") : t("pc")}
          </p>

          {isMobile && (
            <div className="mt-2 flex items-center justify-center rounded-2xl border p-2 text-center shadow dark:border-none dark:bg-base-100">
              <InfoIcon className="mr-2 h-7 w-7 flex-shrink-0 rounded-full border shadow dark:border-none dark:bg-base-300" />
              <p className="mr-1 text-xs font-bold sm:text-sm">{t("info")}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
