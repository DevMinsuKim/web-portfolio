import { getI18n, getScopedI18n } from "@/locales/server";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const t = await getI18n();
  const scopedT = await getScopedI18n("hello");
  return (
    <main className="">
      <p>test</p>

      <div>
        <p>{t("hello")}</p>

        {/* Both are equivalent: */}
        <p>{t("hello.world")}</p>
        <p>{scopedT("world")}</p>

        <p>{t("welcome", { name: "John" })}</p>
        <p>{t("welcome", { name: <strong>John</strong> })}</p>
      </div>

      <Link href={"/test"}>test페이지로 이동</Link>
    </main>
  );
}
