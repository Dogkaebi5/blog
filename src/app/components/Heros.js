"use client";
import { usePathname } from "next/navigation";
import * as ccss from "@/app/controller/cssName";

const Heros = () => {
  const path = usePathname();
  let pathname = path.split("/")[1];
  let title;

  if (pathname == "") title = "독깨비 노트";
  if (pathname == "cantonese") title = "粵";
  if (pathname == "blog") title = "BLOG";

  return (
    <div className={ccss.hero}>
      <h1 className={ccss.h1}>{title}</h1>
      <p>This is {title} sub text</p>
    </div>
  );
};

export default Heros;
