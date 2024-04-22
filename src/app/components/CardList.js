import Link from "next/link";
import Image from "next/image";

import * as ccss from "@controller/cssName";
import { imgURL } from "@controller/urls";

const CardList = async ({ path, data }) => {
  // 서버 컴포넌트를 사용하려 했지만 쿼리를 확인해야 해서 방법 모색 중 -->
  // props로 부모에서 받아옴, 부모도 props로 받음 => props으로 usePathname, useSearchParams 대체 => 아예 부모로 이동
  // pageNav 분리 (부모에서 데이터 받음)
  const wrapCss = path == "blog" ? ccss.blogCardsWrap : path == "tc" ? ccss.cnCardsWrap : ccss.wordCardsWrap;

  return (
    <div className={wrapCss}>
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
};
export default CardList;

const CnCard = ({ data }) => {
  return (
    <Link key={data.id} className={ccss.cnCard} href={`/cantonese/${data.id}`}>
      <p className={ccss.cnCardJutYin}>{data.yueYin}</p>
      <h1 className={ccss.cnCardTC}>{data.tc}</h1>
      <p className={ccss.cnCardTitle}>{data.title}</p>
    </Link>
  );
};

const BlogCard = ({ data }) => {
  const createdDate = data.createdDate.toDate();
  const updatedDate = data.updatedDate != null ? data.updatedDate.toDate() : null;
  return (
    <Link className={ccss.blogCard} scroll={false} href={`/blog/${data.slug}`}>
      <Image className={ccss.blogCardImage} width={600} height={400} src={imgURL + data.thumbnail} alt={data.title} />
      <div className={ccss.blogCardTextWrap}>
        <div>
          <h2 className={ccss.blogCardTitle}>{data.title}</h2>
          <p className={ccss.blogCardText}>{data.summary ?? ""}</p>
        </div>
        <div>
          <p className={ccss.blogDate}>{createdDate.toLocaleString()}</p>
          {updatedDate != null ? <p className={ccss.blogDate}>{updatedDate.toLocaleString()} (Updated)</p> : null}
        </div>
      </div>
    </Link>
  );
};
