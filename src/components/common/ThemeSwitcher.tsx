"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import SunIcon from "../ui/icons/SunIcon";
import DarkIcon from "../ui/icons/DarkIcon";
import SystemIcon from "../ui/icons/SystemIcon";
import { useScopedI18n } from "@/locales/client";

type Theme = "light" | "dark" | "system";

const menu: { id: Theme; icon: (color: string) => JSX.Element }[] = [
  {
    id: "light",
    icon: (color: string) => <SunIcon className={`h-6 w-6 ${color}`} />,
  },
  {
    id: "dark",
    icon: (color: string) => <DarkIcon className={`h-6 w-6 ${color}`} />,
  },
  {
    id: "system",
    icon: (color: string) => <SystemIcon className={`h-6 w-6 ${color}`} />,
  },
];

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const scopedT = useScopedI18n("ThmeSwitcher");

  const getColor = (
    resolvedTheme: string | undefined,
    theme: string | undefined,
    id: string,
    mounted: boolean
  ) => {
    if (!mounted) {
      return "opacity-60";
    }

    if (theme === id) {
      return "text-primary";
    }

    if (resolvedTheme === id) {
      return "";
    }

    return "opacity-60";
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex">
      {menu.map(({ id, icon }) => (
        <div
          className="flex"
          key={id}
          data-tooltip-id="tooltip"
          data-tooltip-content={scopedT(id)}
        >
          <button
            className="btn btn-ghost px-2"
            aria-label={scopedT(id)}
            onClick={() => {
              setTheme(id);
            }}
          >
            {icon(getColor("resolvedTheme", theme, id, mounted))}
          </button>
        </div>
      ))}
      <Tooltip id="tooltip" className="custom-tooltip" />
    </div>
  );
}
