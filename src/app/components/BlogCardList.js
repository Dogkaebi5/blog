"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { setCardList } from "../controller/setCardList";
import BlogCard from "./BlogCard";
import * as ccss from "@/app/controller/cssName";
import PageNavgation from "./Pagenavgation";

const BlogCardList = () => {
  // 현재 페이지 정보
  const path = usePathname();
  const params = useSearchParams();
  const tag = params.get("tag");
  let page = params.get("page");
  // 쿼리 페이지가 없으면 기본으로 1
  page == null ? (page = 1) : (page = parseInt(page));

  // cards data, cards 총 수량
  const [sortData, setSortData] = useState();
  const [allLength, setAllLength] = useState(0);

  // 두개 페이지에서 사용 중,
  // home과 cantonese 의 카테고리 구분
  const checkCategory = () => (path != "/" ? "cantonese" : tag);
  const category = checkCategory();

  // 카테고리와 페이지 변경 시 useEffect
  const setPostList = async (category, pageNum) => {
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
      <PageNavgation maxPages={maxPages} path={path} page={page} tag={tag} />
    </>
  );
};
export default BlogCardList;
