import * as ccss from "@/app/controller/cssName";
import syllable from "../syllable/yueYin";
import { setTcFromId, splitIds } from "@/app/controller/handleId";
import { firestore } from "@/app/controller/firebase";
import { doc, getDoc } from "firebase/firestore/lite";
import YueYinPlayer from "@/app/components/YueYinPlayer";

////////
// use client에서 에러 지속 발생, async로 변경

export default async function HanJa(props) {
  // params 5글자씩 분리, 각 한자 추출
  const params = props.params.id;
  const idsArr = splitIds(params);
  const character = setTcFromId(idsArr);

  //firestore 데이터 받기
  const getData = async () => {
    const docRef = doc(firestore, "tc", params);
    try {
      const snapshot = await getDoc(docRef);
      console.log("Success");
      return snapshot.data();
    } catch (err) {
      console.error("Error :", err);
    }
  };
  let data = await getData();

  // 데이터가 없을 때 데이터 초기화
  if (data == null || data == undefined) {
    data = {
      tc: "-",
      yueYin: "-",
      cn: "-",
      mandarin: "-",
      hanja: "-",
      category: "-",
      mean: "-",
    };
  }
  // 월음 한개씩 array로 분리
  let yueYinArr = data.yueYin.split(" ");
  // 임시 단어 리스트
  const phrases = ["一往無前", "一事無成", "一五一十", "一心一意", "一言為定"];

  // 발음 세팅
  const krSyllable = () => {
    // 초기 데이터가 아닌 경우 설정
    if (data.yueYin != "-") {
      // 성조(숫자) 정규식으로 제거
      const syllableWithoutTones = data.yueYin.replace(/\d+/g, "").split(" ");
      // 한자(문자 1개) or 단어의 경우
      // 한자: 해당 발음 return
      // 단어: map으로 해당 발음 array 생성 및 join으로 string으로 전환
      if (syllableWithoutTones.length == 1) {
        return syllable.yueYin[syllableWithoutTones[0]].pronunciation;
      } else {
        return syllableWithoutTones
          .map((syl) => syllable.yueYin[syl].pronunciation)
          .join(" ");
      }
    }
    return "-";
  };

  return (
    <div className={ccss.noHeroContent}>
      <div className="flex">
        <div className={ccss.cnTitleBox}>
          <h1 className={character.length == 1 ? " text-8xl" : " text-7xl"}>
            {character}
          </h1>
        </div>
        <div className="ml-4">
          <p className={ccss.smLabel}>월음 (粵音)</p>
          {/* use client에서 onClick을 사용할 수 없어서 별도 컴포넌트로 작성 */}
          <YueYinPlayer yueYinArr={yueYinArr} />
          <p className={ccss.smLabel}>발음</p>
          <p className={ccss.contentBox}>{krSyllable()}</p>
        </div>
      </div>
      {character.length == 1 ? (
        <div className="p-6 flex">
          <div>
            <p className={ccss.smLabel}>한국 음·한자</p>
            <p className={ccss.smLabel}>간체자 (简体字)</p>
            <p className={ccss.smLabel}>보통화 (拼音)</p>
            <p className={ccss.smLabel}>UTF</p>
          </div>
          <div>
            <p className={ccss.contentBox}>{data.hanja}</p>
            <p className={ccss.contentBox}>
              {data.cn == "" ? data.tc : data.cn}
            </p>
            <p className={ccss.contentBox}>{data.mandarin}</p>
            {character.length == 1 && (
              <p className={ccss.contentBox}>{idsArr[0]}</p>
            )}
          </div>
        </div>
      ) : (
        <div className="p-6 flex">
          <div>
            <p className={ccss.smLabel}>拼音</p>
            <p className={ccss.smLabel}>普通话</p>
          </div>
          <div>
            <p className={ccss.contentBox}>{data.mandarin}</p>
            <p className={ccss.contentBox}>
              {
                // 간체자가 없으면 원래 한자 표시
                data.cn == "" ? data.tc : data.cn
              }
            </p>
          </div>
        </div>
      )}

      <div className="w-full bg-green-50 text-sm p-4 rounded">
        구분 : {data.category}
      </div>
      <hr className="border-gray-400" />
      <div className="p-4">
        {
          // TODO: html 태그 사용 여부?
          // 임시 / 으로 줄 바꿈
          data.mean.split("/").map((text) => {
            return (
              <p className="py-1" key={text}>
                · {text}
              </p>
            );
          })
        }
      </div>
      <hr className="border-gray-400" />
      {character.length == 1 ? (
        <div className="p-4">
          <p className="font-semibold mb-4">단어</p>
          <p>
            {phrases.map((phrase) => {
              return (
                <span key={phrase}>
                  <span className="text-blue-600">{phrase}</span>
                  <span> , </span>
                </span>
              );
            })}
          </p>
          <hr />
        </div>
      ) : null}
    </div>
  );
}
