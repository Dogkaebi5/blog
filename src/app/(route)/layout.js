import { Inter } from "next/font/google";
import "../globals.css";
import Navigation from "@components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DogKaeBi Blog",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/next.svg" sizes="any" />
        {/* 임시 파피콘 */}
      </head>
      <body className={inter.className + " max-w-4xl mx-auto relative overflow-hidden lg:overflow-visible"}>
        <Navigation />
        <div>{children}</div>
        <footer>
          <hr />
          <p className="py-2 text-center text-sm text-gray-400">© DogKaeBi</p>
        </footer>
      </body>
    </html>
  );
}
////////
// 사이드를 남기는 것을 예상해서 max-w-7xl로 했다.
// 모든 페이지에 헤더 nav를 사용해서 layout에서 wrap으로 nav와 children을 포함
////////