import Image from "next/image";
import Link from "next/link";

import dbPost from "@controller/readDbPost";
import * as ccss from "@controller/cssName";
import { imgURL } from "@controller/urls";

import PrismLoader from "@/app/components/PrismLoader";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import { notFound } from "next/navigation";

export async function generateMetadata(props) {
  const data = dbPost.filter((post) => {
    if (post.slug == props.params.id) {
      return post;
    }
  })[0];

  return data == null
    ? {
        title: `DogKaeBi | 404`,
        description: `Page not found`,
      }
    : {
        title: `DogKaeBi | ${data.title}`,
        description: data.summary,
        openGraph: {
          title: `DogKaeBi | ${data.title}`,
          description: data.summary,
          images: [
            {
              url: imgURL + data.thumbnail,
              width: 600,
              height: 315,
            },
          ],
        },
      };
}

// [id] 폴더 router
export default async function Read(props) {
  // 데이터 fire에서 가져오는 방식으로 변경 완료
  const data = dbPost.filter((post) => {
    if (post.slug == props.params.id) {
      return post;
    }
  })[0];

  // Post 읽는 방법을 여러개 테스트 결과 :
  // - fetch로 가져온 객체를 text()로 변경해야함.
  // - firestore에 바로 저장하면 줄바꿈이 없어짐.
  // - html을 저장해도 됨.
  // - html에 컨포넌트를 포함하면 dangerouslySetInnerHTML는 읽지 못함.
  // 결론 : (1)markdown-to-jsx을 사용 (2)md 별도 저장 (3)tailwind plugin @tailwindcss/typography 사용

  // firestore에서 가져온 date 데이터는 toDate를 해야 javascript에서 정상적으로 표기됨
  const createdDate = data?.createdDate.toDate();
  const updatedDate = data?.updatedDate != null || data?.updatedDate != undefined ? data?.updatedDate.toDate() : null;
  const contentObj = await fetch(imgURL + data?.content);
  const contentText = await contentObj.text();
  // gray-matter 사용
  const dataParsed = matter(contentText);
  const content = dataParsed.content;

  // 카테고리(태그) 표기 func
  const category = { book: "책", daily: "일상", coding: "코딩", cantonese: "광둥어" };

  // 마크다운 이미지 옵션
  // 링크가 이미지 확장자(jpg ...)가 아닌 경우 <img>는 표기가 안되서 Image 컴포넌트로 변경 사용
  const options = {
    overrides: {
      img: ({ src, alt, ...props }) => <Image width={500} height={500} alt={alt} src={src} {...props} />,
    },
  };

  return data == null ? (
    notFound()
  ) : (
    <div className="p-8 md:p-16">
      <PrismLoader />
      <div className="px-4">
        <h1 className={ccss.h1}>{data.title}</h1>
        <p className={ccss.blogDate}>- {createdDate.toLocaleDateString()}</p>
        {updatedDate != null || updatedDate != undefined ? <p className={ccss.blogDate}>( {updatedDate.toLocaleDateString()} Updated )</p> : null}
        <div className="flex mt-4">
          <Link className={ccss.headerBtn} href={`/blog?tag=${data.category}`}>
            {category[data.category]}
          </Link>
        </div>
      </div>
      <div className="mt-8 ">
        <Image className="object-cover w-full max-h-96" width={600} height={400} src={imgURL + data.thumbnail} alt={data.title} />
      </div>
      <article className="prose prose-stone">
        <PrismLoader />
        <Markdown options={options}>{content}</Markdown>
      </article>
    </div>
  );
}
