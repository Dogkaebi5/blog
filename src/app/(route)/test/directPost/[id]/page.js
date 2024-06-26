import Image from "next/image";
import Link from "next/link";

import * as ccss from "@controller/cssName";
import { imgURL } from "@controller/urls";

import PrismLoader from "../../../../components/PrismLoader";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { setIdFromTc } from "@/app/controller/handleId";
import { hanData } from "@/app/controller/han";
import { wordData } from "@/app/controller/word";

export async function generateMetadata(props) {
  const mdFile = await fetch(`http://localhost:3000/post/${props.params.id}.md`);

  if (mdFile.status == 404) {
    return { title: `DogKaeBi | 404`, description: `Page not found` };
  } else {
    const parsed = matter(await mdFile.text());
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
    };
  }
}

// [id] 폴더 router
export default async function Read(props) {
  const mdFile = await fetch(`http://localhost:3000/post/${props.params.id}.md`);
  if (mdFile.status == 404) {
    return notFound();
  } else {
    // gray-matter 사용
    const parsed = matter(await mdFile.text());
    const category = { book: "책", daily: "일상", coding: "코딩", cantonese: "광둥어" };

    // 마크다운 이미지 옵션 : 링크가 이미지 확장자(jpg ...)가 아닌 경우 <img>는 표기가 안되서 Image 컴포넌트로 변경 사용
    const options = {
      overrides: {
        img: ({ src, alt, ...props }) => <Image width={500} height={500} alt={alt} src={src} {...props} />,
      },
    };
    return (
      <div className="p-8">
        <PrismLoader />
        <div className="px-4">
          <h1 className={ccss.h1}>{parsed.data.title}</h1>
          <p className={ccss.blogDate}>- {parsed.data.date?.toLocaleDateString()}</p>
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
        <article className="prose prose-stone mt-8 p-2">
          <Markdown options={options}>{parsed.content}</Markdown>
        </article>

        {parsed.data.tc != null || parsed.data.word != null ? (
          <>
            <div className={ccss.hr} />
            <div>
              <h3 className="font-bold text-sm mb-2">관련 한자/단어</h3>
              <RelatedTc tcArr={parsed.data.tc?.split(" ")} />
              <RelatedWord wordArr={parsed.data.word?.split(" ")} />
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
