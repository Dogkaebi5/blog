"use client";

import { imgURL } from "@controller/urls";
import * as ccss from "@controller/cssName";
import Image from "next/image";
import { contents } from "./test";

// import MdxData from "./test.mdx";

// import { readFile } from "node:fs/promises";
// import { compile } from "@mdx-js/mdx";
// import remarkFrontmatter from "remark-frontmatter";
// import remarkMdxFrontmatter from "remark-mdx-frontmatter";
// import fs from "fs";

// const filePath = "C:/Users/User/code/blog/src/app/(route)/test/5/test.mdx";
// const text = fs.readFileSync("./src/app/(route)/test/5/test.mdx", "utf8");
// const contents = await compile(await readFile(filePath), {
//   jsx: true,
//   remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
// });

// frontmatter를 가져오는 단계에서 local path를 지정하는 점에서
// DB에 마크다운을 저장하면 굳이 mdx를 사용할 이유가 없을 것으로 판단된다.

export default function Test() {
  return (
    <div className="p-16">
      <div className="px-4">
        <h1 className={ccss.h1}> </h1>
        <p className={ccss.blogDate}>- 2023. 01. 01</p>
        <p className={ccss.blogDate}>( 2023. 12. 31 Updated )</p>
        <div className="flex mt-4">
          <p className={ccss.headerBtn}>카테고리</p>
        </div>
      </div>
      <div className="mt-8">{/* <Image className="object-cover w-full max-h-96" width={1000} height={1000} src={imgURL + images[0]} alt="sample image" /> */}</div>
      {contents}
      <article className="prose prose-stone mt-8"></article>
    </div>
  );
}
