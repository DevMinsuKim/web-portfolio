import React, { Fragment, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ReactNativeIcon from "../ui/icons/ReactNativeIcon";
import NextJsIcon from "../ui/icons/NextJsIcon";
import TypeScriptIcon from "../ui/icons/TypeScriptIcon";
import ReactIcon from "../ui/icons/ReactIcon";
import { useScopedI18n } from "@/locales/client";
import Link from "next/link";

const data = [
  {
    logo: <ReactIcon className="h-20 w-20 rounded-xl fill-base-content" />,
    title: "React",
  },
  {
    logo: <TypeScriptIcon className="h-20 w-20 rounded-xl fill-base-content" />,
    title: "TypeScript",
  },
  {
    logo: <ReactIcon className="h-20 w-20 rounded-xl fill-base-content" />,
    title: "React Native",
  },
  {
    logo: <NextJsIcon className="h-20 w-20 rounded-xl fill-base-content" />,
    title: "Next.js",
  },
];

export default function Skill() {
  const t = useScopedI18n("skill");
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
    <section className="mt-44 overflow-hidden sm:mt-96" ref={sectionRef}>
      <p className="text-center text-3xl font-bold md:text-4xl lg:text-5xl">
        {t("title")}
      </p>

      <div className="my-4 flex justify-center">
        <Link
          className="rounded-3xl border border-base-border bg-base-100 px-6 py-4 text-base font-bold shadow shadow-base-shadow hover:bg-base-200 dark:bg-base-300 dark:hover:bg-base-400 md:text-2xl"
          href={process.env.NEXT_PUBLIC_GITHUB_URL ?? ""}
          target="_blank"
          aria-label="viewDetails"
        >
          {t("viewDetails")}
        </Link>
      </div>

      <div className="mt-6 flex flex-col items-center">
        <div className="flex max-w-[50%] flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_50%,_black_50%,transparent_100%)]">
          <div className="flex animate-infinite-scroll">
            {data.map((subItem, subIndex) => (
              <Fragment key={subIndex}>
                <ul className="flex flex-col rounded-2xl [&_img]:max-w-none [&_li]:mx-8">
                  <li>{subItem.logo}</li>
                  <li>
                    <p className="mt-2 text-center">{subItem.title}</p>
                  </li>
                </ul>
              </Fragment>
            ))}

            {data.map((subItem, subIndex) => (
              <Fragment key={`duplicate-${subIndex}`}>
                <ul className="flex flex-col rounded-2xl [&_img]:max-w-none [&_li]:mx-8">
                  <li>{subItem.logo}</li>
                  <li>
                    <p className="mt-2 text-center">{subItem.title}</p>
                  </li>
                </ul>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
