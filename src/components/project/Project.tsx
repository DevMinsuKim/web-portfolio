import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const data = [
  {
    cover: "/images/test.jpg",
    title: "웹 포트폴리오",
    description: "테스트",
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
          markers: false,
        },
        x: -100,
        autoAlpha: 0,
        duration: 0.8,
      });

      gsap.from(".item", {
        scrollTrigger: {
          trigger: ".item",
          start: "top 90%",
          end: "5% 70%",
          scrub: true,
          markers: false,
        },
        autoAlpha: 0,
        duration: 0.8,
      });
    },

    { scope: sectionRef },
  );

  return (
    <section className="mt-32 md:mt-48" ref={sectionRef}>
      <p ref={titleRef} className="text-3xl font-bold md:text-4xl lg:text-5xl">
        프로젝트
      </p>

      <div className="item mt-20 grid grid-cols-1 items-center justify-center gap-10 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex transform cursor-pointer flex-col overflow-hidden rounded-2xl border border-base-border shadow shadow-base-shadow transition-transform duration-300 hover:scale-[1.01] dark:bg-base-300"
          >
            <div className="relative h-48 w-full">
              {item.cover && (
                <Image src={item.cover} alt={`${item.cover} Image`} fill />
              )}
            </div>

            <div className="px-8 py-4">
              <p className="self-end text-3xl font-bold">{item.title}</p>
              <p className="self-end text-xl">{item.description}</p>
              <p className="self-end text-xl">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
