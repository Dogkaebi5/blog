import Link from "next/link";
import * as ccss from "@controller/cssName";
import { search } from "@/app/controller/search";
import { setIdFromTc } from "@/app/controller/handleId";
import { syllableURL } from "@/app/controller/urls";
import { syllable } from "@/app/controller/yueYin";
export default function Search(props) {
  const searchText = props.searchParams.q;
  const res = search(searchText);
  const resTc = res.tcs;
  const resSy = res.syllable;

  return (
    <div className={ccss.noHeroContent}>
      <div className="p-2">
        <p className="mb-8">
          검색어 : <span className=" text-green-500">{searchText}</span>
        </p>
        {resTc.length ? (
          <div>
            <p>한자</p>
            {resTc.map((data) => {
              return <TcResults key={data.sortId} data={data} />;
            })}
            <hr />
          </div>
        ) : null}

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
            <hr />
          </div>
        ) : null}
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
