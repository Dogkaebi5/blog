import * as ccss from "@controller/cssName";
import BlogCard from "./BlogCard";
import CnCard from "./CnCard";
import { setIdFromTc } from "@controller/handleId";

const CardList = async (props) => {
  //// 서버 컴포넌트를 사용하려 했지만 쿼리를 확인해야 해서 방법 모색 중 -->
  //// props로 부모에서 받아옴, 부모도 props로 받음 => props으로 usePathname, useSearchParams 대체 => 아예 부모로 이동
  //// pageNav 분리 (부모에서 데이터 받음)

  const wrapCss = props.path == "blog" ? ccss.blogCardsWrap : props.path == "tc" ? ccss.cnCardsWrap : ccss.wordCardsWrap;

  return (
    <div className={wrapCss}>
      {props.data == null || props.data == undefined
        ? "데이터가 없거나 읽지 못했습니다"
        : props.data.map((post) => (props.path == "blog" ? <BlogCard key={post.slug} data={post} /> : <CnCard key={setIdFromTc(post.tc)} data={post} />))}
    </div>
  );
};
export default CardList;
