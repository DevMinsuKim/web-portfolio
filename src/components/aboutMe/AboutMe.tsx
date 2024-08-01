"use client";

import useScrollDirection from "@/hook/useScrollDirection";
import { useScopedI18n } from "@/locales/client";
import { viewRightAnimation } from "@/styles/viewRightAnimation";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const messages: Array<
  "description" | "description1" | "description2" | "description3"
> = ["description", "description1", "description2", "description3"];

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
      className={`flex h-[50svh] items-end self-center text-center text-lg sm:max-w-[80%] sm:text-2xl lg:text-3xl`}
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
  const scrollDirection = useScrollDirection();

  const scopedT = useScopedI18n("aboutMe");

  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef, {
    amount: 0.05,
    once: scrollDirection === "down",
  });

  return (
    <section className="mt-20 sm:mt-24 lg:mt-32" ref={sectionRef}>
      <div className="sticky top-28" style={viewRightAnimation(sectionInView)}>
        <p className="text-3xl font-bold sm:text-4xl lg:text-5xl">
          {scopedT("title")}
        </p>
      </div>
      <div className="flex flex-col">
        {messages.map((item, index) => (
          <MessageBox key={index} item={scopedT(item)} index={index} />
        ))}
      </div>
    </section>
  );
}
