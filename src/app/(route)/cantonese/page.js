import Heros from "@components/Heros";
import SubNav from "@components/SubNav";
import Pagination from "@/app/components/Pagination";
import CardList from "@components/CardList";
import { setCardList } from "@controller/setCardList";
// 한자 리스트 페이지
// 데이터는 read ctrl 으로 이동
export default function Cantonese(props) {
  const path = "tc";
  // Query 페이지, 없으면 1
  const page = props.searchParams.page ?? 1;
  // 한자는 카드 최대12장
  const maxCardInPage = 12;
  const tcData = setCardList(path, page, maxCardInPage);
  const maxPages = Math.ceil(tcData.allLength / maxCardInPage);

  return (
    <>
      <Heros path={path} />
      <SubNav path={path} />
      <p className="text-sm pb-4 text-gray-400">등록 한자 : {tcData.allLength}</p>
      <CardList path={path} data={tcData.list} />
      <Pagination page={page} maxPages={maxPages} />
    </>
  );
}
