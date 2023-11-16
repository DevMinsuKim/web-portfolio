import { sacramento } from "@/font/Font";
import Image from "next/image";
import Link from "next/link";
import { PiPersonArmsSpreadFill } from "react-icons/pi";
import { FaCode } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { IoIosCall } from "react-icons/io";

export default function SideBar() {
  const menu = [
    {
      href: "#about",
      title: "About",
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
  return (
    <aside className="fixed left-0 top-0 h-screen min-w-[240px] max-w-[240px] overflow-y-auto rounded-r-3xl bg-gradient-to-r from-background to-background1">
      <header className="mt-12 flex min-h-[90px] items-center justify-center border-b border-gray pb-6">
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
            className={`${sacramento.className} animate-textGradient to-indigo via-sky bg-gradient-to-r from-primary bg-clip-text text-center text-5xl text-transparent`}
          >
            minsu
          </h1>
        </Link>
      </header>
      <ul>
        {menu.map(({ href, title, icon }) => (
          <Link key={href} href={href}>
            <li
              aria-label={title}
              className="m-2 flex rounded-md p-2 duration-200 ease-in-out hover:bg-primary hover:text-white"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-md">
                {icon}
              </div>
              <p className="pl-4">{title}</p>
            </li>
          </Link>
        ))}
      </ul>
    </aside>
  );
}
