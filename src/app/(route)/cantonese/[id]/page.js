import Link from "next/link";

import * as ccss from "@controller/cssName";
import { syllable } from "@controller/yueYin";
import { setIdFromTc, setTcFromId, splitIds } from "@controller/handleId";
import YueYinPlayer from "@components/YueYinPlayer";
import { checkNoData } from "@/app/controller/checkHasData";
import { hanData } from "@/app/controller/han";
import { wordData } from "@/app/controller/word";

// export let metadata = {};
export async function generateMetadata(props) {
  const id = props.params.id;
  const idsArr = splitIds(id);
  const data = hanData[id] ?? wordData[id];
  return {
    title: `DogKaeBi | 광둥어 ${data?.tc ?? setTcFromId(idsArr)} : ${data?.title ?? "-"}`,
    description: `한자 : [ ${data?.tc ?? setTcFromId(idsArr)} ] 의 광둥어 뜻 풀이`,
  };
}

// use client에서 에러 지속 발생, async로 변경
export default async function HanJa(props) {
  // 기본 데이터 세팅
  const noData = { tc: "-", yueYin: "-", cn: "-", pinyin: "-", mandarin: "-", hanja: "-", category: "-", mean: "-" };
  const id = props.params.id;
  const idsArr = splitIds(id);
  const isOneChar = hanData[id] != null;
  const isHasData = hanData[id] != null || wordData[id] != null;
  // firestore 데이터 받기 => ctrl로 통합 이동
  const data = isHasData ? hanData[id] ?? wordData[id] : noData;
  const char = isHasData ? data.tc : setTcFromId(idsArr);
  // 월음 한개씩 array로 분리
  const yueYinArr = data.yueYin?.split(" ");
  // 정규식으로 성조(숫자) 없는 월음
  const syllableWithoutTones = data.yueYin.replace(/\d+/g, "").split(" ");
  // 한글로 발음
  const kr = isHasData
    ? syllableWithoutTones.length == 1
      ? syllable.yueYin[syllableWithoutTones[0]].pronunciation
      : syllableWithoutTones.map((syl) => syllable.yueYin[syl].pronunciation).join(" ")
    : "-";

  // 헤더버튼 내용
  const backBtn = { true: ["/cantonese", "한자"], false: ["/cantonese/word", "단어"] };

  const titleClass = isOneChar ? "flex mt-12" : "md:flex mt-12";
  // 페이지
  return (
    <div className={ccss.noHeroContent}>
      <Link className={ccss.headerBtn + " ml-2 sm:ml-0"} href={backBtn[isOneChar][0]}>
        👈 {backBtn[isOneChar][1]}
      </Link>
      <div className={titleClass}>
        <CnTitle />
        <Pronounce />
      </div>
      <SubContent />
      <div className={ccss.cnCategoryBox}>구분 : {data.category}</div>
      {isHasData ? isOneChar == 1 ? <TcContent /> : <WordContent /> : <NoContent />}
      {checkNoData(data.detail) ? null : <Detail />}
      {checkNoData(data.relevance) ? null : <Related />}
      <div className="min-h-12" />
    </div>
  );

  // 없는 정보
  // TODO: 내용 추가 신청
  function NoContent() {
    return <div className="py-10">아직 데이터가 없습니다.</div>;
  }

  function CnTitle() {
    const linkClass = "hover:underline hover:text-green-600 underline-offset-8 decoration-2";
    let i = -1;
    return (
      <div className={ccss.cnTitleBox}>
        {isOneChar ? (
          <h1 className=" text-8xl">{char}</h1>
        ) : (
          <h1 className=" text-7xl">
            {idsArr.map((id) => {
              i++;
              return hanData[id] == null ? (
                <span key={id}>{char[i]}</span>
              ) : (
                <Link key={id} className={linkClass} href={"/cantonese/" + id}>
                  {char[i]}
                </Link>
              );
            })}
          </h1>
        )}
      </div>
    );
  }

  function Pronounce() {
    const lineWrapClass = isOneChar ? "" : "flex md:block";
    return (
      <div className="m-6">
        <div className={lineWrapClass}>
          <h3 className={ccss.smLabel}>월음 (粵音)</h3>
          {/* use client에서 onClick을 사용할 수 없어서 별도 컴포넌트로 작성 */}
          <YueYinPlayer yueYinArr={yueYinArr} />
        </div>
        <div className={lineWrapClass}>
          <h3 className={ccss.smLabel}>발음</h3>
          <h3 className={ccss.contentBox}>{kr}</h3>
        </div>
      </div>
    );
  }

  // 기본정보
  function SubContent() {
    // 간체자 & 보통화
    const cn = data.cn == undefined || data.cn == "" ? data.tc : data.cn;
    const mandarin = data.mandarin == undefined || data.mandarin == "" ? cn : data.mandarin;
    return (
      <div className="m-6">
        <div className="flex">
          <h3 className={ccss.smLabel}>简体字 · 拼音</h3>
          <p className={ccss.contentBox}>{`${cn} ${data.pinyin}`}</p>
        </div>
        <div className="flex">
          <h3 className={ccss.smLabel}>普通话</h3>
          <p className={ccss.contentBox}>{mandarin}</p>
        </div>
        {isOneChar ? (
          <div className="flex">
            <h3 className={ccss.smLabel}>한국 한자음</h3>
            <p className={ccss.contentBox}>{data.hanja}</p>
          </div>
        ) : null}
        {isOneChar ? (
          <div className="flex">
            <h3 className={ccss.smLabel}>Code Point</h3>
            <p className={ccss.contentBox}>{idsArr}</p>
          </div>
        ) : null}
      </div>
    );
  }

  // 한자 상세정보
  function TcContent() {
    let count = 0;
    return yueYinArr.map((jyut) => {
      return (
        <div className="border p-4" key={jyut}>
          <p className="font-bold">{jyut}</p>
          <ul className="">
            {data.meaning[jyut].map((obj) => {
              obj.m ? count++ : null;
              return obj.m ? (
                <li className="mx-2 mt-3" key={obj.m}>
                  <p className="mb-1">
                    {count}. {obj.m}
                  </p>
                </li>
              ) : (
                <div key={jyut + obj.e} className="bg-gray-50 mx-2 pb-1 border">
                  <p className="mx-2">
                    <span className="text-gray-500 text-sm">(粵)</span> {obj.e}
                  </p>
                  <p className="mx-2 text-sm text-gray-500">(역) {obj.t}</p>
                </div>
              );
            })}
          </ul>
        </div>
      );
    });
  }

  // 단어 상세정보
  function WordContent() {
    let count = 0;
    return (
      <div className="border p-4" key={data.yueYin}>
        <ul className="">
          {data.meaning.map((obj) => {
            obj.m ? count++ : null;
            return obj.m ? (
              <li className="mx-2" key={obj.m}>
                <p className="mb-1">
                  {count}. {obj.m}
                </p>
              </li>
            ) : (
              <div key={obj.e} className="bg-gray-50 mx-2 pb-1 border">
                <p className="mx-2">
                  <span className="text-gray-500 text-sm">(粵)</span> {obj.e}
                </p>
                <p className="mx-2 text-sm text-gray-500">(역) {obj.t}</p>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }

  function Detail() {
    return (
      <div className={ccss.textBox + " mt-8"}>
        <h3 className="text-sm font-bold text-green-500">※ 비고 ※</h3>
        <p className="mx-4 my-2">{data.detail}</p>
      </div>
    );
  }

  function Related() {
    const relatedTcArr = data.relevance?.split(" ");
    return (
      <>
        <div className="my-8 h-2 w-full bg-green-50" />
        <h3 className="font-bold text-sm mb-4">관련 내용</h3>
        {relatedTcArr.map((word) => {
          const id = setIdFromTc(word);
          return word == data.tc ? null : hanData[id] != null ? (
            <Link key={id} className={ccss.linkGreenText + " p-2 text-lg"} href={"/cantonese/" + id}>
              {word}
            </Link>
          ) : wordData[id] != null ? (
            <Link key={id} className={ccss.linkGreenText + " p-2 text-lg"} href={"/cantonese/" + id}>
              {word}
            </Link>
          ) : (
            <span key={id} className="p-2 text-lg">
              {word}
            </span>
          );
        })}
      </>
    );
  }
}
