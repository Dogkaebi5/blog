import Link from "next/link";
import * as ccss from "@controller/cssName";
import { search } from "@/app/controller/search";
import { setIdFromTc } from "@/app/controller/handleId";
import { syllableURL } from "@/app/controller/urls";
import { syllable } from "@/app/controller/yueYin";

export default function Search(props) {
  const searchText = props.searchParams.q;
  const res = search(searchText);
  const resTc = res?.tcs;
  const resSy = res?.syllable;
  const resWd = res?.words;
  const resPs = res?.posts;
  const isNoData = resTc == null && resSy == null && resWd == null && resPs == null;

  return (
    <div className={ccss.noHeroContent}>
      <div className="p-2">
        <p className="mb-8">
          검색어 : <span className=" text-green-500">{searchText}</span>
        </p>
        {isNoData ? (
          "결색된 내용이 없습니다"
        ) : (
          <>
            {/* 한자 검색결과 */}
            {resTc != null ? (
              <div>
                <p>한자</p>
                {resTc.map((data) => (
                  <TcResults key={"tc" + data.sortId} data={data} />
                ))}
                {resSy == null && resWd == null && resPs == null ? null : <hr />}
              </div>
            ) : null}

            {/* 발음 검색결과 */}
            {resSy != null ? (
              <div className="mt-4">
                <p>월음</p>
                <Link className={ccss.linkGreenText + " p-4 text-xl"} href={syllableURL + resSy}>
                  {resSy}
                </Link>
                {syllable.yueYin[resSy].tone.map((tone) => (
                  <span className="text-sm mx-2" key={resSy + tone}>
                    {resSy + tone}
                  </span>
                ))}
                {resWd == null && resPs == null ? null : <hr className="mt-4" />}
              </div>
            ) : null}

            {/* 단어 검색결과 */}
            {resWd != null ? (
              <div className="mt-4">
                <p>단어</p>
                {resWd.map((data) => (
                  <TcResults key={"wd" + data.sortId} data={data} />
                ))}
                {resPs == null ? null : <hr />}
              </div>
            ) : null}

            {/* 일기 검색결과 */}
            {resPs != null ? (
              <div>
                <p>관련 포스트</p>
                {resPs.map((data) => (
                  <PostResults key={data.slug} data={data} />
                ))}
              </div>
            ) : null}
          </>
        )}
      </div>
    </div>
  );
}

{
  /* <p className="mt-20 mb-40">검색된 내용이 없습니다</p> */
}

const TcResults = (props) => {
  const data = props.data;
  const id = setIdFromTc(data.tc);
  const mean = data.mean.replaceAll("#", "; ").replaceAll("/", " ");

  return (
    <div className="p-4">
      <Link className={ccss.linkGreenText + " text-xl"} href={`/cantonese/${id}`}>
        {data.tc}
      </Link>
      <span className="ml-2 text-sm">{data.yueYin}</span>
      <p className="px-1 bg-gray-50 text-sm overflow-hidden text-nowrap text-ellipsis">{mean}</p>
    </div>
  );
};

const PostResults = (props) => {
  const data = props.data;
  const date = data.createdDate.toDate().toLocaleString();

  return (
    <div className="p-4">
      <Link className={ccss.linkGreenText + " text-lg"} href={`/blog/${data.slug}`}>
        {data.title}
      </Link>
      <span className="ml-4 text-sm text-gray-500">{date}</span>
      <p className="mt-1 text-sm text-gray-800">{data.summary}</p>
    </div>
  );
};
