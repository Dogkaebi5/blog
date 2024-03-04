"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { setCardList } from "../controller/setCardList";
import BlogCard from "./BlogCard";
import * as ccss from "@/app/controller/cssName";
import PageNavgation from "./Pagenavgation";

const BlogCardList = () => {
  const path = usePathname();
  const params = useSearchParams();
  const tag = params.get("tag");
  let page = params.get("page");
  page == null ? (page = 1) : (page = parseInt(page));

  const [sortData, setSortData] = useState();
  const [allLength, setAllLength] = useState(0);

  const checkCategory = () => (path != "/" ? "cantonese" : tag);
  const category = checkCategory();

  const setPostList = async (category, pageNum) => {
    const res = await setCardList(category, pageNum);
    setSortData(res.list);
    setAllLength(res.allLength);
  };
  useEffect(() => {
    setPostList(category, page);
  }, [category, page]);

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
