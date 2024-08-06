"use client";

import useCursorStore from "@/store/cursorStore";
import useDeviceStore from "@/store/deviceStore";
import { useEffect, useState } from "react";
import { gsap } from "gsap";

export default function AnimatedCursor() {
  const { isMobile } = useDeviceStore();
  const { isCustomCursor } = useCursorStore();

  const [isCursorInside, setIsCursorInside] = useState(true);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => {
    setIsCursorInside(true);
  };

  const handleMouseOut = () => {
    setIsCursorInside(false);
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const newPosition = { x: event.clientX - 16, y: event.clientY };
      setPosition(newPosition);
      gsap.to(".custom-cursor", {
        x: newPosition.x,
        y: newPosition.y,
        ease: "power2.out",
        duration: 0.2,
      });
    };

    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
      document.body.addEventListener("mouseenter", handleMouseEnter);
      document.body.addEventListener("mouseleave", handleMouseOut);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      document.body.removeEventListener("mouseleave", handleMouseOut);
    };
  }, [isMobile, isCursorInside]);

  if (isMobile) {
    return null;
  }

  return (
    <div
      className={`custom-cursor ${
        (position.x === 0 && position.y === 0) ||
        !isCursorInside ||
        isCustomCursor
          ? "opacity-0"
          : "opacity-100"
      } pointer-events-none fixed left-0 top-0 z-20 font-bold text-base-content`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      {`{`} &nbsp; &nbsp; &nbsp; {`}`}
    </div>
  );
}
