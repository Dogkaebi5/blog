import Heros from "@components/Heros";
import SubNav from "@components/SubNav";
import PageNavgation from "@/app/components/Pagination";
import CardList from "@components/CardList";
import { setCardList } from "@controller/setCardList";

// 원래 한자와 같은 데이터를 공유
// sort 및 관리에 불리로 예상하여 word DB 테이블 별도 작성

export default function Word(props) {
  const page = props.searchParams.page ?? 1;
  const maxCardInPage = 12;
  const wordData = setCardList("word", page, maxCardInPage);
  const maxPages = Math.ceil(wordData.allLength / maxCardInPage);

  return (
    <>
      <Heros path={"cantonese"} />
      <SubNav path={"cantonese"} slug="word" />
      <p className="text-sm pb-4 text-gray-400">등록 단어 : {wordData.allLength}</p>
      <CardList path={"word"} data={wordData.list} />
      <PageNavgation page={page} maxPages={maxPages} />
    </>
  );
}
