"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { setCardList } from "../controller/setCardList";
import BlogCard from "./BlogCard";

const BlogCardList = () => {
  const [data, setData] = useState();
  const path = usePathname().split("/")[1];
  const params = useSearchParams();
  const tagPram = params.get("tag");

  useEffect(() => {
    const postList = async () => {
      const list = await setCardList(path, tagPram);
      setData(list);
    };
    postList();
  }, [path, tagPram]);

  return (
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {data == null || data == undefined
        ? "글이 없습니다"
        : data.map((post) => <BlogCard key={post.id} data={post} />)}
    </div>
  );
};
export default BlogCardList;
