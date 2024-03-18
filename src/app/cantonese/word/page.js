import Heros from "@/app/components/Heros";
import SubNav from "@/app/components/SubNav";
import { words } from "../hanja";
import { setIdFromTc } from "@/app/controller/handleId";
import { wordCardsWrap } from "@/app/controller/cssName";
import CnCard from "@/app/components/CnCard";

////////
// 원래 한자와 같은 데이터를 공유
// 하지만 sort 및 관리에 불리로 예상하여
// TODO: word 데이터 별도 create

export default function Cantonese() {
  const data = Object.values(words);
  return (
    <>
      <Heros path={"cantonese"} />
      <SubNav />
      <div className={wordCardsWrap}>
        {data.map((post) => {
          return post.tc.length != 1 ? <CnCard key={setIdFromTc(post.tc)} data={post} /> : null;
        })}
      </div>
    </>
  );
}
