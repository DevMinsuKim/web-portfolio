import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import I18nProvider from "@/providers/I18nProvider";
import NavBar from "@/components/common/NavBar";
import AnimatedCursor from "@/components/common/AnimatedCursor";
import Initializer from "@/components/common/Initializer";
import { ModalProvider } from "@/providers/ModalProvider";
import { ReCaptchaProivder } from "@/providers/ReCaptchaProivder";
import SmoothScroll from "@/components/common/SmoothScroll";
import { getScopedI18n } from "@/locales/server";

const pretendard = localFont({
  src: "../../fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

// export const metadata: Metadata = {
//   title: "김민수 | 포트폴리오",
//   description: "프론트엔드 개발자 김민수 포트폴리오 사이트",
// };

export async function generateMetadata() {
  const t = await getScopedI18n("metadata");

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function RootLayout({
  params,
  children,
}: Readonly<{
  params: { locale: string };
  children: React.ReactNode;
}>) {
  return (
    <html lang={params.locale} suppressHydrationWarning>
      <body
        className={`${pretendard.variable} ${params.locale === "ko" && "break-keep"} min-w-[20rem] whitespace-pre-wrap font-pretendard`}
      >
        <ThemeProvider>
          <I18nProvider params={params}>
            <ReCaptchaProivder>
              <ModalProvider>
                {/* <SmoothScroll> */}
                <Initializer />
                <NavBar />

                {children}
                <AnimatedCursor />
                {/* </SmoothScroll> */}
              </ModalProvider>
            </ReCaptchaProivder>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
