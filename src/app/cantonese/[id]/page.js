"use client";

import { handleAudio } from "@/app/controller/handleAudio";
import * as ccss from "@/app/controller/cssName";
import { words } from "../hanja";
import syllable from "../syllable/yueYin";
import { setTcFromId, splitIds } from "@/app/controller/handleId";

export default function HanJa(props) {
  const phrases = ["一往無前", "一事無成", "一五一十", "一心一意", "一言為定"];

  const charClass = ccss.cnTitleBox + " text-8xl";
  const wordClass = ccss.cnTitleBox + " text-7xl";

  const params = props.params.id;

  const word = words[params] ?? {
    tc: "-",
    yueYin: "-",
    cn: "",
    mandarin: "-",
    hanja: "-",
    category: "-",
    mean: "-",
  };

  const idsArr = splitIds(params);
  const character = setTcFromId(idsArr);
  const yueYinArr = word.yueYin.split(" ");

  const krSyllable = () => {
    if (words[params] != null) {
      const syllableWithoutTones = word.yueYin.replace(/\d+/g, "").split(" ");
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
      <div className="p-4 ">
        <div className="flex items-center">
          <div className={character.length == 1 ? charClass : wordClass}>
            <h1 className="p-6">{character}</h1>
          </div>
          <div className="ml-4">
            <p className={ccss.smLabel}>월음 (粵音)</p>
            <div className="flex">
              {yueYinArr.map((yueYin) => (
                <p
                  className="text-sm py-4"
                  key={yueYin}
                  onClick={() => handleAudio(yueYin)}
                >
                  <span className={ccss.linkText}>{yueYin} 🔊</span>
                </p>
              ))}
            </div>
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
              <p className={ccss.contentBox}>{word.hanja}</p>
              <p className={ccss.contentBox}>
                {word.cn == "" ? word.tc : word.cn}
              </p>
              <p className={ccss.contentBox}>{word.mandarin}</p>
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
              <p className={ccss.contentBox}>{word.mandarin}</p>
              <p className={ccss.contentBox}>
                {word.cn == "" ? word.tc : word.cn}
              </p>
            </div>
          </div>
        )}
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
      {character.length == 1 ? (
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
      ) : null}
    </div>
  );
}
