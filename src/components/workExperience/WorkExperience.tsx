import React, { useRef } from "react";
import WhoflexLogo from "../ui/icons/WhoflexLogo";
import KaiLogo from "../ui/icons/KaiLogo";
import DadolLogo from "../ui/icons/DadolLogo";
import { useScopedI18n } from "@/locales/client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { table } from "console";

const data = [
  {
    logo: <WhoflexLogo className="rounded-xl fill-base-content" />,
    companyName: "companyName2" as "companyName2",
    position: "position2" as "position2",
    date: "date" as "date",
  },
  {
    logo: <KaiLogo className="h-20 w-20 rounded-xl fill-base-content" />,
    companyName: "companyName1" as "companyName1",
    position: "position1" as "position1",
    date: "2021.08 ~ 2024.1",
  },
  {
    logo: <DadolLogo className="h-20 w-20 rounded-xl fill-base-content" />,
    companyName: "companyName" as "companyName",
    position: "position" as "position",
    date: "2021.04 ~ 2021.07",
  },
];

export default function WorkExperience() {
  const t = useScopedI18n("workExperience");

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

      gsap.from(".item", {
        scrollTrigger: {
          trigger: ".item",
          start: "top 90%",
          end: "5% 70%",
          scrub: true,
        },
        autoAlpha: 0,
        duration: 0.8,
      });
    },

    { scope: sectionRef },
  );

  return (
    <section className="mt-44 md:mt-96" ref={sectionRef}>
      <p ref={titleRef} className="text-3xl font-bold md:text-4xl lg:text-5xl">
        {t("title")}
      </p>

      <div className="mt-14 grid grid-cols-1 items-center justify-center gap-3 md:mt-20 md:grid-cols-3 lg:gap-10">
        {data.map((item, index) => (
          <Link
            aria-label={process.env.NEXT_PUBLIC_LINKEDIN_URL ?? ""}
            href={process.env.NEXT_PUBLIC_LINKEDIN_URL ?? ""}
            target="_blank"
            key={index}
            className="item relative flex transform cursor-pointer flex-col rounded-2xl border border-base-border px-8 py-4 shadow shadow-base-shadow transition-transform duration-300 hover:scale-[1.01] dark:bg-base-300"
          >
            <div className="flex min-h-20 min-w-20 items-center">
              {item.logo}
            </div>
            <div className="absolute right-8 flex items-center gap-1 rounded-full border bg-base-100 py-2 pl-3 pr-2 shadow dark:border-none">
              <p className="text-xs sm:text-sm">{t("viewDetails")}</p>
            </div>

            <p className="mb-2 self-end text-2xl font-bold">
              {t(item.companyName)}
            </p>
            <p className="self-end text-base">{t(item.position)}</p>
            <p className="self-end text-base">{t(item.date as "date")}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
