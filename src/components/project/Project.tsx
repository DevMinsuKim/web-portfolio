import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";
import useScrollDirection from "@/hook/useScrollDirection";
import { viewUpAnimation } from "@/styles/viewUpAnimation";
import { viewRightAnimation } from "@/styles/viewRightAnimation";

const data = [
  {
    cover: "/images/test.jpg",
    title: "웹 포트폴리오",
    description: "현재 보시는 프로젝트는 멋진 프로젝트입니다!",
    date: "2021.08 ~ 2024.1",
  },
  {
    cover: "/images/test.jpg",
    title: "클로버픽",
    description: "test123",
    date: "2021.04 ~ 2021.07",
  },
  {
    cover: "",
    title: "퍼즐",
    description: "test123",
    date: "2021.04 ~ 2021.07",
  },
  {
    cover: "",
    title: "카드북",
    description: "test123",
    date: "2021.04 ~ 2021.07",
  },
  {
    cover: "/images/test.jpg",
    title: "Wooden Wars",
    description: "test123",
    date: "2021.04 ~ 2021.07",
  },
];

export default function Project() {
  const scrollDirection = useScrollDirection();

  const sectionRef = useRef(null);

  const sectionInView = useInView(sectionRef, {
    once: scrollDirection === "down",
  });

  const divInView = useInView(sectionRef, {
    amount: 0.3,
    once: scrollDirection === "down",
  });

  return (
    <section className="mt-32 sm:mt-48" ref={sectionRef}>
      <p
        className="text-3xl font-bold sm:text-4xl lg:text-5xl"
        style={viewRightAnimation(sectionInView)}
      >
        프로젝트
      </p>

      <div
        className="mt-20 grid grid-cols-3 items-center justify-center gap-10"
        style={viewUpAnimation(divInView)}
      >
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-base-border shadow shadow-base-shadow dark:bg-base-300"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative h-48 w-full">
              {item.cover && (
                <Image src={item.cover} alt={`${item.cover} Image`} fill />
              )}
            </div>

            {item.cover ? (
              <div className="px-8 py-4">
                <p className="self-end text-3xl font-bold">{item.title}</p>
                <p className="self-end text-xl">{item.description}</p>
                <p className="self-end text-xl">{item.date}</p>
              </div>
            ) : (
              <div className="px-8 py-4">
                <p className="self-end text-3xl font-bold">{item.title}</p>
                <p className="self-end text-xl">{item.description}</p>
                <p className="self-end text-xl">{item.date}</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
