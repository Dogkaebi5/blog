import Heros from "@components/Heros";
import SubNav from "@components/SubNav";
import CnCard from "@components/CnCard";
import { words } from "@controller/hanja";
import { setIdFromTc } from "@controller/handleId";
import { wordCardsWrap } from "@controller/cssName";

////////
// 원래 한자와 같은 데이터를 공유
// 하지만 sort 및 관리에 불리로 예상하여
// TODO: word 데이터 별도 create

export default function Cantonese() {
  const data = Object.values(words);
  return (
    <>
      <Heros path={"cantonese"} />
      <SubNav path={"cantonese"} />
      <div className={wordCardsWrap}>
        {data.map((post) => {
          return post.tc.length != 1 ? <CnCard key={setIdFromTc(post.tc)} data={post} /> : null;
        })}
      </div>
    </>
  );
}
