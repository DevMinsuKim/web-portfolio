import useScrollDirection from "@/hook/useScrollDirection";
import { viewRightAnimation } from "@/styles/viewRightAnimation";
import { viewUpAnimation } from "@/styles/viewUpAnimation";
import { useInView } from "framer-motion";
import React, { useRef } from "react";

export default function Activity() {
  const scrollDirection = useScrollDirection();

  // const scopedT = useScopedI18n("workExperience");

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
        활동 모음
      </p>

      <div>test</div>
      {/* <div
      className="mt-14 grid grid-cols-1 items-center justify-center gap-3 sm:mt-20 sm:grid-cols-2 lg:gap-10"
      style={viewUpAnimation(divInView)}
    >
      {data.map((item, index) => (
        <div key={index}>
          <div>{item.category}</div>
          {item.categoryItem.map((subItem, subIndex) => (
            <motion.div
              key={subIndex}
              className="border-base-border shadow-base-shadow flex cursor-pointer flex-col rounded-2xl border shadow dark:bg-base-300"
              whileHover={{ scale: 1.02 }}
            >
              <div>{subItem.logo}</div>
              <div>{subItem.title}</div>
            </motion.div>
          ))}
        </div>
      ))}
    </div> */}
    </section>
  );
}
