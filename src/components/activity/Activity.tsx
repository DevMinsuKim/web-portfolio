import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import DownloadIcon from "../ui/icons/DownloadIcon";
import { useScopedI18n } from "@/locales/client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const activityData = [
  {
    title: "education" as "education",
    content: [
      {
        title: "드림코딩",
        description:
          "정보처리기사 최종 합격을 위해 현재 실기 시험을 준비 중입니다\n정보처리기사 최종 합격을 위해 현재 실기 시험을 준비 중입니다",
        date: "2023.04 ~ 2023.08",
        attachTitle: "수료증",
        attachUrl:
          "https://drive.google.com/file/d/1EMXbavvz2RY_0n09I39Bh1MWViEP5Pnx/view?usp=sharing",
      },
    ],
  },
  {
    title: "activities" as "activities",
    content: [
      {
        title: "대한민국 육군 병장 만기 전역",
        description:
          "정보처리기사 최종 합격을 위해 현재 실기 시험을 준비 중입니다\n정보처리기사 최종 합격을 위해 현재 실기 시험을 준비 중입니다",
        date: "2019.01 ~ 2020.08",
        attachTitle: "수료증",
        attachUrl:
          "https://drive.google.com/file/d/1EMXbavvz2RY_0n09I39Bh1MWViEP5Pnx/view?usp=sharing",
      },
      {
        title: "대한민국 육군 병장 만기 전역",
        description:
          "정보처리기사 최종 합격을 위해 현재 실기 시험을 준비 중입니다\n정보처리기사 최종 합격을 위해 현재 실기 시험을 준비 중입니다",
        date: "2019.01 ~ 2020.08",
        attachTitle: "수료증",
        attachUrl:
          "https://drive.google.com/file/d/1EMXbavvz2RY_0n09I39Bh1MWViEP5Pnx/view?usp=sharing",
      },
      {
        title: "대한민국 육군 병장 만기 전역",
        description:
          "정보처리기사 최종 합격을 위해 현재 실기 시험을 준비 중입니다\n정보처리기사 최종 합격을 위해 현재 실기 시험을 준비 중입니다",
        date: "2019.01 ~ 2020.08",
        attachTitle: "수료증",
        attachUrl:
          "https://drive.google.com/file/d/1EMXbavvz2RY_0n09I39Bh1MWViEP5Pnx/view?usp=sharing",
      },
    ],
  },
  {
    title: "certificates" as "certificates",
    content: [
      {
        title: "정보처리기사 필기 합격",
        description:
          "정보처리기사 최종 합격을 위해 현재 실기 시험을 준비 중입니다\n정보처리기사 최종 합격을 위해 현재 실기 시험을 준비 중입니다",
        date: "2024.06",
        attachTitle: "수료증",
        attachUrl:
          "https://drive.google.com/file/d/1EMXbavvz2RY_0n09I39Bh1MWViEP5Pnx/view?usp=sharing",
      },
    ],
  },
];

export default function Activity() {
  const t = useScopedI18n("activity");
  const [activeTab, setActiveTab] = useState(0);

  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleTabClick = (index: number) => {
    const offset = window.innerHeight / 2;
    const elementPosition =
      itemRefs.current[index]?.getBoundingClientRect().top;
    if (elementPosition !== undefined) {
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useGSAP(
    () => {
      gsap.from(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          end: "top 70%",
          scrub: true,
          markers: false,
        },
        y: 100,
        autoAlpha: 0,
        duration: 0.8,
      });

      itemRefs.current.forEach((ref, index) => {
        if (ref) {
          gsap.from(ref, {
            scrollTrigger: {
              trigger: ref,
              start: "top 60%",
              end: "bottom 50%",
              scrub: true,
              markers: true,
              onEnter: () => setActiveTab(index),
              onEnterBack: () => setActiveTab(index),
            },
          });
        }
      });
    },
    { scope: sectionRef },
  );

  return (
    <section className="mt-44 sm:mt-96" ref={sectionRef}>
      <div className="flex flex-col md:flex-row md:justify-center">
        <div className="sticky top-0 mb-8 flex justify-evenly bg-base-100 pb-3 pt-28 md:static md:top-0 md:mb-0 md:flex-col md:justify-normal md:gap-6 md:pb-0 md:pt-0">
          <div className="sticky top-[40%] flex flex-row md:flex-col">
            {activityData.map((tab, index) => (
              <button
                key={index}
                onClick={() => handleTabClick(index)}
                className={`p-2 md:p-4 ${activeTab === index ? "rounded-full border border-base-border text-primary shadow shadow-base-shadow dark:bg-base-300" : "text-base-content/60 hover:text-base-content"} border border-transparent`}
              >
                <span className="z-10 font-bold md:text-2xl">
                  {t(tab.title)}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center gap-y-28 md:ml-5">
          {activityData.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
            >
              {item.content.map((content, contentIndex) => (
                <div
                  key={contentIndex}
                  className="mt-1 border-b border-base-content/30 pb-2"
                >
                  <p className="mb-6 text-xl font-bold">{content.title}</p>
                  <p className="my-2">{content.date}</p>
                  <p className="mb-1 text-lg">{`☉ ${content.description}`}</p>
                  {content.attachTitle && (
                    <Link
                      href={content.attachUrl}
                      target="_blank"
                      className="btn btn-sm mb-1 mt-1 min-h-0 rounded-full border border-base-border bg-base-100 shadow shadow-base-shadow dark:bg-base-300 hover:dark:bg-base-content/20"
                    >
                      <p>{content.attachTitle}</p>
                      <DownloadIcon className="h-5 w-5" />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
