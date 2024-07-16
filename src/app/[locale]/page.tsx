import { getI18n, getScopedI18n } from "@/locales/server";
import Link from "next/link";

export default function Home() {
  // const t = await getI18n();
  // const scopedT = await getScopedI18n("hello");

  return (
    <main className="h-[3000px] px-6">
      {/* <div>
        <p>{t("hello")}</p>


        <p>{t("hello.world")}</p>
        <p>{scopedT("world")}</p>

        <p>{t("welcome", { name: "John" })}</p>
        <p>{t("welcome", { name: <strong>John</strong> })}</p>
      </div> */}

      <p className="font-thin">폰트 테스트</p>
      <p className="font-extralight">폰트 테스트</p>
      <p className="font-light">폰트 테스트</p>
      <p className="font-medium">폰트 테스트</p>
      <p className="font-semibold">폰트 테스트</p>
      <p className="font-bold">폰트 테스트</p>
      <p className="font-extrabold">
        폰트 테스트폰트 테스트폰트 테스트폰트 테스트폰트 테스트폰트 테스트폰트
        테스트폰트 테스트폰트 테스트폰트 테스트폰트 테스트
      </p>
      <p className="font-black">폰트 테스트</p>
      <p>폰트 테스트</p>

      <Link href={"/test"}>test페이지로 이동</Link>
    </main>
  );
}
