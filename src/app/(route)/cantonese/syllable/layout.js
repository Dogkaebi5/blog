export const metadata = {
  title: "DogKaeBi | Cantonese 발음",
  description: "광둥어의 모든 발음",
  icons: { icon: "/logo.png" },
  openGraph: {
    title: "DogKaeBi | Cantonese 발음",
    description: "광둥어의 모든 발음",
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
    title: "DogKaeBi | Cantonese 발음",
    description: "광둥어의 모든 발음",
    url: "dogkaebi.com",
    site: "DogKaeBi 독깨비",
    images: { url: "https://dogkaebi.com/logo2.png", alt: "dogkaebi" },
  },
};

export default function RootLayout({ children }) {
  return children;
}
