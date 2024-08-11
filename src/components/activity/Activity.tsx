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
        title: "contentTitle1" as "contentTitle1",
        description: "",
        date: "2023.04 - 2023.08",
      },
      {
        title: "contentTitle2" as "contentTitle2",
        description: "",
        date: "2020.09 - 2021.02",
      },
      {
        title: "contentTitle3" as "contentTitle3",
        description: "",
        date: "2018.03 - 2021.05",
      },
      {
        title: "contentTitle4" as "contentTitle4",
        description: "contentDescription1" as "contentDescription1",
        date: "2015.03 ~ 2018.02",
      },
    ],
  },
  {
    title: "activities" as "activities",
    content: [
      {
        title: "contentTitle5" as "contentTitle5",
        description: "contentDescription2" as "contentDescription2",
        date: "2019.01 - 2020.08",
      },
      {
        title: "contentTitle6" as "contentTitle6",
        description: "contentDescription3" as "contentDescription3",
        date: "2017.07",
      },
      {
        title: "contentTitle7" as "contentTitle7",
        description: "contentDescription3" as "contentDescription3",
        date: "2016.10",
      },
    ],
  },
  {
    title: "certificates" as "certificates",
    content: [
      {
        title: "contentTitle8" as "contentTitle8",
        description: "",
        date: "2024.06",
      },
      {
        title: "contentTitle9" as "contentTitle9",
        description: "",
        date: "2019.12",
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
    const offset = window.innerHeight / 2.5;
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
              start: "top 50%",
              end: "bottom 50%",
              scrub: true,
              onToggle: () => setActiveTab(index),
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
                  <p className="mb-2 text-xl font-bold">{t(content.title)}</p>
                  <p>{content.date}</p>
                  {content.description && content.description !== "" && (
                    <p className="mt-1 text-lg">
                      {t(content.description as keyof typeof activity)}
                    </p>
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
