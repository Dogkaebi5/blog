import Link from "next/link";

import * as ccss from "@controller/cssName";
import dbTc from "@controller/readDbTc";
import dbWord from "@controller/readDbWord";
import { syllable } from "@controller/yueYin";
import { setTcFromId, splitIds } from "@controller/handleId";
import YueYinPlayer from "@components/YueYinPlayer";

// 기본 데이터 세팅
const noData = { tc: "-", yueYin: "-", cn: "-", pinyin: "-", mandarin: "-", hanja: "-", category: "-", mean: "-" };

// export let metadata = {};
export async function generateMetadata(props) {
  const id = props.params.id;
  const idsArr = splitIds(id);
  const data = idsArr.length == 1 ? dbTc[id] : dbWord[id];
  return {
    title: `DogKaeBi | ${data?.tc ?? setTcFromId(idsArr)} : ${data?.title ?? "-"}`,
    description: `한자 : [ ${data?.tc ?? setTcFromId(idsArr)} ] 의 광둥어 뜻 풀이`,
  };
}

// use client에서 에러 지속 발생, async로 변경
export default async function HanJa(props) {
  const id = props.params.id;
  const idsArr = splitIds(id);
  const char = setTcFromId(idsArr);
  const isOneChar = idsArr.length == 1;
  const isHasData = dbTc[id] != null || dbWord[id] != null;

  // firestore 데이터 받기 => ctrl로 통합 이동
  const data = isHasData ? (isOneChar ? dbTc[id] : dbWord[id]) : noData;

  // 월음 한개씩 array로 분리
  let yueYinArr = data.yueYin?.split(" ");

  // 발음 세팅
  const krSyllable = () => {
    // 초기 데이터가 아닌 경우 설정
    if (isHasData) {
      // 성조(숫자) 정규식으로 제거
      const syllableWithoutTones = data.yueYin.replace(/\d+/g, "").split(" ");
      // 한자(문자 1개) or 단어의 경우(단어는 , 있음)
      // 한자: 발음 return // 단어: 발음 map -> join
      return syllableWithoutTones.length == 1 ? syllable.yueYin[syllableWithoutTones[0]].pronunciation : syllableWithoutTones.map((syl) => syllable.yueYin[syl].pronunciation).join(" ");
    }
    return "-";
  };
  const kr = krSyllable();

  // 페이지
  return (
    <div className={ccss.noHeroContent}>
      <Link className={ccss.headerBtn} href={isOneChar ? "/cantonese" : "/cantonese/word"}>
        👈 {isOneChar ? "한자" : "단어"}
      </Link>
      <div className="flex mt-4">
        <div className={ccss.cnTitleBox}>
          <h1 className={isOneChar ? " text-8xl" : " text-7xl"}>{char}</h1>
        </div>
        <div className="ml-4">
          <p className={ccss.smLabel}>월음 (粵音)</p>
          {/* use client에서 onClick을 사용할 수 없어서 별도 컴포넌트로 작성 */}
          <YueYinPlayer yueYinArr={yueYinArr} />
          <p className={ccss.smLabel}>발음</p>
          <p className={ccss.contentBox}>{kr}</p>
        </div>
      </div>
      <SubContent />
      <div className="w-full bg-green-50 text-sm p-4 rounded">구분 : {data.category}</div>
      {isHasData ? isOneChar == 1 ? <TcContent /> : <WordContent /> : <NoContent />}
      {data.detail != null && data.detail != undefined && data.detail != "" ? (
        <div className="bg-gray-100 p-4 rounded-md my-4">
          ※ 추가내용 <br />
          {data.detail}
        </div>
      ) : null}
    </div>
  );

  function NoContent() {
    return <div className="py-10">아직 데이터가 없습니다.</div>;
  }

  function SubContent() {
    // 간체자 & 보통화
    const cn = data.cn == undefined || data.cn == "" ? data.tc : data.cn;
    const mandarin = data.mandarin == undefined || data.mandarin == "" ? cn : data.mandarin;
    return (
      <div className="p-6 flex">
        <div>
          <p className={ccss.smLabel}>简体字 · 拼音</p>
          <p className={ccss.smLabel}>普通话</p>
          {isOneChar ? (
            <>
              <p className={ccss.smLabel}>한국 한자음</p>
              <p className={ccss.smLabel}>UTF</p>
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

  // 한자 콘텐츠 컴포넌트
  function TcContent() {
    // mean 부분 발음별 분리용 count
    let count = -1;
    return (
      <>
        {data.mean.split("#").map((mean) => {
          count++;
          return (
            <div className="border px-4 py-2" key={mean}>
              <p className="font-bold">{yueYinArr[count]}</p>
              {mean.split("/").map((text) => {
                return (
                  <p className="py-1" key={text}>
                    · {text}
                  </p>
                );
              })}
            </div>
          );
        })}
      </>
    );
  }

  // 단어 콘텐츠 컴포넌트
  function WordContent() {
    return (
      <div className="border px-4 py-2">
        {data.mean.split("/").map((text) => (
          <p className="py-1" key={text}>
            · {text}
          </p>
        ))}
      </div>
    );
  }
}
