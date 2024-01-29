"use client";

import { handleAudio } from "@/app/controller/handleAudio";

export default function HanJa(props) {
  const character = "一往無前";
  const yueYin = "jat1";
  const phrases = ["一往無前", "一事無成", "一五一十", "一心一意", "一言為定"];

  const contentClass = "bg-white px-3 py-2 text-center mt-1";
  const smTieleClass = "text-xs mt-2 font-bold";
  const titleClass = "bg-white flex justify-center items-center ";
  const singleCharacterClass = titleClass + "text-9xl";
  const characterClass = titleClass + "text-6xl col-span-2";

  return (
    <>
      <div className="mt-10 p-4 bg-slate-200">
        <p className="font-semibold mb-2">한자 (繁體字)</p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 ">
          <div
            className={
              character.length == 1 ? singleCharacterClass : characterClass
            }
          >
            <h1 className="">{character}</h1>
          </div>

          <div className="min-w-36">
            <p className={smTieleClass}>음절 (音節)</p>
            <p
              onClick={() => handleAudio(yueYin)}
              className={`${contentClass} underline hover:text-gray-400`}
            >
              {yueYin}
            </p>
            <p className={smTieleClass}>발음</p>
            <p className={contentClass}>얕</p>
          </div>
          <div className="min-w-36">
            <p className={smTieleClass}>간체자 (简体字)</p>
            <p className={contentClass}>一</p>
            <p className={smTieleClass}>보통화 (拼音)</p>
            <p className={contentClass}>yī</p>
          </div>
          <div className="min-w-36">
            <p className={smTieleClass}>한국 음·한자</p>
            <p className={contentClass}>한 일</p>
            <p className={smTieleClass}>UTF</p>
            <p className={contentClass}>{character.codePointAt(0)}</p>
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
    </>
  );
}
