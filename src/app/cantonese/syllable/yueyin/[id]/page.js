"use client";
import { handleAudio } from "@/app/controller/handleAudio";
import syllable from "../../yueYin";
import { checkIsVowel } from "@/app/controller/checkYueYinType";

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

  return (
    <div className="mt-6 p-4">
      <div className="flex">
        <h1 className="p-8 bg-slate-100 inline-block rounded-md font-bold text-6xl">
          {yueYin}
        </h1>
        <div className="p-2">
          <p className="font-bold mb-2">월음 (粵音)</p>
          <p>발음 : [{data.pronunciation}]</p>
        </div>
      </div>
      <div className="my-4 p-2">
        <p>성모 : {initial}</p>
        <p>운모 : {vowel}</p>
      </div>
      <hr className="mb-4" />
      {tones.map((tone) => {
        return (
          <p
            key={yueYin + tone}
            className="p-2 m-2 hover:bg-slate-50"
            onClick={() => {
              handleAudio(yueYin + tone);
            }}
          >
            <span className="text-blue-500 underline">{yueYin + tone}</span> 🔊
          </p>
        );
      })}
    </div>
  );
}
