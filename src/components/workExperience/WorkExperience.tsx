import React, { useRef } from "react";
import KaiLogo from "../ui/icons/KaiLogo";
import DadolLogo from "../ui/icons/DadolLogo";
import { motion, useInView } from "framer-motion";
import ArrowRightIcon from "../ui/icons/ArrowRightIcon";
import { useScopedI18n } from "@/locales/client";
import useScrollDirection from "@/hook/useScrollDirection";
import { viewUpAnimation } from "@/styles/viewUpAnimation";
import { viewRightAnimation } from "@/styles/viewRightAnimation";

const data = [
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
  const scrollDirection = useScrollDirection();

  const scopedT = useScopedI18n("workExperience");

  const sectionRef = useRef(null);
  const setctionInView = useInView(sectionRef, {
    once: scrollDirection === "down",
  });

  const divInView = useInView(sectionRef, {
    amount: 0.3,
    once: scrollDirection === "down",
  });

  return (
    <section className="mt-44 sm:mt-96" ref={sectionRef}>
      <p
        className="text-3xl font-bold sm:text-4xl lg:text-5xl"
        style={viewRightAnimation(setctionInView)}
      >
        {scopedT("title")}
      </p>

      <div
        className="mt-14 grid grid-cols-1 items-center justify-center gap-3 sm:mt-20 sm:grid-cols-2 lg:gap-10"
        style={viewUpAnimation(divInView)}
      >
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="border-base-border shadow-base-shadow relative flex cursor-pointer flex-col rounded-2xl border px-8 py-4 shadow dark:bg-base-300"
            whileHover={{ scale: 1.02 }}
          >
            <div>{item.logo}</div>
            <div className="absolute right-8 flex items-center gap-1 rounded-full border bg-base-100 py-2 pl-3 pr-2 shadow dark:border-none">
              <p className="text-xs sm:text-sm">{scopedT("viewDetails")}</p>
              <ArrowRightIcon className="h-3 w-3 sm:h-4 sm:w-4" />
            </div>

            <p className="mb-2 self-end text-2xl font-bold lg:text-3xl">
              {scopedT(item.companyName)}
            </p>
            <p className="self-end text-base sm:text-lg lg:text-xl">
              {scopedT(item.position)}
            </p>
            <p className="self-end text-base sm:text-lg lg:text-xl">
              {item.date}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
