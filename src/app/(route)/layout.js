import { Inter } from "next/font/google";
import "../globals.css";
import Navigation from "@components/Navigation";
import Footer from "../components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import GoogleAdsense from "../components/GoogleAdsence";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://dogkaebi.com"),
  title: "DogKaeBi",
  description: "독깨비의 광둥어 & 개발 블로그",
  icons: { icon: "/logo.png" },
  openGraph: {
    title: "DogKaeBi | 독깨비",
    description: "독깨비의 광둥어 & 개발 블로그",
    url: "dogkaebi.com",
    siteName: "DogKaeBi 독깨비",
    type: "website",
    images: [
      {
        url: "https://dogkaebi.com/logo.png",
        width: 600,
        height: 600,
        alt: "dogkaebi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DogKaeBi | 독깨비 광둥어",
    description: "독깨비의 광둥어 & 개발 블로그",
    url: "dogkaebi.com",
    site: "DogKaeBi 독깨비",
    images: { url: "https://dogkaebi.com/logo2.png", alt: "dogkaebi" },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
        <meta name="google-adsense-account" content="ca-pub-4395279661539134" />
        <GoogleAdsense pId="4395279661539134" />
      </head>
      <body className={inter.className}>
        <div className=" max-w-4xl mx-auto relative flex flex-col">
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
      <GoogleAnalytics gaId="G-RM4HNBFXFN" />
    </html>
  );
}
////////
// 사이드를 남기는 것을 예상해서 max-w-7xl -> 4xl로 했다.
// 모든 페이지에 헤더 nav를 사용해서 layout에서 wrap으로 nav와 children을 포함
////////
