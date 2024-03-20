import dbWord from "@controller/readDbWord";
import { setIdFromTc } from "@controller/handleId";
import { wordCardsWrap } from "@controller/cssName";
import Heros from "@components/Heros";
import SubNav from "@components/SubNav";
import CnCard from "@components/CnCard";
import PageNavgation from "@components/Pagenavgation";

////////
// 원래 한자와 같은 데이터를 공유
// 하지만 sort 및 관리에 불리로 예상하여
// word DB 테이블 별도 작성

export default function Word(props) {
  console.log(props);
  // ctrl에서 db읽기로 통합
  // data 순서 소팅
  const data = dbWord.sort((a, b) => a.sortId - b.sortId);

  return (
    <>
      <Heros path={"cantonese"} />
      <SubNav path={"cantonese"} />
      <p className="text-sm pb-4 text-gray-400">등록 단어 : {data.length}</p>
      <div className={wordCardsWrap}>
        {data.map((post) => (
          <CnCard key={setIdFromTc(post.tc)} data={post} />
        ))}
      </div>
      <PageNavgation maxPages={2} />
    </>
  );
}
