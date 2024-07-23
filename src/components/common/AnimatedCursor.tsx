"use client";

import useCursorStore from "@/store/cursorStore";
import useDeviceStore from "@/store/deviceStore";
import { motion, useMotionValue, useSpring } from "framer-motion";
import React, { useEffect, useState } from "react";

export default function AnimatedCursor() {
  const { isMobile, checkDevice } = useDeviceStore();
  const { isCustomCursor } = useCursorStore();

  const [isCursorInside, setIsCursorInside] = useState(true);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const handleMouseEnter = () => {
    setIsCursorInside(true);
  };

  const handleMouseOut = () => {
    setIsCursorInside(false);
  };

  useEffect(() => {
    checkDevice();

    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX - 16, y: event.clientY });
      cursorX.set(event.clientX - 16);
      cursorY.set(event.clientY);
    };

    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
      document.body.addEventListener("mouseenter", handleMouseEnter);
      document.body.addEventListener("mouseleave", handleMouseOut);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.addEventListener("mouseenter", handleMouseEnter);
      document.body.removeEventListener("mouseleave", handleMouseOut);
    };
  }, [isMobile, checkDevice, cursorX, cursorY, isCursorInside]);

  if (isMobile) {
    return null;
  }

  return (
    <motion.div
      className={`${(position.x === 0 && position.y === 0) || !isCursorInside || isCustomCursor ? "opacity-0" : "opacity-100"} pointer-events-none fixed left-0 top-0 z-20 font-bold text-base-content`}
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
    >
      {`{`} &nbsp; &nbsp; &nbsp; {`}`}
    </motion.div>
  );
}
