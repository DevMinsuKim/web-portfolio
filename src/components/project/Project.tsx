import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";

const data = [
  {
    cover: "/images/test.jpg",
    title: "카이",
    description: "test",
    date: "2021.08 ~ 2024.1",
  },
  {
    cover: "/images/test.jpg",
    title: "다돌",
    description: "test123",
    date: "2021.04 ~ 2021.07",
  },
];

export default function Project() {
  const sectionRef = useRef(null);
  const setctionInView = useInView(sectionRef, { amount: 0.2 });

  return (
    <section className="mt-64" ref={sectionRef}>
      <p
        className="text-5xl font-bold sm:text-6xl lg:text-7xl"
        style={{
          transform: setctionInView ? "none" : "translateY(200px)",
          opacity: setctionInView ? 1 : 0,
          transition:
            "transform 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s, opacity 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
        }}
      >
        프로젝트
      </p>

      <div
        className="mt-20 grid grid-cols-2 items-center justify-center gap-10"
        style={{
          transform: setctionInView ? "none" : "translateY(200px)",
          opacity: setctionInView ? 1 : 0,
          transition:
            "transform 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s, opacity 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
        }}
      >
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="flex cursor-pointer flex-col overflow-hidden rounded-2xl border shadow dark:border-none dark:bg-base-300"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative h-48 w-full">
              <Image
                src={item.cover}
                alt={`${item.cover} Image`}
                fill
                objectFit="cover"
              />
            </div>

            <div className="px-8 py-4">
              <p className="self-end text-3xl font-bold">{item.title}</p>
              <p className="self-end text-xl">{item.description}</p>
              <p className="self-end text-xl">{item.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
