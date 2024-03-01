import Heros from "./components/Heros";
import SubNav from "./components/SubNav";
import BlogCardList from "./components/BlogCardList";
import { setTest } from "./controller/setDbTc";

export default function Home() {
  // setTest();
  return (
    <>
      <Heros />
      <SubNav />
      <BlogCardList />
    </>
  );
}
