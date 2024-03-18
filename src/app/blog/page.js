import Heros from "@components/Heros";
import SubNav from "@components/SubNav";
import BlogCardList from "@components/BlogCardList";

// TODO: home = Blog or Cantonese
export default function Home() {
  return (
    <>
      <Heros path={""} />
      <SubNav path={"blog"} />
      <BlogCardList />
    </>
  );
}
