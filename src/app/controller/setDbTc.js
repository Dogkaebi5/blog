import {
  getFirestore,
  collection,
  addDoc,
  setDoc,
  doc,
} from "firebase/firestore";
import app from "./firebase";
import { words } from "../cantonese/hanja";
import { setIdFromTc } from "./handleId";

const db = getFirestore(app);
// const data1 = { title: "add test", date: new Date() };
// const data2 = { title: "set test", date: new Date() };
const data3 = Object.values(words);

export const setTest = async () => {
  // try {
  //   const docRef = await addDoc(collection(db, "post"), data1);
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
};
