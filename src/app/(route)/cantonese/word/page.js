import Heros from "@components/Heros";
import SubNav from "@components/SubNav";
import PageNavgation from "@components/Pagination";
import CardList from "@components/CardList";
import { setCardList } from "@controller/setCardList";

// 원래 한자와 같은 데이터를 공유
// sort 및 관리에 불리로 예상하여 word DB 테이블 별도 작성
export const metadata = {
  title: "DogKaeBi | Cantonese 단어",
  description: "광둥어 단어 사전. 한자 뜻풀이, 발음",
  icons: { icon: "/logo.png" },
  openGraph: {
    title: "DogKaeBi | Cantonese 사전",
    description: "광둥어 단어 사전. 한자 뜻풀이, 발음",
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
    title: "DogKaeBi | Cantonese 단어",
    description: "광둥어 단어 사전. 한자 뜻풀이, 발음",
    url: "dogkaebi.com",
    site: "DogKaeBi 독깨비",
    images: { url: "https://dogkaebi.com/logo2.png", alt: "dogkaebi" },
  },
};

export default function Word(props) {
  const path = "tc";
  const slug = "word";
  const page = props.searchParams.page ?? 1;
  const maxCardInPage = 12;
  const wordData = setCardList(slug, page, maxCardInPage);
  const maxPages = Math.ceil(wordData.allLength / maxCardInPage);

  return (
    <>
      <Heros path={path} />
      <SubNav path={path} slug={slug} />
      <div className="mx-4">
        <p className="text-sm pb-4 text-gray-400">등록 단어 : {wordData.allLength}</p>
        <CardList path={slug} data={wordData.list} />
      </div>
      <PageNavgation page={page} maxPages={maxPages} />
    </>
  );
}
