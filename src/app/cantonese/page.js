import dbTc from "@controller/readDbTc";
import Heros from "@components/Heros";
import SubNav from "@components/SubNav";
import PageNavgation from "@components/Pagenavgation";
import CardList from "../components/CardList";

export default function Cantonese(props) {
  ////////
  // 한자 리스트 페이지
  // 데이터는 read ctrl 으로 이동
  // data 순서 소팅
  const page = props.searchParams.page ?? 1;
  const sortData = dbTc.sort((a, b) => b.sortId - a.sortId);

  // 한자는 카드 최대24장
  const maxCardInPage = 24;
  const maxPages = Math.ceil(sortData.length / maxCardInPage);

  // TODO: cardList 수량 지정 및 pagenavigatino 추가
  return (
    <>
      <Heros path={"cantonese"} />
      <SubNav path={"cantonese"} />
      <p className="text-sm pb-4 text-gray-400">등록 한자 : {sortData.length}</p>
      <CardList path={"tc"} data={sortData} />
      <PageNavgation page={page} maxPages={maxPages} />
    </>
  );
}
