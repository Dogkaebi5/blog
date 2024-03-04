"use client";
import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import * as ccss from "@/app/controller/cssName";
import PageNavgation from "./Pagenavgation";

export const CnCardList = () => {
  // const [sortData, setSortData] = useState();
  // const [allLength, setAllLength] = useState(0);
  // useEffect(() => {
  // }, []);
  // let maxPages = Math.ceil(allLength / 8);
  // return (
  //   <>
  //     <div className={ccss.blogCardsWrap}>
  //       {sortData == null || sortData == undefined
  //         ? "글이 없습니다"
  //         : sortData.map((post) => <BlogCard key={post.id} data={post} />)}
  //     </div>
  //     <PageNavgation maxPages={maxPages} path={path} page={page} tag={tag} />
  //   </>
  // );
};
