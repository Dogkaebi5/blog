import { imgURL } from "@controller/urls";
import * as ccss from "@controller/cssName";
import Image from "next/image";
import fs from "fs";
import Markdown from "markdown-to-jsx";
import PrismLoader from "@components/PrismLoader";

export default async function Test() {
  const file = "public/mdTest.md";
  const content = fs.readFileSync(file, "utf8");
  const test = await (await fetch("https://drive.google.com/uc?id=1uawh6Ixk6729fNOoOOdcn0i5RwcULL29")).text();

  return (
    <div className="p-16">
      <div className="px-4">
        <h1 className={ccss.h1}>타이틀 </h1>
        <p className={ccss.blogDate}>- 2023. 01. 01</p>
        <p className={ccss.blogDate}>( 2023. 12. 31 Updated )</p>
        <div className="flex mt-4">
          <p className={ccss.headerBtn}>카테고리</p>
        </div>
      </div>
      <div className="mt-8">
        <Image
          className="object-cover w-full max-h-96"
          width={1000}
          height={1000}
          src={imgURL + "1ssG03ftjdPTSJy8Co49mZ73YAOsFGntF"}
          alt="sample image"
        />
      </div>

      <article class="prose prose-stone">
        <PrismLoader />
        <Markdown>{test}</Markdown>
      </article>
    </div>
  );
}
