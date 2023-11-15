import { sacramento } from "@/font/Font";
import Link from "next/link";
import { BsPersonFillExclamation } from "react-icons/bs";

export default function SideBar() {
  const menu = [
    {
      href: "#about",
      title: "About",
      icon: <BsPersonFillExclamation className="h-6 w-6" />,
    },
    {
      href: "#skills",
      title: "Skills",
      icon: "",
    },
    {
      href: "#archiving",
      title: "Archiving",
      icon: "",
    },
    {
      href: "#projects",
      title: "Projects",
      icon: "",
    },
    {
      href: "#career",
      title: "Career",
      icon: "",
    },
    {
      href: "#contact",
      title: "Contact",
      icon: "",
    },
  ];
  return (
    <aside className="fixed left-0 top-0 h-screen min-w-[240px] max-w-[240px] overflow-y-auto rounded-r-3xl bg-gradient-to-r from-background to-background1">
      <header className="border-gray flex min-h-[90px] items-center justify-center border-b">
        <h1 className={`${sacramento.className} text-5xl text-primary`}>
          <Link href={""}>Minsu</Link>
        </h1>
      </header>
      <ul>
        {menu.map(({ href, title, icon }) => (
          <li key={href} aria-label={title} className="m-2 flex p-2">
            {icon}
            <Link href={href} className="pl-2">
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
