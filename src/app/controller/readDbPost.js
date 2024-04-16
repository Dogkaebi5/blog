import { firestore } from "@controller/firebase";
import { collection, getDocs } from "firebase/firestore";

const snapshot = await getDocs(collection(firestore, "post"));
let dbPost = snapshot.docs.map((doc) => doc.data());

export const reloadPost = async () => {
  const updateSnapshot = await getDocs(collection(firestore, "post"));
  dbPost = updateSnapshot.docs.map((doc) => doc.data());
};

export default dbPost;
