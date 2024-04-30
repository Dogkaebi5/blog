import { Inter } from "next/font/google";
import "../globals.css";
import Navigation from "@components/Navigation";
import Footer from "../components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DogKaeBi",
  description: "독깨비의 광둥어 & 개발 블로그",
};

// TODO: 임시 파피콘, Meta 수정
export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <meta name="google-adsense-account" content="ca-pub-4395279661539134" />
        <link rel="icon" href="/logo.png" sizes="any" />
      </head>
      <body className={inter.className + " max-w-4xl mx-auto relative"}>
        <div className="min-h-screen flex flex-col justify-between">
          <div>
            <Navigation />
            <div>{children}</div>
          </div>
          <Footer />
        </div>
      </body>
      <GoogleAnalytics gaId="G-RM4HNBFXFN" />
    </html>
  );
}
////////
// 사이드를 남기는 것을 예상해서 max-w-7xl로 했다.
// 모든 페이지에 헤더 nav를 사용해서 layout에서 wrap으로 nav와 children을 포함
////////
