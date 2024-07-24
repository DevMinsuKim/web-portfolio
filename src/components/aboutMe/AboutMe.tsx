"use client";

import { useScopedI18n } from "@/locales/client";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const messages = [
  "React, Next.js, React Native를 활용한 프론트엔드 개발 경험이 있으며 REST API 설계, 데이터베이스 스키마 설계, 서버 구축 및 서비스 운영 경험이 있습니다.",
  "직접 서비스 운영한 경험을 바탕으로, 백엔드 개발자 및 디자이너와 원활하게 협업이 가능합니다.",
  "중학생 때 마인크래프트 서버를 개설하고 플러그인을 수정하며 유저들이 즐겁게 플레이하시는 모습을 보고 개발에 흥미를 느꼈으며, 고등학생 시절에는 보안 및 개발 동아리를 운영하고 다양한 개발 프로젝트에 참여하여 수상 경력을 쌓았습니다.",
  "사용자들이 서비스를 더 편리하게 이용하고 오래 기억할 수 있도록 사용자 경험을 중시하며, 비즈니스 성장에 이바지하기 위해 학습하고 경험을 쌓으며 이를 공유합니다.",
];

const MessageBox = ({ item, index }: { item: string; index: number }) => {
  const divRef = useRef(null);
  const pRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: pRef,
  });

  const initialOpacity = useTransform(scrollYProgress, [0.8, 0.95], [1, 0]);
  const fadeOutOpacity = useTransform(scrollYProgress, [0.1, 0.25], [0, 1]);

  return (
    <motion.div
      ref={divRef}
      key={index}
      className={`flex h-[100svh] flex-col items-center justify-center text-center text-3xl`}
      style={{
        opacity: initialOpacity,
      }}
    >
      <motion.p ref={pRef} style={{ opacity: fadeOutOpacity }}>
        {item}
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
        <p className="text-6xl font-bold">AboutMe(소개)</p>
      </div>
      <div className="flex h-full flex-col justify-center">
        {messages.map((item, index) => (
          <MessageBox key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
