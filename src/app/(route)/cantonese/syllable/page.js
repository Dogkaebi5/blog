"use client";
import { useState } from "react";
import { syllable } from "@controller/yueYin";
import { simpleSyllableURL, initialURL, vowelURL, toneURL, syllableURL } from "@controller/urls";
import Link from "next/link";
import Heros from "@components/Heros";
import SubNav from "@components/SubNav";
import * as ccss from "@controller/cssName";

export default function Syllable() {
  // 전체 월음, 성모, 운모표
  const yueYin = Object.keys(syllable.yueYin);
  const allInitials = Object.keys(syllable.initial);
  const allVowels = Object.keys(syllable.vowel);
  // 표시되는 성모, 운모
  const [showInitials, setShowInitials] = useState(allInitials);
  const [showVowels, setShowVowels] = useState(allVowels);
  // 선택한 성모, 운모
  const [selectedInitial, setSelectedInitial] = useState("전체");
  const [selectedVowel, setSelectedVowelVowel] = useState("전체");
  // 월음-한자 표시 선택
  const [isHan, setIshan] = useState(false);
  // 한자 리스트
  const hans = Object.values(Object.values(syllable.yueYin)).map((detail) => detail.han);
  // 한자 리스트 index num
  let count = -1;

  // selector handlers
  const handleInitial = (e) => {
    setSelectedInitial(e.target.value);
    if (e.target.value == "전체") {
      setShowInitials(allInitials);
    } else {
      setShowInitials([e.target.value]);
    }
  };
  const handleVowel = (e) => {
    setSelectedVowelVowel(e.target.value);
    if (e.target.value == "전체") {
      setShowVowels(allVowels);
    } else {
      setShowVowels([e.target.value]);
    }
  };
  // toggle(checkbox) handler
  const handleIsHan = (e) => {
    setIshan(!isHan);
  };

  return (
    <>
      <Heros path={"cantonese"} />
      <SubNav path={"cantonese"} />
      <div className="text-center mb-8 max-w-4xl">
        <div className={ccss.syllableWrap}>
          <div className={ccss.syllableDetail}>
            <span className={ccss.h2}>월음(粵音)</span>은 <br />
            광둥어 발음 표기법을 뜻한다. <br />
            중국도 광둥어 전공은 있지만 통일된 학습법이 있지는 않다. <br />
            즉 학파와 학교마다 표기법이 다른 경우가 많다. <br />
            <br />
            월음의 대표적인 표기법은 : <br />
            ① 월병(粵拼), ② 황석릉(黃錫凌), ③ 예일(耶魯), ④ 광저우(廣州), ⑤ IPA, ⑥ 교원(教院), ⑦ 유석상(劉錫祥) 등이
            있다. <br />
            <br />본 사이트에서 사용하는 월음은 <span className="bg-green-100 p-1 rounded-xl ">월병(粵拼)</span>
            이다.
          </div>
          <div className={ccss.syllableSelectorsWrap}>
            <div className={ccss.syllableSelectorBox}>
              <p className={ccss.syllablelable}>성모(聲母)</p>
              <select value={selectedInitial} className={ccss.syllableSelect} onChange={handleInitial}>
                <option value="전체">전체</option>
                {allInitials.map((i) => (
                  <option value={i} key={i + 1}>
                    {i}
                  </option>
                ))}
              </select>
              <Link href={initialURL}>
                <p className={ccss.linkGreenText}>More &gt;&gt;</p>
              </Link>
            </div>
            <div className={ccss.syllableSelectorBox}>
              <p className={ccss.syllablelable}>운모(韻母)</p>
              <select value={selectedVowel} className={ccss.syllableSelect} onChange={handleVowel}>
                <option value="전체">전체</option>
                {allVowels.map((v) => (
                  <option value={v} key={v + 1}>
                    {v}
                  </option>
                ))}
              </select>
              <Link href={vowelURL}>
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
              <Link href={toneURL}>
                <p className={ccss.linkGreenText}>More &gt;&gt;</p>
              </Link>
            </div>
          </div>
          <Link href={simpleSyllableURL}>
            <div className={ccss.linkGreenText + " mt-2 text-right"}>월음 간략 버전 &gt;&gt;</div>
          </Link>
          {/* toggle */}
          <label className="relative inline-flex items-center cursor-pointer mt-4">
            <input type="checkbox" value={isHan} className="sr-only peer" onClick={handleIsHan} />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">음절/한자</span>
          </label>
        </div>

        <div className="scrollBarX overflow-x-scroll p-2 bg-gray-50">
          <table className="mx-auto bg-white">
            <tbody>
              <tr>
                {/* 첫줄 첫 빈칸 */}
                <td className={ccss.thRed}></td>
                {
                  /* 첫줄 성모 */
                  showInitials.map((i) => (
                    <td className={ccss.thRed + ccss.tableLink} key={i + 2}>
                      <Link href={initialURL + i}>{i}</Link>
                    </td>
                  ))
                }
              </tr>
              {
                /* 첫열 운모 */
                showVowels.map((v) => {
                  return (
                    <tr key={v}>
                      <td className={ccss.thBlue + ccss.tableLink}>
                        <Link href={initialURL + v}>{v}</Link>
                      </td>
                      {
                        /* 월음 유무 확인 및 테이블 작성 */
                        showInitials.map((i) => {
                          let init;
                          i == "-" ? (init = "") : (init = i);
                          if (yueYin.includes(init + v)) count++;
                          return (
                            <td className="text-sm" key={i + 3}>
                              {yueYin.includes(init + v) ? (
                                <Link href={syllableURL + init + v} className={"px-0.5" + ccss.tableLink}>
                                  {isHan ? hans[count] : init + v}
                                </Link>
                              ) : (
                                ""
                              )}
                            </td>
                          );
                        })
                      }
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
