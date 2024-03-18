"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { setCardList } from "@controller/setCardList";
import * as ccss from "@controller/cssName";
import BlogCard from "./BlogCard";
import PageNavgation from "./Pagenavgation";

const BlogCardList = () => {
  //// 서버 컴포넌트를 사용하려 했지만 쿼리를 확인해야 해서 방법 모색 중 -->
  // 현재 페이지 정보
  const path = usePathname();
  const params = useSearchParams();
  const tag = params.get("tag");
  let page = params.get("page") ?? 1;
  // 쿼리 페이지가 없으면 기본으로 1

  // cards data, cards 총 수량
  const [sortData, setSortData] = useState();
  const [allLength, setAllLength] = useState(0);

  // 두개 페이지에서 사용 중,
  // home과 cantonese 의 카테고리 구분
  const checkCategory = () => (path != "/" ? "cantonese" : tag);
  const category = checkCategory();

  //// TODO: DB로 변경
  // 카테고리와 페이지 변경 시 useEffect
  const setPostList = async (category, pageNum) => {
    //// --> 퀴리 사용하는 곳
    const res = await setCardList(category, pageNum);
    setSortData(res.list);
    setAllLength(res.allLength);
  };
  useEffect(() => {
    setPostList(category, page);
  }, [category, page]);

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
