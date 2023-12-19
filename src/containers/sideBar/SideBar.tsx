import { useTranslations } from "next-intl";
import Image from "next/image";
import Menu from "@/components/Menu";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";
import { GoProjectRoadmap } from "react-icons/go";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { PiPhoneCall } from "react-icons/pi";
import { Link } from "@/navigation";

export default function SideBar() {
  const t = useTranslations("sideBar");

  const menuData = [
    {
      href: "/about",
      title: t("about"),
      icon: <IoPersonCircleOutline className="h-8 w-8" />,
    },
    {
      href: "/skills",
      title: t("skills"),
      icon: <FaCode className="h-8 w-8" />,
    },
    {
      href: "/projects",
      title: t("projects"),
      icon: <GoProjectRoadmap className="h-8 w-8" />,
    },
    {
      href: "/career",
      title: t("career"),
      icon: <HiOutlineOfficeBuilding className="h-8 w-8" />,
    },
    {
      href: "/contact",
      title: t("contact"),
      icon: <PiPhoneCall className="h-8 w-8" />,
    },
  ];

  return (
    <aside className="flex items-center max-w-[8rem] h-screen">
      <div className="min-w-full rounded-3xl bg-surface h-[calc(100vh-2rem)] ml-4 p-4">
        <h1 className="flex items-center justify-center flex-col bg-surface rounded-3xl">
          <Link href="/">
            <Image
              className="rounded-3xl bg-primary"
              alt="profile Image"
              src={"/profileImage.png"}
              priority
              width={80}
              height={80}
            />
          </Link>
        </h1>
        <Menu menuData={menuData} />
      </div>
    </aside>
  );
}
