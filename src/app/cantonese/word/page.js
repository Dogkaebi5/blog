import Heros from "@/app/components/Heros";
import SubNav from "@/app/components/SubNav";
import { words } from "../hanja";
import { setIdFromTc } from "@/app/controller/handleId";
import { wordCardsWrap } from "@/app/controller/cssName";
import CnCard from "@/app/components/CnCard";

export default function Cantonese() {
  const data = Object.values(words);
  return (
    <>
      <Heros path={"cantonese"} />
      <SubNav />
      <div className={wordCardsWrap}>
        {data.map((post) => {
          return post.tc.length != 1 ? (
            <CnCard key={setIdFromTc(post.tc)} data={post} />
          ) : null;
        })}
      </div>
    </>
  );
}
