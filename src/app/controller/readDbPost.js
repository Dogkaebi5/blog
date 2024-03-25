import { firestore } from "@controller/firebase";
import { collection, getDocs } from "firebase/firestore";

const collectionRef = collection(firestore, "post");
const snapshot = await getDocs(collectionRef);
const dbPost = snapshot.docs.map((doc) => doc.data());

export default dbPost;
