import { getFirestore, doc, setDoc, collection, addDoc } from "firebase/firestore";
import { app, firestore } from "./firebase";
// import { words } from "./hanja";
import { setIdFromTc } from "./handleId";

// const db = getFirestore(app);

export const setDb = async (data4) => {
  // const data5 = {
  //   sortId: "16",
  //   tc: "睇",
  //   yueYin: "tai2",
  //   cn: "",
  //   pinyin: "看",
  //   mandarin: "dì",
  //   hanja: "흘깃 볼 제, 볼 체",
  //   category: "동사",
  //   title: "보다",
  //   mean: "눈으로 보다. ( 睇電視 - TV를 보다 )/체크하다. 내용을 찾다. ( 我睇下有冇 - 있는지 봐본다 )/보는 시각과 생각 ( 你點睇? - 어떻게 생각해 )/결정하는 이유 ( 睇情況 - 상황을 보고 결정한다 )/관찰 혹 보살핌 ( 睇火 - 불을 지키고 있다 )/만나러 가다/진료를 받다 ( 睇病;睇醫生 - 의사를 보다 = 병원에 가다 )/조심하라고 상대에 알림 ( 睇車 - 차 조심해 )",
  // };
  // const data4 = {
  //   sortId: "15",
  //   tc: "飲",
  //   yueYin: "jam2 jam3",
  //   cn: "饮",
  //   mandarin: "yǐn yìn",
  //   hanja: "밥 식 / 먹을 식",
  //   category: "동사, 명사",
  //   title: "마시다",
  //   mean: "마시다/음료/술/술자리/삼켜서 간직하다, 품다(飲恨)#마시게 하다(보통화에서는 동물에게)",
  // };
  // const docRef = doc(firestore, "tc", tcId);

  // const data1 = { title: "add test", date: new Date() };
  // const data2 = { title: "set test", date: new Date() };
  // const data3 = Object.values(words);

  // 왜인지 모르겠지만, 페이지에서 데이터를 받아서 업로드는 동작이 멈춘다.
  // 익일 다시 했더니 데이터를 여기서 작성하고 setDoc을 해도 에러가 발생
  // A listener indicated an asynchronous response by returning true, but the message channel closed before a response was received
  // firebase 파일에서 app를 export하지 않았더니 성공했다?...

  // 테스트 내용
  // try {
  //   const docRef = await addDoc(collection(db, "tc"), data1);
  //   console.log("Document written with ID: ", docRef.id);
  // } catch (error) {
  //   console.error("Error adding document: ", error);
  // }

  // try {
  //   data3.map(async (word) => {
  //     await setDoc(doc(db, "tc", String(setIdFromTc(word.tc))), word);
  //   });
  // } catch (error) {
  //   console.error("Error adding document: ", error);
  // }

  console.log("제출중 ...");
  const tcId = String(setIdFromTc(data4.tc));
  console.log("id", tcId);
  const fireDoc = doc(firestore, "tc", tcId);
  await setDoc(fireDoc, data4);
  console.log("제출 완료");
};

// 이벤트로 setdb를 호출하면 작동을 하지 않는다
// client에서는 '제출중'까지 출력되는 것을 보아 try문이 실행이 되지 않는 것 같지만
// server에서는 아예 console이 없어서 아예 실행이 되지 않은 것으로 판단.
// setDb 내부에 '제출중'이 있으니 호출은 된 것 같지만.
// setDb를 이벤트가 아닌 컴포넌트에 바로 사용하면 정상적으로 작동한다.
// ? 마운팅 단계에서는 server가 호출하는 것으로, 정상으로 작동한다.
// ! 해결: .env NEXT_PUBLIC 접두사가 없어서 client 에서 접근을 못했던 것이었음
// TODO: 서비스 실행할 때는 .env NEXT_PUBLIC 삭제
