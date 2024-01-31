"use client";

import { handleAudio } from "@/app/controller/handleAudio";
import * as ccss from "@/app/controller/cssName";

export default function HanJa(props) {
  const character = "一";
  const yueYin = "jat1";
  const phrases = ["一往無前", "一事無成", "一五一十", "一心一意", "一言為定"];
  const charClass = ccss.cnTitleBox + " text-9xl";
  const wordClass = ccss.cnTitleBox + " text-6xl col-span-2";

  return (
    <div className={ccss.noHeroContent}>
      <div className="p-4 bg-slate-200">
        <p className={ccss.h3}>한자 (繁體字)</p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 ">
          <div className={character.length == 1 ? charClass : wordClass}>
            <h1 className="">{character}</h1>
          </div>

          <div className="min-w-36">
            <p className={ccss.smLabel}>음절 (音節)</p>
            <p onClick={() => handleAudio(yueYin)} className={ccss.contentBox}>
              <span className={ccss.linkText}>{yueYin}</span> 🔊
            </p>
            <p className={ccss.smLabel}>발음</p>
            <p className={ccss.contentBox}>얏</p>
          </div>
          <div className="min-w-36">
            <p className={ccss.smLabel}>간체자 (简体字)</p>
            <p className={ccss.contentBox}>一</p>
            <p className={ccss.smLabel}>보통화 (拼音)</p>
            <p className={ccss.contentBox}>yī</p>
          </div>
          <div className="min-w-36">
            <p className={ccss.smLabel}>한국 음·한자</p>
            <p className={ccss.contentBox}>한 일</p>
            <p className={ccss.smLabel}>UTF</p>
            <p className={ccss.contentBox}>{character.codePointAt(0)}</p>
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-50">
        <p className="text-sm p-4">
          구분 : <span>숫자</span>
        </p>
      </div>
      <hr className="border-gray-400" />
      <div className="p-4">
        <p>1. 숫자 일(1), 하나</p>
      </div>
      <hr className="border-gray-400" />
      <div className="p-4">
        <p className="font-semibold mb-4">성어</p>
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
    </div>
  );
}
