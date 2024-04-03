import Heros from "@components/Heros";
import SubNav from "@components/SubNav";
import PageNavgation from "@components/Pagenavgation";
import CardList from "@components/CardList";
import { setCardList } from "@controller/setCardList";

export default async function Cantonese(props) {
  ////////
  // 한자 리스트 페이지
  // 데이터는 read ctrl 으로 이동
  const page = props.searchParams.page ?? 1;
  // 한자는 카드 최대24장
  const maxCardInPage = 12;
  const tcData = await setCardList("tc", page, maxCardInPage);
  const maxPages = Math.ceil(tcData.allLength / maxCardInPage);

  // TODO: cardList 수량 지정 및 pagenavigatino 추가
  return (
    <>
      <Heros path={"cantonese"} />
      <SubNav path={"cantonese"} />
      <p className="text-sm pb-4 text-gray-400">등록 한자 : {tcData.allLength}</p>
      <CardList path={"tc"} data={tcData.list} />
      <PageNavgation page={page} maxPages={maxPages} />
    </>
  );
}
