"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { setCardList } from "../controller/setCardList";
import BlogCard from "./BlogCard";
import * as ccss from "@/app/controller/cssName";

const BlogCardList = () => {
  const path = usePathname().split("/")[1];
  const tag = useSearchParams().get("tag");
  const checkCategory = () => (path != "" ? "cantonese" : tag);
  const category = checkCategory();

  const [sortData, setSortData] = useState();
  const [allLength, setAllLength] = useState(0);
  const [currentPageNum, setCurrentPageNum] = useState(1);

  const postList = async (category, pageNum) => {
    const res = await setCardList(category, pageNum);
    setSortData(res.list);
    setAllLength(res.allLength);
  };
  useEffect(() => {
    postList(category, currentPageNum);
  }, [category, currentPageNum]);

  let maxPages = Math.ceil(allLength / 8);

  const setPageNums = () => {
    if (maxPages < 7) {
      let result = [];
      for (let i = 2; i <= maxPages - 1; i++) {
        result.push(i);
      }
      return result;
    } else {
      if (currentPageNum == 1) return [2, -1];
      if (currentPageNum == 2) return [2, 3, -1];
      if (currentPageNum == 3) return [2, 3, 4, -1];
      if (currentPageNum == maxPages) return [-1, maxPages - 1];
      if (currentPageNum == maxPages - 1)
        return [-1, maxPages - 2, maxPages - 1];
      if (currentPageNum == maxPages - 2)
        return [-1, maxPages - 2, maxPages - 1];
      return [-1, currentPageNum - 1, currentPageNum, currentPageNum + 1, -1];
    }
  };

  let pageNums = setPageNums();

  const handlePageNav = (btn) => {
    if (currentPageNum == 1 && btn == "-") return;
    if (currentPageNum == maxPages && btn == "+") return;
    if (btn == "-") {
      setCurrentPageNum(currentPageNum - 1);
      return;
    }
    if (btn == "+") {
      setCurrentPageNum(currentPageNum + 1);
      return;
    }
    setCurrentPageNum(btn);
  };

  return (
    <>
      <div className={ccss.blogCardList}>
        {sortData == null || sortData == undefined
          ? "글이 없습니다"
          : sortData.map((post) => <BlogCard key={post.id} data={post} />)}
      </div>
      {allLength < 8 ? (
        <div className="h-24 w-full"></div>
      ) : (
        <div className={ccss.pageNavWrap}>
          {/* prev btn */}
          <button
            className={ccss.pageNum + " mr-2"}
            onClick={() => handlePageNav("-")}
          >
            ◀
          </button>
          {/* 1st btn */}
          {currentPageNum == 1 ? (
            <button className={ccss.pageNumAct}>1</button>
          ) : (
            <button className={ccss.pageNum} onClick={() => handlePageNav(1)}>
              1
            </button>
          )}

          {pageNums.map((num) => {
            return num != -1 ? (
              currentPageNum == num ? (
                <button className={ccss.pageNumAct}>{num}</button>
              ) : (
                <button
                  className={ccss.pageNum}
                  onClick={() => handlePageNav(num)}
                >
                  {num}
                </button>
              )
            ) : (
              <span className="p-1">...</span>
            );
          })}

          {/* last btn */}
          {currentPageNum == maxPages ? (
            <button className={ccss.pageNumAct}>{maxPages}</button>
          ) : (
            <button
              className={ccss.pageNum}
              onClick={() => handlePageNav(maxPages)}
            >
              {maxPages}
            </button>
          )}
          {/* next btn */}
          <button
            className={ccss.pageNum + " ml-2"}
            onClick={() => handlePageNav("+")}
          >
            ▶
          </button>
        </div>
      )}
    </>
  );
};
export default BlogCardList;
