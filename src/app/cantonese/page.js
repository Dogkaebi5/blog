import Heros from "../components/Heros";
import SubNav from "../components/SubNav";
import CnCard from "../components/CnCard";
import { cnCardsWrap } from "../controller/cssName";
import { setIdFromTc } from "../controller/handleId";
import app from "../controller/firebase";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { words } from "./hanja";

export default async function Cantonese() {
  const db = getFirestore(app);
  const getTest = async () => {
    const testCol = collection(db, "tc");
    const testSnapshot = await getDocs(testCol);
    return testSnapshot.docs.map((doc) => doc.data());
  };

  const data = await getTest();

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
