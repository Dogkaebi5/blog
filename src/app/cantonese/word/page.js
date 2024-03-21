import dbWord from "@controller/readDbWord";
import Heros from "@components/Heros";
import SubNav from "@components/SubNav";
import PageNavgation from "@components/Pagenavgation";
import CardList from "@/app/components/CardList";

////////
// 원래 한자와 같은 데이터를 공유
// 하지만 sort 및 관리에 불리로 예상하여
// word DB 테이블 별도 작성

export default function Word(props) {
  // ctrl에서 db읽기로 통합
  // data 순서 소팅
  const data = dbWord.sort((a, b) => a.sortId - b.sortId);

  const page = props.searchParams.page ?? 1;
  const maxCardInPage = 10;
  const maxPages = Math.ceil(data.length / maxCardInPage);

  return (
    <>
      <Heros path={"cantonese"} />
      <SubNav path={"cantonese"} />
      <p className="text-sm pb-4 text-gray-400">등록 단어 : {data.length}</p>
      <CardList path={"word"} data={data} />
      <PageNavgation page={page} maxPages={maxPages} />
    </>
  );
}
