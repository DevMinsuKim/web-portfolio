import SideBar from "@/components/sideBar/SideBar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex">
      <SideBar />
      <div className="ml-[240px]"></div>
    </main>
  );
}
