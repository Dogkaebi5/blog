import Heros from "../components/Heros";
import SubNav from "../components/SubNav";
import CnCard from "../components/CnCard";
import { cnCardsWrap } from "../controller/cssName";
import { setIdFromTc } from "../controller/handleId";
import { firestore } from "../controller/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

export default async function Cantonese() {
  ////////
  // 한자 리스트 페이지
  // firestore에서 데이터 async로 받기

  const getData = async () => {
    const collectionRef = collection(firestore, "tc");
    const snapshot = await getDocs(collectionRef);
    return snapshot.docs.map((doc) => doc.data());
    // snapshot에 docs가 정보..
    // snapshot.docs은 array로 map을 사용..
    // 데이터는 docs의 각 내용의 data()로 추출
  };

  // data를 await로 받지 않으면 에러 발생
  const data = await getData();

  // TODO: cardList 수량 지정 및 pagenavigatino 추가
  return (
    <>
      <Heros path={"cantonese"} />
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
