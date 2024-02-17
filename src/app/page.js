import Heros from "./components/Heros";
import SubNav from "./components/SubNav";
import BlogCardList from "./components/BlogCardList";
import PageNav from "./components/PageNav";

export default function Home() {
  return (
    <>
      <Heros />
      <SubNav />
      <BlogCardList />
      <PageNav></PageNav>
    </>
  );
}
