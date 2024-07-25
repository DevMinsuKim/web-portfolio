import React, { useRef, useState } from "react";
import KaiLogo from "../ui/icons/KaiLogo";
import LogoIcon from "../ui/icons/LogoIcon";
import DadolLogo from "../ui/icons/DadolLogo";
import { motion, useInView } from "framer-motion";
import ArrowRightIcon from "../ui/icons/ArrowRightIcon";

const data = [
  {
    logo: <KaiLogo className="h-20 w-20 rounded-xl fill-base-content" />,
    title: "카이",
    date: "2021.08 ~ 2024.1",
    position: "개발팀 - 사원",
  },
  {
    logo: <DadolLogo className="h-20 w-20 rounded-xl fill-base-content" />,
    title: "다돌",
    date: "2021.04 ~ 2021.07",
    position: "개발팀 - 인턴",
  },
];

export default function WorkExperience() {
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
        경력
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
            className="relative flex cursor-pointer flex-col rounded-2xl border px-8 py-4 shadow dark:border-none dark:bg-base-300"
            whileHover={{ scale: 1.02 }}
            // onClick={() => document.getElementById('my_modal_5').showModal()}
          >
            <div>{item.logo}</div>
            <div className="absolute right-8 flex items-center gap-2 rounded-full border bg-base-100 px-3 py-2 shadow dark:border-none">
              <p>자세히 보기</p>
              <ArrowRightIcon className="h-4 w-4" />
            </div>

            <p className="self-end text-3xl font-bold">{item.title}</p>
            <p className="self-end text-xl">{item.date}</p>
            <p className="self-end text-xl">{item.position}</p>
          </motion.div>
        ))}
      </div>

      {/* <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
    
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog> */}
    </section>
  );
}
