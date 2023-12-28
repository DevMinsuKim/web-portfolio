"use client";

import { Link, usePathname } from "@/navigation";
import { motion } from "framer-motion";
import { useState } from "react";

type MenuItem = {
  href: string;
  title: string;
  icon: JSX.Element;
};

type MenuProps = {
  menuData: MenuItem[];
};

export default function Menu({ menuData }: MenuProps) {
  const [hoveredItem, setHoveredItem] = useState("");
  const currentPath = usePathname();

  console.log(currentPath);

  return (
    <nav>
      <ul className="mt-8">
        {menuData.map(({ href, title, icon }) => (
          <Link key={href} href={href}>
            <li
              aria-label={title}
              className="flex flex-col items-center hover:bg-background mx-2 py-2 mt-4 rounded-2xl"
              onMouseEnter={() => setHoveredItem(title)}
              onMouseLeave={() => setHoveredItem("")}
            >
              <div
                className={`${
                  currentPath === href ? "bg-primary p-2 rounded-xl" : ""
                }`}
              >
                <motion.div
                  animate={
                    hoveredItem === title
                      ? {
                          rotate: [0, 5, -5, 5, -5, 0],
                          transition: { duration: 0.5 },
                        }
                      : {}
                  }
                  // className={`${hoveredItem === title && "text-primary"}`}
                >
                  {icon}
                </motion.div>
              </div>
              <p className="mt-1 text-sm">{title}</p>
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
