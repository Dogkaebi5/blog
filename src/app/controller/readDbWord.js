import { firestore } from "@controller/firebase";
import { collection, getDocs } from "firebase/firestore";

const snapshot = await getDocs(collection(firestore, "word"));
let dbWord = snapshot.docs.map((doc) => doc.data());

export const reloadWord = async () => {
  const updateSnapshot = await getDocs(collection(firestore, "word"));
  dbWord = updateSnapshot.docs.map((doc) => doc.data());
};

export default dbWord;
