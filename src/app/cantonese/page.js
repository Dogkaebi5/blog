import { firestore } from "@controller/firebase";
import { collection, getDocs } from "firebase/firestore/lite";
import { cnCardsWrap } from "@controller/cssName";
import { setIdFromTc } from "@controller/handleId";
import Heros from "@components/Heros";
import SubNav from "@components/SubNav";
import CnCard from "@components/CnCard";
import PageNavgation from "@components/Pagenavgation";

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
  const fetchData = await getData();
  // data 순서 소팅
  const data = fetchData.sort((a, b) => a.sortId - b.sortId);

  // TODO: cardList 수량 지정 및 pagenavigatino 추가
  return (
    <>
      <Heros path={"cantonese"} />
      <SubNav path={"cantonese"} />
      <p className="text-sm pb-4 text-gray-400">등록 한자 : {data.length}</p>
      <div className={cnCardsWrap}>
        {data.length > 0
          ? data.map((post) => {
              return <CnCard key={setIdFromTc(post.tc)} data={post} />;
            })
          : "데이터를 찾지 못했습니다."}
      </div>
      <PageNavgation maxPages={2} />
    </>
  );
}
