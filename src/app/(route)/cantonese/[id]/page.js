import * as ccss from "@controller/cssName";
import dbTc from "@controller/readDbTc";
import dbWord from "@controller/readDbWord";
import { syllable } from "@controller/yueYin";
import { setTcFromId, splitIds } from "@controller/handleId";
import YueYinPlayer from "@components/YueYinPlayer";
import Link from "next/link";

// use client에서 에러 지속 발생, async로 변경
export default async function HanJa(props) {
  // params 5글자씩 분리, 각 한자 추출
  const params = props.params.id;
  const idsArr = splitIds(params);
  // Param Id를 char로 전환. character는 array
  const character = setTcFromId(idsArr);
  const isOneChar = character.length == 1;
  const isHasData = isOneChar ? dbTc[params] != null : dbWord[params] != null;

  // firestore 데이터 받기 => ctrl로 통합 이동
  // 기본 데이터 세팅
  const data = isHasData
    ? isOneChar
      ? dbTc[params]
      : dbWord[params]
    : {
        tc: "-",
        yueYin: "-",
        cn: "-",
        pinyin: "-",
        mandarin: "-",
        hanja: "-",
        category: "-",
        mean: "-",
      };

  // 월음 한개씩 array로 분리
  let yueYinArr = data.yueYin?.split(" ");

  // 발음 세팅
  const krSyllable = () => {
    // 초기 데이터가 아닌 경우 설정
    if (data.yueYin != "-") {
      // 성조(숫자) 정규식으로 제거
      const syllableWithoutTones = data.yueYin.replace(/\d+/g, "").split(" ");
      // 한자(문자 1개) or 단어의 경우(단어는 , 있음)
      // 한자: 해당 발음 return
      // 단어: map으로 해당 발음 array 생성 및 join으로 string으로 전환
      if (syllableWithoutTones.length == 1) {
        return syllable.yueYin[syllableWithoutTones[0]].pronunciation;
      } else {
        return syllableWithoutTones.map((syl) => syllable.yueYin[syl].pronunciation).join(", ");
      }
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
          <h1 className={isOneChar ? " text-8xl" : " text-7xl"}>{character}</h1>
        </div>
        <div className="ml-4">
          <p className={ccss.smLabel}>월음 (粵音)</p>
          {/* use client에서 onClick을 사용할 수 없어서 별도 컴포넌트로 작성 */}
          <YueYinPlayer yueYinArr={yueYinArr} />
          <p className={ccss.smLabel}>발음</p>
          <p className={ccss.contentBox}>{isOneChar ? kr : kr.replace(",", " ")}</p>
        </div>
      </div>
      {isHasData ? isOneChar == 1 ? <TcContent data={data} ids={idsArr} yueYin={yueYinArr} /> : <WordContent data={data} yueYin={yueYinArr} /> : <NoContent />}
    </div>
  );
}

function NoContent() {
  return <div className="py-10">아직 데이터가 없습니다.</div>;
}

// 한자 콘텐츠 컴포넌트
function TcContent({ data, ids, yueYin }) {
  // 간체자 & 보통화
  const cn = data.cn == "" ? data.tc : data.cn;
  const mandarin = data.mandarin == "" ? cn : data.mandarin;
  // mean 부분 발음별 분리용 count
  let count = -1;
  return (
    <>
      <div className="p-6 flex">
        <div>
          <p className={ccss.smLabel}>한국 한자음</p>
          <p className={ccss.smLabel}>简体字 · 拼音</p>
          <p className={ccss.smLabel}>普通话</p>
          <p className={ccss.smLabel}>UTF</p>
        </div>
        <div>
          <p className={ccss.contentBox}>{data.hanja}</p>
          <p className={ccss.contentBox}>{`${cn} ${data.pinyin}`}</p>
          <p className={ccss.contentBox}>{mandarin}</p>
          <p className={ccss.contentBox}>{ids}</p>
        </div>
      </div>
      <div className="w-full bg-green-50 text-sm p-4 rounded">구분 : {data.category}</div>
      <hr className="border-gray-400" />
      {data.mean.split("#").map((mean) => {
        count++;
        return (
          <div className="border px-4 py-2" key={mean}>
            <p className="font-bold">{yueYin[count]}</p>
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
      {data.detail != null && data.detail != undefined ? (
        <div className="bg-gray-100 p-4 rounded-md my-4">
          ※ 추가내용 <br />
          {data.detail}
        </div>
      ) : null}
    </>
  );
}

// 단어 콘텐츠 컴포넌트
function WordContent({ data }) {
  const cn = data.cn == "" ? data.tc : data.cn;
  const mandarin = data.mandarin == "" ? cn : data.mandarin;
  return (
    <>
      <div className="p-6 flex">
        <div>
          <p className={ccss.smLabel}>简体字 · 拼音</p>
          <p className={ccss.smLabel}>普通话</p>
        </div>
        <div>
          <p className={ccss.contentBox}>{`${cn} ${data.pinyin}`}</p>
          <p className={ccss.contentBox}>{mandarin}</p>
        </div>
      </div>
      <div className="w-full bg-green-50 text-sm p-4 rounded">구분 : {data.category}</div>
      <hr className="border-gray-400" />
      <div className="px-4 py-2">
        {data.mean.split("/").map((text) => (
          <p className="py-1" key={text}>
            · {text}
          </p>
        ))}
      </div>
    </>
  );
}
