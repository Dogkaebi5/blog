import Heros from "@components/Heros";
import SubNav from "@components/SubNav";
import CardList from "@/app/components/CardList";
import PageNavgation from "@/app/components/Pagination";
import { setCardList } from "@controller/setCardList";

export const metadata = {
  title: "DogKaeBi | Blog",
  description: "독깨비의 광둥어, 코딩, 일상 일기장",
  icons: { icon: "/logo.png" },
  openGraph: {
    title: "DogKaeBi | Blog",
    description: "독깨비의 광둥어, 코딩, 일상 일기장",
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
    title: "DogKaeBi | Blog",
    description: "독깨비의 광둥어, 코딩, 일상 일기장",
    url: "dogkaebi.com",
    site: "DogKaeBi 독깨비",
    images: { url: "https://dogkaebi.com/logo2.png", alt: "dogkaebi" },
  },
};

export default async function Blog(props) {
  const tag = props.searchParams.tag;
  const page = props.searchParams.page ?? 1;
  // 블로그는 카드 최대6장
  const maxCardInPage = 6;
  // 상위 페이지에서 데이터 받아 list, nav에 전달
  const blogData = setCardList(tag, page, maxCardInPage);
  // 페이지 수량
  const maxPages = Math.ceil(blogData.allLength / maxCardInPage);

  return (
    <>
      <Heros path="blog" />
      <SubNav path="blog" slug={tag ?? ""} />
      <CardList path="blog" data={blogData.list} />
      <PageNavgation tag={tag} page={page} maxPages={maxPages} />
    </>
  );
}
