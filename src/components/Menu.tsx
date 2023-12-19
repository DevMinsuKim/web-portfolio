"use client";

import { Link, usePathname } from "@/navigation";

type MenuItem = {
  href: string;
  title: string;
  icon: JSX.Element;
};

type MenuProps = {
  menuData: MenuItem[];
};

export default function Menu({ menuData }: MenuProps) {
  const currentPath = usePathname();

  console.log(currentPath);

  return (
    <nav>
      <ul>
        {menuData.map(({ href, title, icon }) => (
          <Link key={href} href={href}>
            <li
              aria-label={title}
              className="flex flex-col items-center mt-8 hover:text-primary"
            >
              <div
                className={`${
                  currentPath === href ? "bg-primary p-2 rounded-xl" : ""
                }`}
              >
                {icon}
              </div>
              <p className="mt-1 text-sm">{title}</p>
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
