import Link from "next/link";
import Image from "next/image";

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

  const CnCard = ({ data }) => {
    const CardCss = "rounded-md border text-center shadow-md hover:shadow hover:scale-105";
    const jutJamCss = "px-2 py-3 text-sm text-ellipsis whitespace-nowrap overflow-hidden ";
    const tcCss = "font-bold text-6xl pb-6";
    const titleCss = "py-2 text-sm font-bold bg-gray-100";

    return (
      <Link className={CardCss} href={`/cantonese/${data.id}`}>
        <p className={jutJamCss}>{data.yueYin}</p>
        <h1 className={tcCss}>{data.tc}</h1>
        <p className={titleCss}>{data.title}</p>
      </Link>
    );
  };

  const BlogCard = ({ data }) => {
    const CardCss = "overflow-hidden rounded-md shadow-md hover:shadow hover:scale-105";
    const imageCss = "object-cover h-40";
    const textWrapCss = "min-h-40 px-4 pt-4 pb-4 flex flex-col justify-between";
    const titleCss = "leading-6 text-lg font-bold text-ellipsis line-clamp-2";
    const descCss = "text-sm text-gray-600 text-ellipsis line-clamp-2";
    const dateCss = "text-green-500 text-xs";

    return (
      <Link className={CardCss} href={`/blog/${data.slug}`}>
        <Image className={imageCss} width={600} height={400} src={imgURL + data.cover} alt={data.title} />
        <div className={textWrapCss}>
          <div>
            <h2 className={titleCss}>{data.title}</h2>
            <p className={descCss}>{data.description ?? ""}</p>
          </div>
          <div>
            <p className={dateCss}>{data.date.toLocaleString()}</p>
            {data.updated != null ? <p className={dateCss}>{data.updated.toLocaleString()} (Updated)</p> : null}
          </div>
        </div>
      </Link>
    );
  };

  return (
    <div className={`grid gap-4 ${wrapClass[path]}`}>
      {data == null || data == undefined
        ? "데이터가 없거나 읽지 못했습니다"
        : data.map((v) => (path == "blog" ? <BlogCard key={v.slug} data={v} /> : <CnCard key={v.id} data={v} />))}
    </div>
  );
};

export default CardList;
