import Heros from "@components/Heros";
import SubNav from "@components/SubNav";
import PageNavgation from "@/app/components/Pagination";
import CardList from "@components/CardList";
import { setCardList } from "@controller/setCardList";

// 원래 한자와 같은 데이터를 공유
// sort 및 관리에 불리로 예상하여 word DB 테이블 별도 작성

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
