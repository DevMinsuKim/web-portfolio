"use client";

import { useScopedI18n } from "@/locales/client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const messages: Array<"description" | "description1" | "description2"> = [
  "description",
  "description1",
  "description2",
];

const MessageBox = ({ item, index }: { item: string; index: number }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const pRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: pRef.current,
          start: "top 90%",
          end: "top 10%",
          scrub: true,
        },
      });

      timeline
        .fromTo(
          pRef.current,
          { y: 100, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.8 },
        )
        .to(pRef.current, { y: -100, autoAlpha: 0, duration: 0.8 });
    },

    { scope: divRef },
  );

  return (
    <div
      ref={divRef}
      key={index}
      className={`flex h-[60svh] items-end self-center text-center text-lg sm:max-w-[80%] sm:text-2xl lg:text-3xl`}
    >
      <p ref={pRef}>{item}</p>
    </div>
  );
};

export default function AboutMe() {
  const scopedT = useScopedI18n("aboutMe");
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 90%",
          end: "5% 70%",
          scrub: true,
        },
        x: -100,
        autoAlpha: 0,
        duration: 0.8,
      });
    },

    { scope: sectionRef },
  );

  return (
    <section className="mt-20 sm:mt-24 lg:mt-32" ref={sectionRef}>
      <div ref={titleRef} className="sticky top-28">
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
