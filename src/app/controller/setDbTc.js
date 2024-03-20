import { getFirestore, doc, setDoc, collection, addDoc } from "firebase/firestore";
import { app, firestore } from "./firebase";
// import { words } from "./hanja";
import { setIdFromTc } from "./handleId";

// const db = getFirestore(app);

export const setDb = async () => {
  const data4 = {
    sortId: "15",
    tc: "飲",
    yueYin: "jam2 jam3",
    cn: "饮",
    mandarin: "yǐn yìn",
    hanja: "밥 식 / 먹을 식",
    category: "동사, 명사",
    title: "마시다",
    mean: "마시다/음료/술/술자리/삼켜서 간직하다, 품다(飲恨)#마시게 하다(보통화에서는 동물에게)",
  };

  const tcId = String(setIdFromTc(data4.tc));
  // const docRef = doc(firestore, "tc", tcId);

  // const data1 = { title: "add test", date: new Date() };
  // const data2 = { title: "set test", date: new Date() };
  // const data3 = Object.values(words);

  // 왜인지 모르겠지만, 페이지에서 데이터를 받아서 업로드는 동작이 멈춘다.
  // 익일 다시 했더니 데이터를 여기서 작성하고 setDoc을 해도 에러가 발생
  // A listener indicated an asynchronous response by returning true, but the message channel closed before a response was received
  // firebase 파일에서 app를 export하지 않았더니 성공했다?...

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
  console.log("제출중 ...");
  try {
    await setDoc(doc(firestore, "tc", tcId), data4);
    console.log("제출 완료:");
    return true;
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};
