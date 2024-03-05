import Heros from "../components/Heros";
import SubNav from "../components/SubNav";
import CnCard from "../components/CnCard";
import { cnCardsWrap } from "../controller/cssName";
import { setIdFromTc } from "../controller/handleId";
import { firestore } from "../controller/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

export default async function Cantonese() {
  const getData = async () => {
    const collectionRef = collection(firestore, "tc");
    const snapshot = await getDocs(collectionRef);
    return snapshot.docs.map((doc) => doc.data());
  };

  const data = await getData();

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
