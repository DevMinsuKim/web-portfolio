import { sacramento } from "@/font/Font";
import Image from "next/image";
import Link from "next/link";
import { PiPersonArmsSpreadFill } from "react-icons/pi";
import { FaCode } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { IoIosCall } from "react-icons/io";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function SideBar() {
  const t = useTranslations("sideBar");
  const menu = [
    {
      href: "#about",
      title: t("about"),
      icon: <PiPersonArmsSpreadFill className="h-5 w-5" />,
    },
    {
      href: "#skills",
      title: "Skills",
      icon: <FaCode className="h-5 w-5" />,
    },
    // {
    //   href: "#archiving",
    //   title: "Archiving",
    //   icon: "",
    // },
    {
      href: "#projects",
      title: "Projects",
      icon: <FaLightbulb className="h-4 w-4" />,
    },
    {
      href: "#career",
      title: "Career",
      icon: <HiOutlineOfficeBuilding className="h-5 w-5" />,
    },
    {
      href: "#contact",
      title: "Contact",
      icon: <IoIosCall className="h-5 w-5" />,
    },
  ];

  // const [language, setLanguage] = useState("한국어");

  // const toggleLanguage = () => {
  //   setLanguage((prevLanguage) =>
  //     prevLanguage === "한국어" ? "English" : "한국어",
  //   );
  // };

  return (
    <aside className="fixed my-4 ml-4 flex h-full max-h-[calc(100vh-32px)] min-w-[240px] max-w-[240px] flex-col overflow-y-auto rounded-3xl bg-background1 shadow-2xl">
      <header className="mt-12 flex items-center justify-center">
        <Link href={""}>
          <Image
            className="rounded-full bg-primary"
            alt="profile Image"
            src={"/profileImage.png"}
            priority
            width={100}
            height={100}
          />
          <h1
            className={`${sacramento.className} animate-textGradient bg-gradient-to-r from-primary via-sky to-indigo bg-clip-text text-center text-5xl text-transparent`}
          >
            minsu
          </h1>
        </Link>
      </header>
      <ul className="mt-10 flex-grow">
        {menu.map(({ href, title, icon }) => (
          <Link key={href} href={href}>
            <li
              aria-label={title}
              className="mx-3 flex items-center rounded-md px-3 py-3 duration-200 ease-in-out hover:bg-primary hover:text-white"
            >
              <div className="mr-4">{icon}</div>
              {title}
            </li>
          </Link>
        ))}
      </ul>
      <footer className="">
        {/* <div>
          <button onClick={toggleLanguage}>
            {language === "한국어" ? "Switch to English" : "한국어로 전환"}
          </button>
        </div> */}
        <div>asdlfjsalkfdjsalkfjlk</div>
        <div>sadfhjjksahdfjk</div>
      </footer>
    </aside>
  );
}
