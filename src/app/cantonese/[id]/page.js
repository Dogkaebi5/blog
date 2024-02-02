"use client";

import { handleAudio } from "@/app/controller/handleAudio";
import * as ccss from "@/app/controller/cssName";
import { words } from "../hanja";

export default function HanJa(props) {
  const phrases = ["一往無前", "一事無成", "一五一十", "一心一意", "一言為定"];

  const charClass = ccss.cnTitleBox + " text-8xl";
  const wordClass = ccss.cnTitleBox + " text-7xl col-span-2";

  const params = props.params.id;
  const utfIds = params.split("-");
  const character = utfIds.map((utf) => String.fromCodePoint(utf));
  const word = words[params];

  return (
    <div className={ccss.noHeroContent}>
      <div className="p-4 ">
        <div className="flex items-center">
          <div className={character.length == 1 ? charClass : wordClass}>
            <h1 className="p-6">{character}</h1>
          </div>
          <div className="ml-4">
            <p className={ccss.smLabel}>월음 (粵音)</p>
            <p
              onClick={() => handleAudio(word.syllable)}
              className={ccss.contentBox}
            >
              <span className={ccss.linkText}>{word.syllable} 🔊</span>
            </p>
            <p className={ccss.smLabel}>발음</p>
            <p className={ccss.contentBox}>{word.krSyllable}</p>
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
              <p className={ccss.contentBox}>{word.hanja}</p>
              <p className={ccss.contentBox}>
                {word.cn == "" ? word.tc : word.cn}
              </p>
              <p className={ccss.contentBox}>{word.mandarin}</p>
              {character.length == 1 && (
                <p className={ccss.contentBox}>{utfIds[0]}</p>
              )}
            </div>
          </div>
        ) : null}
      </div>
      <div className="w-full bg-gray-50">
        <p className="text-sm p-4">
          구분 : <span>{word.category}</span>
        </p>
      </div>
      <hr className="border-gray-400" />
      <div className="p-4">
        {word.mean.split("/").map((text) => {
          return (
            <p className="py-1" key={text}>
              · {text}
            </p>
          );
        })}
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
