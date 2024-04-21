import { Inter } from "next/font/google";
import "../globals.css";
import Navigation from "@components/Navigation";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DogKaeBi Blog",
  description: "Generated by create next app",
};

// TODO: 임시 파피콘, Meta 수정
export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/next.svg" sizes="any" />
      </head>
      <body className={inter.className + " max-w-4xl mx-auto relative"}>
        <Navigation />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
////////
// 사이드를 남기는 것을 예상해서 max-w-7xl로 했다.
// 모든 페이지에 헤더 nav를 사용해서 layout에서 wrap으로 nav와 children을 포함
////////
