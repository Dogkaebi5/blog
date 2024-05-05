import Link from "next/link";

import * as ccss from "@controller/cssName";
import dbTc from "@controller/readDbTc";
import dbWord from "@controller/readDbWord";
import { syllable } from "@controller/yueYin";
import { setIdFromTc, setTcFromId, splitIds } from "@controller/handleId";
import YueYinPlayer from "@components/YueYinPlayer";

// export let metadata = {};
export async function generateMetadata(props) {
  const id = props.params.id;
  const idsArr = splitIds(id);
  const data = idsArr.length == 1 ? dbTc[id] : dbWord[id];
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
  const isOneChar = idsArr.length == 1;
  const isHasData = dbTc[id] != null || dbWord[id] != null;
  // firestore 데이터 받기 => ctrl로 통합 이동
  const data = isHasData ? (isOneChar ? dbTc[id] : dbWord[id]) : noData;
  const char = isHasData ? data.tc : setTcFromId(idsArr);
  // 월음 한개씩 array로 분리
  let yueYinArr = data.yueYin?.split(" ");
  // 한국 발음 세팅
  const krSyllable = () => {
    if (isHasData) {
      // 성조(숫자) 정규식으로 제거
      const syllableWithoutTones = data.yueYin.replace(/\d+/g, "").split(" ");
      // 한자: 발음 return // 단어: 발음 map -> join
      return syllableWithoutTones.length == 1 ? syllable.yueYin[syllableWithoutTones[0]].pronunciation : syllableWithoutTones.map((syl) => syllable.yueYin[syl].pronunciation).join(" ");
    }
    return "-";
  };
  const kr = krSyllable();

  // 관련 한자
  const relatedTcArr = data.relevance != null && data.relevance != "" ? data.relevance?.split(" ") : null;

  // 페이지
  return (
    <div className={ccss.noHeroContent}>
      <Link className={ccss.headerBtn} href={isOneChar ? "/cantonese" : "/cantonese/word"}>
        👈 {isOneChar ? "한자" : "단어"}
      </Link>
      <div className="flex mt-12">
        <CnTitle />
        <div className="ml-4">
          <h3 className={ccss.smLabel}>월음 (粵音)</h3>
          {/* use client에서 onClick을 사용할 수 없어서 별도 컴포넌트로 작성 */}
          <YueYinPlayer yueYinArr={yueYinArr} />
          <h3 className={ccss.smLabel}>발음</h3>
          <h3 className={ccss.contentBox}>{kr}</h3>
        </div>
      </div>
      <SubContent />
      {isHasData ? isOneChar == 1 ? <TcContent /> : <WordContent /> : <NoContent />}
      {data.detail != null && data.detail != undefined && data.detail != "" ? (
        <div className={ccss.textBox}>
          <h3 className="text-sm font-bold text-green-500">※ 비고 ※</h3>
          <p className="mx-4 my-2">{data.detail}</p>
        </div>
      ) : null}
      {relatedTcArr != null ? <Related /> : null}
      <div className="min-h-16"></div>
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
              return dbTc[id] == null ? (
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

  // 기본정보
  function SubContent() {
    // 간체자 & 보통화
    const cn = data.cn == undefined || data.cn == "" ? data.tc : data.cn;
    const mandarin = data.mandarin == undefined || data.mandarin == "" ? cn : data.mandarin;
    return (
      <div className="p-6 flex">
        <div>
          <h3 className={ccss.smLabel}>简体字 · 拼音</h3>
          <h3 className={ccss.smLabel}>普通话</h3>
          {isOneChar ? (
            <>
              <h3 className={ccss.smLabel}>한국 한자음</h3>
              <h3 className={ccss.smLabel}>UTF</h3>
            </>
          ) : null}
        </div>
        <div>
          <p className={ccss.contentBox}>{`${cn} ${data.pinyin}`}</p>
          <p className={ccss.contentBox}>{mandarin}</p>
          {isOneChar ? (
            <>
              <p className={ccss.contentBox}>{data.hanja}</p>
              <p className={ccss.contentBox}>{idsArr}</p>
            </>
          ) : null}
        </div>
      </div>
    );
  }

  // 한자 상세정보
  function TcContent() {
    // mean 부분 발음별 분리용 count
    let count = -1;
    return (
      <>
        <div className={ccss.cnCategoryBox}>구분 : {data.category}</div>
        {data.mean.split("#").map((mean) => {
          count++;
          return (
            <div className="border px-4 py-2" key={mean}>
              <p className="font-bold">{yueYinArr[count]}</p>
              {mean.split("/").map((text) => (
                <p className="py-1" key={text}>
                  · {text}
                </p>
              ))}
            </div>
          );
        })}
      </>
    );
  }

  // 단어 상세정보
  function WordContent() {
    return (
      <>
        <div className={ccss.cnCategoryBox}>구분 : {data.category}</div>
        <div className="border px-4 py-2">
          {data.mean.split("/").map((text) => (
            <p className="py-1" key={text}>
              · {text}
            </p>
          ))}
        </div>
      </>
    );
  }

  function Related() {
    return (
      <>
        <div className="my-8 h-2 w-full bg-green-50" />
        <h3 className="font-bold text-sm mb-4">관련 내용</h3>
        {relatedTcArr.map((word) => {
          const id = setIdFromTc(word);
          return word == data.tc ? null : isOneChar ? (
            dbTc[id] != null ? (
              <Link key={id} className={ccss.linkGreenText + " p-2 text-lg"} href={"/cantonese/" + id}>
                {word}
              </Link>
            ) : (
              <span key={id} className="p-2 text-lg">
                {word}
              </span>
            )
          ) : dbWord[id] != null ? (
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
