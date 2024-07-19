"use client";

import useCursorStore from "@/store/cursorStore";
import useDeviceStore from "@/store/deviceStore";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

export default function AnimatedCursor() {
  const isMobile = useDeviceStore((state) => state.isMobile);
  const checkIfMobile = useDeviceStore((state) => state.checkIfMobile);
  const isCustomCursor = useCursorStore((state) => state.isCustomCursor);

  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    checkIfMobile();
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX - 16, y: event.clientY });
    };

    checkIfMobile();

    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMobile, checkIfMobile]);

  if (isMobile) {
    return null;
  }

  return (
    <motion.div
      className={`${(position.x === 0 && position.y === 0) || isCustomCursor ? "opacity-0" : "opacity-100"} pointer-events-none fixed left-0 top-0 z-20 font-bold text-primary`}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "tween", ease: "easeOut" }}
    >
      {`{`} &nbsp; &nbsp; &nbsp; {`}`}
    </motion.div>
  );
}
