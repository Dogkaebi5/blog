import Image from "next/image";
import Link from "next/link";

import fs from "fs";
import path from "path";

import * as ccss from "@controller/cssName";
import { imgURL } from "@controller/urls";

import PrismLoader from "@/app/components/PrismLoader";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { setIdFromTc } from "@/app/controller/handleId";
import { hanData } from "@/app/controller/han";
import { wordData } from "@/app/controller/word";

export async function generateMetadata(props) {
  const directoryPath = path.join(process.cwd(), "public/post");
  const mdFile = fs.readFileSync(directoryPath + "/" + props.params.id + ".md", "utf8");

  if (mdFile == undefined) {
    return { title: `DogKaeBi | 404`, description: `Page not found` };
  } else {
    const parsed = matter(mdFile);
    return {
      title: `DogKaeBi | ${parsed.data.title}`,
      description: parsed.data.description,
      openGraph: {
        title: `DogKaeBi | ${parsed.data.title}`,
        description: parsed.data.description,
        images: [
          {
            url: imgURL + parsed.data.cover,
            width: 600,
            height: 315,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: `DogKaeBi | ${parsed.data.title}`,
        description: parsed.data.description,
        url: "dogkaebi.com",
        site: "DogKaeBi 독깨비",
        images: { url: imgURL + parsed.data.cover, alt: parsed.data.title },
      },
    };
  }
}

// [id] 폴더 router
export default async function Read(props) {
  const directoryPath = path.join(process.cwd(), "public/post");
  const mdFile = fs.readFileSync(directoryPath + "/" + props.params.id + ".md", "utf8");
  if (mdFile == undefined) {
    return notFound();
  } else {
    // gray-matter 사용
    const parsed = matter(mdFile);
    const category = { book: "책", daily: "일상", coding: "코딩", cantonese: "광둥어" };

    // 마크다운 이미지 옵션 : 링크가 이미지 확장자(jpg ...)가 아닌 경우 <img>는 표기가 안되서 Image 컴포넌트로 변경 사용
    const options = {
      overrides: {
        img: ({ src, alt, ...props }) => <Image width={500} height={500} alt={alt} src={src} {...props} />,
      },
    };

    const mdClass =
      "prose prose-stone prose-li:my-1 prose-blockquote:border-green-600 prose-blockquote:not-italic prose-blockquote:font-normal prose-blockquote:bg-slate-50 prose-code:bg-gray-200 prose-code:rounded prose-code:py-0.5 prose-code:px-1 mt-8 p-2 markdown";

    return (
      <div className="p-4">
        <PrismLoader />
        <div className="px-4">
          <h1 className={ccss.h1}>{parsed.data.title}</h1>
          <p className={ccss.blogDate}>- {parsed.data.date?.toLocaleString()}</p>
          {parsed.data.updated != null || parsed.data.updated != undefined ? <p className={ccss.blogDate}>( {parsed.data.updated?.toLocaleDateString()} Updated )</p> : null}
          <div className="flex mt-4">
            <Link className={ccss.headerBtn} href={`/blog?tag=${parsed.data.category}`}>
              {category[parsed.data.category]}
            </Link>
          </div>
        </div>
        <div className="mt-8">
          <Image className="object-cover w-full max-h-96" width={600} height={400} src={imgURL + parsed.data.cover} alt={parsed.data.title} />
        </div>
        <article className={mdClass}>
          <Markdown options={options}>{parsed.content}</Markdown>
        </article>

        {parsed.data.tc != null || parsed.data.word != null ? (
          <>
            <div className={ccss.hr} />
            <div>
              <h3 className="font-bold text-sm mb-2">관련 한자/단어</h3>
              {parsed.data.tc != undefined ? <RelatedTc tcArr={parsed.data.tc?.split(" ")} /> : null}
              {parsed.data.word != undefined ? <RelatedWord wordArr={parsed.data.word?.split(" ")} /> : null}
            </div>
          </>
        ) : null}
      </div>
    );
  }

  function RelatedTc({ tcArr }) {
    return tcArr.map((tc) => {
      const id = setIdFromTc(tc);
      return hanData[id] != null ? (
        <Link key={id} className={ccss.linkGreenText + " p-2 text-lg"} href={"/cantonese/" + id}>
          {tc}
        </Link>
      ) : (
        <span key={id} className="p-2 text-lg">
          {tc}
        </span>
      );
    });
  }

  function RelatedWord({ wordArr }) {
    return wordArr.map((word) => {
      const id = setIdFromTc(word);
      return wordData[id] != null ? (
        <Link key={id} className={ccss.linkGreenText + " p-2 text-lg"} href={"/cantonese/" + id}>
          {word}
        </Link>
      ) : (
        <span key={id} className="p-2 text-lg">
          {word}
        </span>
      );
    });
  }
}
