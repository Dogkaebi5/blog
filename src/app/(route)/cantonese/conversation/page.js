import CardList from "@/app/components/CardList";
import PageNavgation from "@/app/components/Pagination";
import { setCardList } from "@/app/controller/setCardList";
import Heros from "@components/Heros";
import SubNav from "@components/SubNav";

export const metadata = {
  title: "DogKaeBi | 광둥어 이야기",
  description: "중국 광둥 생활 20년인 독깨비의 광둥어 이야기",
  icons: { icon: "/logo.png" },
  openGraph: {
    title: "DogKaeBi | 광둥어 이야기",
    description: "독깨비의 광둥어 이야기",
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
    description: "중국 광둥 생활 20년인 독깨비의 광둥어 이야기",
    url: "dogkaebi.com",
    site: "DogKaeBi 독깨비",
    images: { url: "https://dogkaebi.com/logo2.png", alt: "dogkaebi" },
  },
};

export default function Conversation(props) {
  const path = "tc";
  const page = props.searchParams.page ?? 1;
  const maxCardInPage = 6;
  const data = setCardList("cantonese", page, maxCardInPage);
  const maxPages = Math.ceil(data.allLength / maxCardInPage);

  return (
    <>
      <Heros path={path} />
      <SubNav path={path} slug={"conversation"} />
      <CardList path={"blog"} data={data.list} />
      <PageNavgation page={page} maxPages={maxPages} />
    </>
  );
}
