import React, { useRef, useState } from "react";
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
      {
        title: "정보처리기사 필기 합격",
        description:
          "정보처리기사 최종 합격을 위해 현재 실기 시험을 준비 중입니다\n정보처리기사 최종 합격을 위해 현재 실기 시험을 준비 중입니다",
        date: "2024.06",
        attachTitle: "수료증",
        attachUrl:
          "https://drive.google.com/file/d/1EMXbavvz2RY_0n09I39Bh1MWViEP5Pnx/view?usp=sharing",
      },
      {
        title: "정보처리기사 필기 합격",
        description:
          "정보처리기사 최종 합격을 위해 현재 실기 시험을 준비 중입니다\n정보처리기사 최종 합격을 위해 현재 실기 시험을 준비 중입니다",
        date: "2024.06",
        attachTitle: "수료증",
        attachUrl:
          "https://drive.google.com/file/d/1EMXbavvz2RY_0n09I39Bh1MWViEP5Pnx/view?usp=sharing",
      },
      {
        title: "정보처리기사 필기 합격",
        description:
          "정보처리기사 최종 합격을 위해 현재 실기 시험을 준비 중입니다\n정보처리기사 최종 합격을 위해 현재 실기 시험을 준비 중입니다",
        date: "2024.06",
        attachTitle: "수료증",
        attachUrl:
          "https://drive.google.com/file/d/1EMXbavvz2RY_0n09I39Bh1MWViEP5Pnx/view?usp=sharing",
      },
      {
        title: "정보처리기사 필기 합격",
        description:
          "정보처리기사 최종 합격을 위해 현재 실기 시험을 준비 중입니다\n정보처리기사 최종 합격을 위해 현재 실기 시험을 준비 중입니다",
        date: "2024.06",
        attachTitle: "",
        attachUrl:
          "https://drive.google.com/file/d/1EMXbavvz2RY_0n09I39Bh1MWViEP5Pnx/view?usp=sharing",
      },
      {
        title: "정보처리기사 필기 합격",
        description:
          "정보처리기사 최종 합격을 위해 현재 실기 시험을 준비 중입니다 정보처리기사 최종 합격을 위해 현재 실기 시험을 준비 중입니다\n정보처리기사 최종 합격을 위해 현재 실기 시험을 준비 중입니다",
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

  const handleTabClick = (index: number) => {
    setActiveTab(index);

    // console.log("test", contentRefs.current[index]);

    // gsap.fromTo(
    //   ".content",
    //   { opacity: 0, y: 20 },
    //   { opacity: 1, y: 0, duration: 0.5, stagger: 1, overwrite: "auto" },
    // );
  };

  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      gsap.from(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          end: "5% 70%",
          scrub: true,
          markers: false,
        },
        y: 100,
        autoAlpha: 0,
        duration: 0.8,
      });

      contentRef.current.forEach((ref, index) => {
        if (ref) {
          gsap.from(ref, {
            scrollTrigger: {
              trigger: ref,
              start: "top bottom",
              end: "0% 10%",
              scrub: true,
              markers: true,
              // pin: true,
              pinSpacing: false,
              onEnter: () => handleTabClick(index),
              onEnterBack: () => handleTabClick(index),
              // onLeave: () => gsap.to(ref, { autoAlpha: 0 }),
              // onLeaveBack: () => gsap.to(ref, { autoAlpha: 0 }),
            },
            // y: 100,
            x: "100%",
            // rotationX: 90,
            autoAlpha: 0,
          });
        }
      });
    },

    { scope: sectionRef },
  );

  return (
    <section className="mx-auto px-4 md:max-w-[600px]" ref={sectionRef}>
      <div className="flex flex-col md:flex-row">
        <div className="mb-8 flex justify-evenly md:mb-0 md:flex-col md:justify-normal md:gap-6">
          <div className="sticky top-[40%] flex flex-col">
            {activityData.map((tab, index) => (
              <button
                key={index}
                onClick={() => handleTabClick(index)}
                className={`relative p-3 text-xl font-bold md:p-4 md:text-2xl ${
                  activeTab === index
                    ? ""
                    : "text-base-content/60 hover:text-base-content"
                }`}
              >
                {activeTab === index && (
                  <span className="absolute inset-0 rounded-full border border-base-border text-primary shadow shadow-base-shadow dark:bg-base-300" />
                )}
                <span className="relative z-10">{t(tab.title)}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center md:ml-5">
          {activityData.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                contentRef.current[index] = el;
              }}
              // className="h-screen"
            >
              {item.content.map((content, contentIndex) => (
                <div
                  key={contentIndex}
                  className="content mb-4 border-b border-base-content/30 pb-2"
                  ref={(el) => {
                    // contentRefs.current[contentIndex] = el;
                  }}
                >
                  <p className="mb-6 text-xl font-bold">{content.title}</p>

                  <p className="my-2">{content.date}</p>

                  {content.description
                    .split("\n")
                    .map((descriptionItem, descriptionIndex) => (
                      <div key={descriptionIndex}>
                        <p className="mb-1 text-lg">{`☉ ${descriptionItem}`}</p>
                      </div>
                    ))}

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
