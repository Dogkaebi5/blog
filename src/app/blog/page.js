import Heros from "@components/Heros";
import SubNav from "@components/SubNav";
import BlogCardList from "@components/BlogCardList";

// Cantonese를 home으로 변경. 현 페이지 Blog로 변경

export default function Blog() {
  return (
    <>
      <Heros path={""} />
      <SubNav path={"blog"} />
      <BlogCardList />
    </>
  );
}
