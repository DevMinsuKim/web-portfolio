"use client";

import { useScopedI18n } from "@/locales/client";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const messages: Array<
  | "frontendExperience"
  | "smoothCollaboration"
  | "interestInDevelopment"
  | "focusOnUserExperience"
> = [
  "frontendExperience",
  "smoothCollaboration",
  "interestInDevelopment",
  "focusOnUserExperience",
];

const MessageBox = ({ item, index }: { item: string; index: number }) => {
  const divRef = useRef(null);
  const pRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: pRef,
  });

  const initialOpacity = useTransform(scrollYProgress, [0.8, 0.95], [1, 0]);
  const fadeOutOpacity = useTransform(scrollYProgress, [0.1, 0.25], [0, 1]);

  const parts = item.split(/(<strong>|<\/strong>)/);

  return (
    <motion.div
      ref={divRef}
      key={index}
      className={`flex h-[50svh] flex-col items-center justify-center text-center text-lg sm:text-2xl lg:text-3xl`}
      style={{
        opacity: initialOpacity,
      }}
    >
      <motion.p ref={pRef} style={{ opacity: fadeOutOpacity }}>
        {parts.map((part, index) => {
          if (part === "<strong>") {
            return <strong key={index}>{parts[index + 1]}</strong>;
          } else if (part === "</strong>") {
            return null;
          } else if (index > 0 && parts[index - 1] === "<strong>") {
            return null;
          } else {
            return <span key={index}>{part}</span>;
          }
        })}
      </motion.p>
    </motion.div>
  );
};

export default function AboutMe() {
  const sectionRef = useRef(null);
  const setctionInView = useInView(sectionRef, { amount: 0.05 });

  const scopedT = useScopedI18n("aboutMe");

  return (
    <section className="mt-64" ref={sectionRef}>
      <div
        className="sticky top-28"
        style={{
          transform: setctionInView ? "none" : "translateX(-200px)",
          opacity: setctionInView ? 1 : 0,
          transition:
            "transform 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s, opacity 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
        }}
      >
        <p className="text-5xl font-bold sm:text-6xl lg:text-7xl">
          {scopedT("aboutMe")}
        </p>
      </div>
      <div className="flex h-full flex-col justify-center">
        {messages.map((item, index) => (
          <MessageBox key={index} item={scopedT(item)} index={index} />
        ))}
      </div>
    </section>
  );
}
