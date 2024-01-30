"use client";
import { handleAudio } from "@/app/controller/handleAudio";
import syllable from "../../yueYin";
import { checkIsVowel } from "@/app/controller/checkYueYinType";
import * as ccss from "@/app/controller/cssName";
import Link from "next/link";

export default function YueYin(props) {
  const yueYin = props.params.id;

  function checkAlpha() {
    if (checkIsVowel(yueYin)) return ["", yueYin];
    if (yueYin.startsWith("gw") || yueYin.startsWith("kw"))
      return [yueYin.substring(0, 2), yueYin.substring(2)];
    if (yueYin.startsWith("ng")) {
      return yueYin.length == 2
        ? ["", yueYin]
        : [yueYin.substring(0, 2), yueYin.substring(2)];
    }
    if (yueYin.startsWith("m")) {
      return yueYin.length == 1
        ? ["", yueYin]
        : [yueYin.substring(0, 1), yueYin.substring(1)];
    }
    return [yueYin.substring(0, 1), yueYin.substring(1)];
  }

  function matchData() {
    const data = syllable.yueYin;
    const keys = Object.keys(data);

    for (let i = 0; i < keys.length; i++) {
      if (keys[i] == yueYin) {
        return data[keys[i]];
      }
    }
  }

  let initial = checkAlpha()[0];
  let vowel = checkAlpha()[1];
  let data = matchData();
  let tones = data.tone;
  const syllableURL = "/cantonese/syllable/initial/";

  return (
    <div className={ccss.noHeroContent}>
      <div className={ccss.headerBtnBlock}>
        <button className={ccss.headerBtn}>
          <Link href={syllableURL + initial}>&lt;&lt; 성모 [{initial}]</Link>
        </button>
        <button className={ccss.headerBtn}>
          <Link href={syllableURL + vowel}>운모 [{vowel}] &gt;&gt;</Link>
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
          {tones.map((tone) => {
            return (
              <p
                className={ccss.linkText}
                key={yueYin + tone}
                onClick={() => {
                  handleAudio(yueYin + tone);
                }}
              >
                {yueYin + tone} 🔊
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
