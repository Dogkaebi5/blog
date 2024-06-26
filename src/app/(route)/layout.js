import { Inter } from "next/font/google";
import "../globals.css";
import Navigation from "@components/Navigation";
import Footer from "@components/Footer";
import GoogleAdsense from "@components/GoogleAdsence";
import { GoogleAnalytics } from "@next/third-parties/google";

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
    title: "DogKaeBi | 독깨비",
    description: "독깨비의 광둥어 & 개발 블로그",
    url: "dogkaebi.com",
    site: "DogKaeBi 독깨비",
    images: { url: "https://dogkaebi.com/logo2.png", alt: "dogkaebi" },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className="bg-slate-950">
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
        <meta name="naver-site-verification" content="227e66cf3fceb7e24486ae79f2203448477195f2" />
        <meta name="google-adsense-account" content="ca-pub-4395279661539134" />
        <GoogleAdsense pId="4395279661539134" />
      </head>
      <body className={inter.className + " max-w-4xl mx-auto relative flex flex-col min-h-svh"}>
        <Navigation />
        <main className="flex-1 lg:p-4">{children}</main>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-RM4HNBFXFN" />
    </html>
  );
}
