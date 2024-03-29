import Heros from "@components/Heros";
import SubNav from "@components/SubNav";
import CardList from "@/app/components/CardList";
import PageNavgation from "@components/Pagenavgation";
import { setCardList } from "@controller/setCardList";

// Cantonese를 home으로 변경. 현 페이지 Blog로 변경

export default async function Blog(props) {
  const tag = props.searchParams.tag;
  const page = props.searchParams.page ?? 1;
  // 블로그는 카드 최대8장
  const maxCardInPage = 8;
  // 상위 페이지에서 데이터 받아 list, nav에 전달
  const blogData = await setCardList(tag, page, maxCardInPage);
  // 페이지 수량
  const maxPages = Math.ceil(blogData.allLength / maxCardInPage);

  return (
    <>
      <Heros path={""} />
      <SubNav path={"blog"} />
      <CardList path={"blog"} data={blogData.list} />
      <PageNavgation tag={tag} page={page} maxPages={maxPages} />
    </>
  );
}
