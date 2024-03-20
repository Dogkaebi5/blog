import { firestore } from "@controller/firebase";
import { collection, getDocs } from "firebase/firestore/lite";
import { setIdFromTc } from "@controller/handleId";
import { wordCardsWrap } from "@controller/cssName";
import Heros from "@components/Heros";
import SubNav from "@components/SubNav";
import CnCard from "@components/CnCard";
import PageNavgation from "@/app/components/Pagenavgation";
// import { words } from "@controller/hanja";

////////
// 원래 한자와 같은 데이터를 공유
// 하지만 sort 및 관리에 불리로 예상하여
// word DB 테이블 별도 작성

export default async function Word() {
  const getData = async () => {
    const collectionRef = collection(firestore, "word");
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
