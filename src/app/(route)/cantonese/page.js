import Heros from "@components/Heros";
import SubNav from "@components/SubNav";
import Pagination from "@/app/components/Pagination";
import CardList from "@components/CardList";
import { setCardList } from "@controller/setCardList";

export const metadata = {
  title: "DogKaeBi | Cantonese 사전",
  description: "광둥어 한자 사전. 한자 뜻풀이, 발음",
  icons: { icon: "/logo.png" },
  openGraph: {
    title: "DogKaeBi | Cantonese 사전",
    description: "광둥어 한자 사전. 한자 뜻풀이, 발음",
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
    title: "DogKaeBi | Cantonese 사전",
    description: "광둥어 한자 사전. 한자 뜻풀이, 발음",
    url: "dogkaebi.com",
    site: "DogKaeBi 독깨비",
    images: { url: "https://dogkaebi.com/logo2.png", alt: "dogkaebi" },
  },
};

// 한자 리스트 페이지
// 데이터는 read ctrl 으로 이동
export default function Cantonese(props) {
  const path = "tc";
  const page = props.searchParams.page ?? 1; // Query 페이지, 없으면 1
  const maxCardInPage = 12; // 한자는 카드 최대12장
  const tcData = setCardList(path, page, maxCardInPage);
  const maxPages = Math.ceil(tcData.allLength / maxCardInPage);

  return (
    <>
      <Heros path={path} />
      <SubNav path={path} />
      <div className="mx-4">
        <p className="text-sm pb-4 text-gray-400">등록 한자 : {tcData.allLength}</p>
        <CardList path={path} data={tcData.list} />
      </div>
      <Pagination page={page} maxPages={maxPages} />
    </>
  );
}
