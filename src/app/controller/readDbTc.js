import { firestore } from "@controller/firebase";
import { collection, getDocs } from "firebase/firestore";

// firestore에서 데이터 받기
const snapshot = await getDocs(collection(firestore, "tc"));
let dbTc = snapshot.docs.map((doc) => doc.data());
// snapshot에 docs가 정보
// snapshot.docs은 array로 map을 사용..
// 데이터는 docs의 각 내용의 data()로 추출
// 원래 페이지에서는 data를 await로 받지 않으면 에러 발생

// DB 다시 읽기
export const reloadTc = async () => {
  const updateSnapshot = await getDocs(collection(firestore, "tc"));
  dbTc = updateSnapshot.docs.map((doc) => doc.data());
};

export default dbTc;
