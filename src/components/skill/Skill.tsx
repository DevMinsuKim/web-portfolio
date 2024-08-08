import React, { Fragment, useRef } from "react";
import YouTubeIcon from "../ui/icons/YouTubeIcon";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const data = [
  {
    logo: <YouTubeIcon className="h-20 w-20 rounded-xl fill-base-content" />,
    title: "YouTube1",
  },
  {
    logo: <YouTubeIcon className="h-20 w-20 rounded-xl fill-base-content" />,
    title: "YouTube2",
  },
  {
    logo: <YouTubeIcon className="h-20 w-20 rounded-xl fill-base-content" />,
    title: "YouTube3",
  },
];

export default function Skill() {
  const sectionRef = useRef<HTMLDivElement>(null);

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
        autoAlpha: 0,
        duration: 0.8,
      });
    },

    { scope: sectionRef },
  );

  return (
    <section className="mt-44 sm:mt-96" ref={sectionRef}>
      <p className="text-center text-3xl font-bold sm:text-4xl lg:text-5xl">
        기술 스택
      </p>

      <div className="mt-6 flex flex-col items-center">
        <div className="flex max-w-[50%] flex-nowrap [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
          {data.map((subItem, subIndex) => (
            <Fragment key={subIndex}>
              <ul className="animate-infinite-scroll flex transform cursor-pointer flex-col rounded-2xl border border-base-border shadow shadow-base-shadow transition-transform duration-300 dark:bg-base-300 [&_img]:max-w-none [&_li]:mx-8">
                <li>{subItem.logo}</li>
                <li>{subItem.title}</li>
              </ul>
              <ul
                aria-hidden="true"
                className="animate-infinite-scroll dark:bg-base-30 [&_img]:max-w-none0 flex transform cursor-pointer flex-col rounded-2xl border border-base-border shadow shadow-base-shadow transition-transform duration-300 [&_li]:mx-8"
              >
                <li>{subItem.logo}</li>
                <li>{subItem.title}</li>
              </ul>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
