import React, { useRef } from "react";
import YouTubeIcon from "../ui/icons/YouTubeIcon";
import useScrollDirection from "@/hook/useScrollDirection";
import { motion, useInView } from "framer-motion";
import { viewRightAnimation } from "@/styles/viewRightAnimation";
import { viewUpAnimation } from "@/styles/viewUpAnimation";

const data = [
  {
    category: "프론트엔드",
    categoryItem: [
      {
        logo: (
          <YouTubeIcon className="h-20 w-20 rounded-xl fill-base-content" />
        ),
        title: "YouTube",
      },
      {
        logo: (
          <YouTubeIcon className="h-20 w-20 rounded-xl fill-base-content" />
        ),
        title: "YouTube",
      },
      {
        logo: (
          <YouTubeIcon className="h-20 w-20 rounded-xl fill-base-content" />
        ),
        title: "YouTube",
      },
    ],
  },
  {
    category: "백엔드",
    categoryItem: [
      {
        logo: (
          <YouTubeIcon className="h-20 w-20 rounded-xl fill-base-content" />
        ),
        title: "React",
      },
      {
        logo: (
          <YouTubeIcon className="h-20 w-20 rounded-xl fill-base-content" />
        ),
        title: "React",
      },
      {
        logo: (
          <YouTubeIcon className="h-20 w-20 rounded-xl fill-base-content" />
        ),
        title: "React",
      },
    ],
  },
];

export default function Skill() {
  const scrollDirection = useScrollDirection();

  // const scopedT = useScopedI18n("workExperience");

  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef, {
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
        style={viewRightAnimation(sectionInView)}
      >
        기술 스택
      </p>

      <div
        className="mt-14 grid grid-cols-1 items-center justify-center gap-3 sm:mt-20 sm:grid-cols-2 lg:gap-10"
        style={viewUpAnimation(divInView)}
      >
        {data.map((item, index) => (
          <div key={index}>
            <div>{item.category}</div>
            {item.categoryItem.map((subItem, subIndex) => (
              <motion.div
                key={subIndex}
                className="flex cursor-pointer flex-col rounded-2xl border border-base-border shadow shadow-base-shadow dark:bg-base-300"
                whileHover={{ scale: 1.02 }}
              >
                <div>{subItem.logo}</div>
                <div>{subItem.title}</div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
