"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

export default function AnimatedCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX - 16, y: event.clientY });
    };

    const checkIfMobile = () => {
      setIsMobile("ontouchstart" in window || navigator.maxTouchPoints > 0);
    };

    checkIfMobile();

    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMobile]);

  if (isMobile) {
    return null;
  }

  return (
    <motion.div
      className={`${position.x === 0 && position.y === 0 ? "opacity-0" : "opacity-100"} pointer-events-none fixed left-0 top-0 font-bold text-primary`}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "tween", ease: "easeOut" }}
    >
      {`{`} &nbsp; &nbsp; &nbsp; {`}`}
    </motion.div>
  );
}
