"use client";
import { useEffect, useState } from "react";
import syllable from "./yueYin";
import Link from "next/link";
import Heros from "@/app/components/Heros";
import SubNav from "@/app/components/SubNav";
import * as ccss from "@/app/controller/cssName";

export default function Syllable() {
  const [initials, setInitials] = useState([]);
  const [vowels, setVowels] = useState([]);
  const [initial, setInitial] = useState("전체");
  const [vowel, setVowel] = useState("전체");
  const [isHan, setIshan] = useState(false);

  const yueYin = Object.keys(syllable.yueYin);
  const initialOptions = Object.keys(syllable.initial);
  const vowelOptions = Object.keys(syllable.vowel);
  const yueYinDetails = Object.values(Object.values(syllable.yueYin));
  const hans = yueYinDetails.map((detail) => detail.han);
  let count = -1;

  const simpleSyllabelURL = "/cantonese/syllable/simple";
  const initialURL = "/cantonese/syllable/initial/";
  const yueYinURL = "/cantonese/syllable/yueyin/";

  useEffect(() => {
    setInitials(Object.keys(syllable.initial));
    setVowels(Object.keys(syllable.vowel));
  }, []);

  const handleInitial = (e) => {
    setInitial(e.target.value);
    if (e.target.value == "전체") {
      setInitials(Object.keys(syllable.initial));
    } else {
      setInitials([e.target.value]);
    }
  };
  const handleVowel = (e) => {
    setVowel(e.target.value);
    if (e.target.value == "전체") {
      setVowels(Object.keys(syllable.vowel));
    } else {
      setVowels([e.target.value]);
    }
  };

  const handleIsHan = (e) => {
    setIshan(!isHan);
  };

  return (
    <>
      <Heros />
      <SubNav />
      <div className="text-center">
        <div className={ccss.syllableWrap}>
          <div className={ccss.syllableDetail}>
            <span className={ccss.h2}>월음(粵音)</span>은 <br />
            광둥어 발음 표기법을 뜻한다. <br />
            중국도 광둥어 전공은 있지만 통일된 학습법이 있지는 않다. <br />
            즉 학파와 학교마다 표기법이 다른 경우가 많다. <br />
            <br />
            월음의 대표적인 표기법은 : <br />
            (1) 월병(粵拼), <br />
            (2) 황석릉(黃錫凌), <br />
            (3) 예일(耶魯), <br />
            (4) 광저우(廣州), <br />
            (5) IPA, <br />
            (6) 교원(教院), <br />
            (7) 유석상(劉錫祥) 등이 있다. <br />
            <br />본 사이트에서 사용하는 월음은{" "}
            <span className="bg-green-100 p-1 rounded-xl ">월병(粵拼)</span>
            이다.
          </div>
          <div className={ccss.syllableSelectorsWrap}>
            <div className={ccss.syllableSelectorBox}>
              <p className={ccss.syllablelable}>성모(聲母)</p>
              <select
                value={initial}
                className={ccss.syllableSelect}
                onChange={handleInitial}
              >
                <option value="전체">전체</option>
                {initialOptions.map((i) => (
                  <option value={i} key={i + 1}>
                    {i}
                  </option>
                ))}
              </select>
              <Link href={"/cantonese/syllable/initial"}>
                <p className={ccss.linkGreenText}>More &gt;&gt;</p>
              </Link>
            </div>
            <div className={ccss.syllableSelectorBox}>
              <p className={ccss.syllablelable}>운모(韻母)</p>
              <select
                value={vowel}
                className={ccss.syllableSelect}
                onChange={handleVowel}
              >
                <option value="전체">전체</option>
                {vowelOptions.map((v) => (
                  <option value={v} key={v + 1}>
                    {v}
                  </option>
                ))}
              </select>
              <Link href={"/cantonese/syllable/vowel"}>
                <p className={ccss.linkGreenText}>More &gt;&gt;</p>
              </Link>
            </div>
            <div className={ccss.syllableSelectorBox}>
              <p className={ccss.syllablelable}>성조(聲調)</p>
              <select className={ccss.syllableSelect}>
                <option>전체</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
              </select>
              <Link href={"/cantonese/syllable/tone"}>
                <p className={ccss.linkGreenText}>More &gt;&gt;</p>
              </Link>
            </div>
          </div>
          <Link href={simpleSyllabelURL}>
            <div className={ccss.linkGreenText}>월음 간략 버전 &gt;&gt;</div>
          </Link>
          <label className="relative inline-flex items-center cursor-pointer mt-4">
            <input
              type="checkbox"
              value={isHan}
              className="sr-only peer"
              onClick={handleIsHan}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              음절/한자
            </span>
          </label>
        </div>

        <table className="mx-auto">
          <tbody>
            <tr>
              <td className={ccss.thRed}></td>
              {initials.map((i) => (
                <td
                  className={ccss.thRed + " hover:underline underline-offset-4"}
                  key={i + 2}
                >
                  <Link href={initialURL + i}>{i}</Link>
                </td>
              ))}
            </tr>
            {vowels.map((v) => {
              return (
                <tr key={v}>
                  <td
                    className={
                      ccss.thBlue + " hover:underline underline-offset-4"
                    }
                  >
                    <Link href={initialURL + v}>{v}</Link>
                  </td>
                  {initials.map((i) => {
                    let init;
                    i == "-" ? (init = "") : (init = i);
                    if (yueYin.includes(init + v)) count++;
                    return (
                      <td className="text-sm" key={i + 3}>
                        {yueYin.includes(init + v) ? (
                          <Link
                            href={yueYinURL + init + v}
                            className={
                              "px-0.5 + hover:underline underline-offset-4"
                            }
                          >
                            {isHan ? hans[count] : init + v}
                          </Link>
                        ) : (
                          ""
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
