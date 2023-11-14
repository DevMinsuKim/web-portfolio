import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { notoSansKr } from "@/font/font";

// Favicons 추가, openGraph url 및 images의 url 수정 필요함
export const metadata: Metadata = {
  title: {
    default: "민수의 웹 포트폴리오",
    template: "%s |민수의 웹 포트폴리오 ",
  },
  applicationName: "민수의 웹 포트폴리오",
  description:
    "최신 웹기술과 반응형 디자인을 활용하여 사용자 중심의 웹 경험을 제공하는 김민수의 웹 개발 포트폴리오입니다. 웹 접근성과 SEO를 최적화하여 만든 프로젝트들을 확인해보세요.",
  keywords: [
    "김민수",
    "웹 개발",
    "웹 포트폴리오",
    "최신 웹기술",
    "반응형 웹 디자인",
    "웹 접근성",
    "SEO",
    "프론트엔드",
    "사용자 경험",
    "Next.js",
    "React",
  ],
  authors: [{ name: "김민수" }],
  // openGraph: {
  //   type: "website",
  //   url: "",
  //   title: "민수의 웹 포트폴리오",
  //   description:
  //     "최신 웹기술을 활용한 반응형 디자인과 SEO, 웹 접근성을 고려한 프로젝트로 구성된 김민수의 전문 웹 개발 포트폴리오입니다.",
  //   siteName: "민수의 웹 포트폴리오",
  //   images: [
  //     {
  //       url: "",
  //     },
  //   ],
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "민수의 웹 포트폴리오",
  //   description:
  //     "최신 웹기술을 활용한 반응형 디자인과 SEO, 웹 접근성을 고려한 프로젝트로 구성된 김민수의 전문 웹 개발 포트폴리오입니다.",
  //   images: [""],
  //   site: "",
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={notoSansKr.className} suppressHydrationWarning>
      <body className="bg-background">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
