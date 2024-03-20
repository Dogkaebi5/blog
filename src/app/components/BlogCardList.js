import { setCardList } from "@controller/setCardList";
import * as ccss from "@controller/cssName";
import BlogCard from "./BlogCard";
import PageNavgation from "./Pagenavgation";

const BlogCardList = async (props) => {
  //// 서버 컴포넌트를 사용하려 했지만 쿼리를 확인해야 해서 방법 모색 중 -->
  //// props로 부모에서 받아옴, 부모도 props로 받음
  // 현재 페이지 정보
  // cards data, cards 총 수량
  // props으로 usePathname, useSearchParams 대체
  // home과 cantonese 의 카테고리 구분
  const category = props.path != "blog" ? "cantonese" : props.query.tag;
  let page = props.query.page ?? 1;

  const cardData = await setCardList(category, page);
  const sortData = cardData.list;
  const allLength = cardData.allLength;

  //// TODO: DB로 변경

  // 총 페이지 수량은 총 길이(allLength) 나누기 1페이지의 표시 수량(임시 8) 올림(ceil)
  // TODO: 임시 수량 변경 or not
  let maxPages = Math.ceil(allLength / 8);

  return (
    <>
      <div className={ccss.blogCardsWrap}>
        {sortData == null || sortData == undefined
          ? "글이 없습니다"
          : sortData.map((post) => <BlogCard key={post.id} data={post} />)}
      </div>
      <PageNavgation maxPages={maxPages} />
    </>
  );
};
export default BlogCardList;
