import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { useScopedI18n } from "@/locales/client";

const data = [
  {
    cover: "/images/web_portfolio_cover.jpg",
    title: "webPortfolio" as "webPortfolio",
    date: "webDate" as "webDate",
    url: process.env.NEXT_PUBLIC_WEB_PORTFOLIO_URL,
  },
  {
    cover: "/images/clover_pick_cover.jpg",
    title: "cloverPick" as "cloverPick",
    date: "cloverDate" as "cloverDate",
    url: process.env.NEXT_PUBLIC_CLOVER_PICK_URL,
  },
  // {
  //   cover: "",
  //   title: "퍼즐",
  //   description: "test123",
  //   date: "2021.04 ~ 2021.07",
  //   url: "",
  // },
  // {
  //   cover: "",
  //   title: "카드북",
  //   description: "test123",
  //   date: "2021.04 ~ 2021.07",
  //   url: "",
  // },
  // {
  //   cover: "/images/test.jpg",
  //   title: "Wooden Wars",
  //   date: "2021.04 ~ 2021.07",
  //   url: process.env.NEXT_PUBLIC_WOODEN_WARS_URL,
  // },
];

export default function Project() {
  const t = useScopedI18n("project");
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
        {t("title")}
      </p>

      <div className="item mt-20 grid grid-cols-1 items-center justify-center gap-10 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item, index) => (
          <Link
            aria-label={item.url ?? ""}
            href={item.url ?? ""}
            target="_blank"
            key={index}
            className="flex transform cursor-pointer flex-col overflow-hidden rounded-2xl border border-base-border shadow shadow-base-shadow transition-transform duration-300 hover:scale-[1.01] dark:bg-base-300"
          >
            <div className="relative h-48 w-full">
              {item.cover && (
                <Image
                  src={item.cover}
                  alt={`${item.cover} Image`}
                  fill
                  style={{ objectFit: "cover" }}
                />
              )}
            </div>

            <div className="px-8 py-4">
              <p className="mb-4 self-end text-xl font-bold">{t(item.title)}</p>
              {/* <p className="self-end text-xl">{item.description}</p> */}
              <p className="self-end text-base">{t(item.date)}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
