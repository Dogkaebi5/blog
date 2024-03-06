import * as ccss from "@/app/controller/cssName";
import Image from "next/image";
import Link from "next/link";
////////
// [id] 폴더 router
export default async function Read(props) {
  // 임시로 local json 파일 읽기
  const res = await fetch("http://localhost:3000/json/data.json");
  const jsonData = await res.json();
  const allData = await jsonData.data;
  // 모든 데이터에서 filter로 id에 해당되는 data 추출
  // usePathname을 사용하면 use client이어야 하고, async를 사용할 수 없다
  const data = await allData.filter((obj) => {
    if (obj.id == Number(props.params.id)) {
      return obj;
    }
  })[0];

  // json의 날짜를 현지 날짜 string으로 변경
  const date = new Date(data.date).toLocaleDateString();
  // 카테고리(태그) 표기 func
  const category = () => {
    if (data.category == "book") return "책";
    if (data.category == "daily") return "일상";
    if (data.category == "coding") return "코딩";
    if (data.category == "cantonese") return "광둥어";
  };

  return (
    <div className="p-16">
      <div className="px-4">
        <h1 className={ccss.h1}>{data.title}</h1>
        <p className={ccss.blogDate}>- {date}</p>
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
          src={data.thumbnail}
          alt={data.title}
        />
      </div>
      {/** 웹 에디터 문서를 반영하 dangerouslySetInnerHTML 사용 - 사용 시, 주의 필요 **/}
      <div
        className="my-5"
        dangerouslySetInnerHTML={{ __html: data.content }}
      />
    </div>
  );
}
