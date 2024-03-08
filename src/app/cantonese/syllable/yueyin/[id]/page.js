import { syllable, syllableURL } from "../../yueYin";
import { checkIsVowel } from "@/app/controller/checkYueYinType";
import * as ccss from "@/app/controller/cssName";
import Link from "next/link";
import YueYinPlayer from "@/app/components/YueYinPlayer";

export default function YueYin(props) {
  const yueYin = props.params.id;

  // 성모 운모 분리
  function splitYueYin() {
    if (checkIsVowel(yueYin)) return ["", yueYin];
    if (yueYin.startsWith("gw") || yueYin.startsWith("kw")) return [yueYin.substring(0, 2), yueYin.substring(2)];
    if (yueYin.startsWith("ng"))
      return yueYin.length == 2 ? ["", yueYin] : [yueYin.substring(0, 2), yueYin.substring(2)];
    if (yueYin.startsWith("m"))
      return yueYin.length == 1 ? ["", yueYin] : [yueYin.substring(0, 1), yueYin.substring(1)];
    return [yueYin.substring(0, 1), yueYin.substring(1)];
  }
  // 해당 데이터 찾기
  function matchData() {
    const data = syllable.yueYin;
    const keys = Object.keys(data);

    for (let i = 0; i < keys.length; i++) {
      if (keys[i] == yueYin) {
        return data[keys[i]];
      }
    }
  }

  let splitedYueYinArr = splitYueYin();
  let initial = splitedYueYinArr[0];
  let vowel = splitedYueYinArr[1];
  let data = matchData();
  let tones = data.tone;
  let yueYinArr = tones.map((tone) => yueYin + tone);

  return (
    <div className={ccss.noHeroContent}>
      <div className={ccss.headerBtnBlock}>
        <button className={ccss.headerBtn}>
          <Link href={syllableURL + initial}>&lt;&lt; 성모 [ {initial} ]</Link>
        </button>
        <button className={ccss.headerBtn}>
          <Link href={syllableURL + vowel}>운모 [ {vowel} ] &gt;&gt;</Link>
        </button>
      </div>
      <div className={ccss.mainBlock}>
        <div className="flex">
          <h1 className={ccss.alpTitle}>{yueYin}</h1>
          <div className={ccss.subBlock + " py-4"}>
            <p className="font-bold mb-2">월음 (粵音)</p>
            <p>발음 : [{data.pronunciation}]</p>
          </div>
        </div>
        <div className={ccss.subBlock + " pt-4"}>
          <p>성모 : {initial}</p>
          <p>운모 : {vowel}</p>
        </div>
        <hr className={ccss.hr} />
        <div className={ccss.subBlock}>
          <h2 className={ccss.h2}>성조</h2>
          <YueYinPlayer yueYinArr={yueYinArr} />
        </div>
      </div>
    </div>
  );
}
