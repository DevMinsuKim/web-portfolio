import { sacramento } from "@/font/font";
import Link from "next/link";

export default function SideBar() {
  const menu = [
    {
      href: "#about",
      title: "About",
    },
    {
      href: "#skills",
      title: "Skills",
    },
    {
      href: "#archiving",
      title: "Archiving",
    },
    {
      href: "#projects",
      title: "Projects",
    },
    {
      href: "#career",
      title: "Career",
    },
    {
      href: "#contact",
      title: "Contact",
    },
  ];
  return (
    <aside className="to-background1 fixed left-0 top-0 h-screen min-w-[240px] max-w-[240px] overflow-y-auto rounded-r-3xl bg-gradient-to-r from-background">
      <header className="flex min-h-[90px] items-center justify-center">
        <h1 className={`${sacramento.className} text-5xl text-primary`}>
          <Link href={""}>Minsu</Link>
        </h1>
      </header>
      <ul>
        {menu.map(({ href, title }) => (
          <li key={href} aria-label={title}>
            <Link href={href}>{title}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
