import Link from "next/link";
import Image from "next/image";

import * as ccss from "@controller/cssName";
import { imgURL } from "@controller/urls";

const CardList = async ({ path, data }) => {
  // 서버 컴포넌트를 사용하려 했지만 쿼리를 확인해야 해서 방법 모색 중 -->
  // props로 부모에서 받아옴, 부모도 props로 받음 => props으로 usePathname, useSearchParams 대체 => 아예 부모로 이동
  // pageNav 분리 (부모에서 데이터 받음)

  const wrapClass = {
    tc: "grid-cols-2 sm:grid-cols-3 md:grid-cols-4",
    word: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
    blog: "mx-6 lg:mx-0 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  };

  return (
    <div className={`grid gap-4 ${wrapClass[path]}`}>
      {data == null || data == undefined
        ? "데이터가 없거나 읽지 못했습니다"
        : data.map((v) => {
            if (path == "blog") {
              return <BlogCard key={v.slug} data={v} />;
            } else {
              return <CnCard key={v.id} data={v} />;
            }
          })}
    </div>
  );

  function CnCard({ data }) {
    return (
      <Link className={ccss.cnCard} href={`/cantonese/${data.id}`}>
        <p className={ccss.cnCardJutYin}>{data.yueYin}</p>
        <h1 className={ccss.cnCardTC}>{data.tc}</h1>
        <p className={ccss.cnCardTitle}>{data.title}</p>
      </Link>
    );
  }

  function BlogCard({ data }) {
    return (
      <Link className={ccss.blogCard} href={`/blog/${data.slug}`}>
        <Image className={ccss.blogCardImage} width={600} height={400} src={imgURL + data.cover} alt={data.title} />
        <div className={ccss.blogCardTextWrap}>
          <div>
            <h2 className={ccss.blogCardTitle}>{data.title}</h2>
            <p className={ccss.blogCardText}>{data.description ?? ""}</p>
          </div>
          <div>
            <p className={ccss.blogDate}>{data.date.toLocaleString()}</p>
            {data.updated != null ? <p className={ccss.blogDate}>{data.updated.toLocaleString()} (Updated)</p> : null}
          </div>
        </div>
      </Link>
    );
  }
};

export default CardList;
