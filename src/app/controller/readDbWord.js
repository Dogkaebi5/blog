import { firestore } from "@controller/firebase";
import { collection, getDocs } from "firebase/firestore";

const snapshot = await getDocs(collection(firestore, "word"));
let dbWord = {};
snapshot.forEach((doc) => (dbWord[doc.id] = doc.data()));

export const reloadWord = async () => {
  const updateSnapshot = await getDocs(collection(firestore, "word"));
  dbWord = updateSnapshot.forEach((doc) => (dbWord[doc.id] = doc.data()));
};

export default dbWord;
