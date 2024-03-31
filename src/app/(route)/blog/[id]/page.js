import Image from "next/image";
import Link from "next/link";
import dbPost from "@controller/readDbPost";
import * as ccss from "@controller/cssName";
import { imgURL } from "@controller/urls";
import PrismLoader from "@/app/components/PrismLoader";
import Markdown from "markdown-to-jsx";

////////
// [id] 폴더 router
export default async function Read(props) {
  // // 임시로 local json 파일 읽기
  // const res = await fetch("http://localhost:3000/json/data.json");
  // const jsonData = await res.json();
  // const allData = await jsonData.data;
  // 모든 데이터에서 filter로 id에 해당되는 data 추출
  // usePathname을 사용하면 use client이어야 하고, async를 사용할 수 없다
  // json의 날짜를 현지 날짜 string으로 변경
  // const date = new Date(data.date).toLocaleDateString();

  //// 데이터 fire에서 가져오는 방식으로 변경 완료
  const data = dbPost.filter((post) => {
    if (post.id == Number(props.params.id)) {
      return post;
    }
  })[0];

  // firestore에서 가져온 date 데이터는 toDate를 해야 javascript에서 정상적으로 표기됨
  const createdDate = data.createdDate.toDate();
  const updatedDate = data.updatedDate != null || data.updatedDate != undefined ? data.updatedDate.toDate() : null;
  // Post 읽는 방법을 여러개 테스트 결과 :
  // - fetch로 가져온 객체를 text()로 변경해야함.
  // - firestore에 바로 저장하면 줄바꿈이 없어짐.
  // - html을 저장해도 됨.
  // - html에 컨포넌트를 포함하면 dangerouslySetInnerHTML는 읽지 못함.
  // 결론 : (1)markdown-to-jsx을 사용 (2)md 별도 저장 (3)tailwind plugin @tailwindcss/typography 사용
  const contentObj = await fetch(imgURL + data.content);
  const content = await contentObj.text();

  // 카테고리(태그) 표기 func
  const category = () => {
    if (data.category == "book") return "책";
    if (data.category == "daily") return "일상";
    if (data.category == "coding") return "코딩";
    if (data.category == "cantonese") return "광둥어";
  };

  return (
    <div className="p-16">
      <PrismLoader />
      <div className="px-4">
        <h1 className={ccss.h1}>{data.title}</h1>
        <p className={ccss.blogDate}>- {createdDate.toLocaleDateString()}</p>
        {updatedDate != null || updatedDate != undefined ? (
          <p className={ccss.blogDate}>( {updatedDate.toLocaleDateString()} Updated )</p>
        ) : null}
        <div className="flex mt-4">
          <Link className={ccss.headerBtn} href={`/?tag=${data.category}`}>
            {category()}
          </Link>
        </div>
      </div>
      <div className="mt-8 ">
        <Image
          className="object-cover w-full max-h-96"
          width={600}
          height={400}
          src={imgURL + data.images[0]}
          alt={data.title}
        />
      </div>
      <article class="prose prose-stone">
        <PrismLoader />
        <Markdown>{content}</Markdown>
      </article>
    </div>
  );
}
