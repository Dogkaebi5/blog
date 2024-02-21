import Heros from "../components/Heros";
import SubNav from "../components/SubNav";
import { words } from "./hanja";
import CnCard from "../components/CnCard";
import { cnCardsWrap } from "../controller/cssName";
import { setIdFromTc } from "../controller/handleId";

export default function Cantonese() {
  const data = Object.values(words);

  return (
    <>
      <Heros />
      <SubNav />
      <div className={cnCardsWrap}>
        {data.map((post) => {
          return post.tc.length == 1 ? (
            <CnCard key={setIdFromTc(post.tc)} data={post} />
          ) : null;
        })}
      </div>
    </>
  );
}
