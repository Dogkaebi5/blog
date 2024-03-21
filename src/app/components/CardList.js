import * as ccss from "@controller/cssName";
import BlogCard from "./BlogCard";

const CardList = async (props) => {
  //// 서버 컴포넌트를 사용하려 했지만 쿼리를 확인해야 해서 방법 모색 중 -->
  //// props로 부모에서 받아옴, 부모도 props로 받음 => props으로 usePathname, useSearchParams 대체 => 아예 부모로 이동
  //// pageNav 분리 (부모에서 데이터 받음)

  return (
    <div className={ccss.blogCardsWrap}>
      {props.data == null || props.data == undefined
        ? "글이 없습니다"
        : props.data.map((post) => <BlogCard key={post.id} data={post} />)}
    </div>
  );
};
export default CardList;
