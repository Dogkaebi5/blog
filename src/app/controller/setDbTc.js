import { getFirestore, doc, setDoc, collection, addDoc } from "firebase/firestore";
import { app, firestore } from "./firebase";
// import { words } from "./hanja";
import { setIdFromTc } from "./handleId";

// const db = getFirestore(app);

export const setDb = async (data) => {
  // const tcId = String(setIdFromTc(data.tc));
  // const docRef = doc(firestore, "tc", tcId);

  // const data1 = { title: "add test", date: new Date() };
  // const data2 = { title: "set test", date: new Date() };
  // const data3 = Object.values(words);

  // 왜인지 모르겠지만, 페이지에서 데이터를 받아서 업로드는 동작이 멈춘다.
  const data4 = {
    sortId: "15",
    tc: "飲",
    yueYin: "jam2 jam3",
    cn: "",
    mandarin: "yǐn yìn",
    hanja: "밥 식 / 먹을 식",
    category: "동사, 명사",
    title: "마시다",
    mean: "마시다/음료/술/술자리/삼켜서 간직하다, 품다(飲恨)#마시게 하다(보통화에서는 동물에게)",
  };

  console.log(data4);
  //// 테스트 내용
  // try {
  //   const docRef = await addDoc(collection(db, "tc"), data1);
  //   console.log("Document written with ID: ", docRef.id);
  // } catch (error) {
  //   console.error("Error adding document: ", error);
  // }
  ////
  // try {
  //   data3.map(async (word) => {
  //     await setDoc(doc(db, "tc", String(setIdFromTc(word.tc))), word);
  //   });
  // } catch (error) {
  //   console.error("Error adding document: ", error);
  // }
  ////
  try {
    console.log("제출중 ...");
    await setDoc(doc(firestore, "tc", String(setIdFromTc(data4.tc))), data4);
    console.log("제출 완료:");
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};
