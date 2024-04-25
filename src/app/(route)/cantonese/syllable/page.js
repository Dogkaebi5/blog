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

  const syllableDescription = `<br/>광둥어 발음과 표기법을 뜻한다.
<br/>중국도 광둥어 전공은 있지만 통일된 학습법이 있지는 않다.
<br/>즉 학파와 학교마다 표기법이 다른 경우가 많다.
<br/><br/>월음의 대표적인 표기법은 :
<br/>① 월병(粵拼), ② 황석릉(黃錫凌), ③ 예일(耶魯), ④ 광저우(廣州), ⑤ IPA, ⑥ 교원(教院), ⑦ 유석상(劉錫祥) 등이 있다.
<br/>본 사이트에서 사용하는 월음은 월병
`;

  const SelectorBox = ({ type }) => {
    let data = {};
    if (type == "i") {
      data.title = "성모(聲母)";
      data.value = selectedInitial;
      data.handle = handleInitial;
      data.data = allInitials;
      data.url = initialURL;
    }
    if (type == "v") {
      data.title = "운모(韻母)";
      data.value = selectedVowel;
      data.handle = handleVowel;
      data.data = allVowels;
      data.url = vowelURL;
    }
    if (type == "t") {
      data.title = "성조(聲調)";
      data.value;
      data.handle;
      data.data = [1, 2, 3, 4, 5, 6];
      data.url = toneURL;
    }

    return (
      <div className={ccss.syllableSelectorBox}>
        <p className={ccss.syllablelable}>{data.title}</p>
        <select className={ccss.syllableSelect} value={data.value} onChange={data.handle}>
          <option value="전체">전체</option>
          {data.data.map((i) => (
            <option value={i} key={"select-" + i}>
              {i}
            </option>
          ))}
        </select>
        <Link href={data.url} className={ccss.linkGreenText + " text-sm underline"}>
          {data.title + " 자세히➡️"}
        </Link>
      </div>
    );
  };

  return (
    <>
      <Heros path="tc" />
      <SubNav path="tc" slug="syllable" />
      <div className="text-center mb-8 max-w-4xl">
        <div className={ccss.syllableWrap}>
          <div className={ccss.syllableDetail}>
            <span className={ccss.h2}>월음(粵音)</span>
            <span dangerouslySetInnerHTML={{ __html: syllableDescription }} />
            <span className=" bg-green-100 p-1/2 rounded-xl ">(粵拼)</span>이다.
            <Link className={ccss.linkGreenText + " text-sm block mt-2"} href={simpleSyllableURL}>
              월음 간략 설명 ➡️
            </Link>
          </div>
          <div className={ccss.syllableSelectorsWrap}>
            <SelectorBox type="i" />
            <SelectorBox type="v" />
            <SelectorBox type="t" />
          </div>
          {/* toggle */}
        </div>
        <div className="mt-2 scrollBarX overflow-x-scroll p-2 bg-gray-100 rounded">
          <label className="relative inline-flex items-center cursor-pointer my-4">
            <input type="checkbox" value={isHan} className="sr-only peer" onClick={handleIsHan} />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">음절/한자</span>
          </label>
          <table className="mx-auto bg-white">
            <tbody>
              <tr>
                {/* 첫줄 첫칸 */}
                <td className={ccss.thRed}></td>
                {/* 성모 */}
                {showInitials.map((i) => (
                  <td className={ccss.thRed + ccss.tableLink} key={"th-" + i}>
                    <Link href={initialURL + i}>{i}</Link>
                  </td>
                ))}
              </tr>
              {showVowels.map((v) => {
                return (
                  <tr key={"th-" + v}>
                    {/* 첫열 운모 */}
                    <td className={ccss.thBlue + ccss.tableLink}>
                      <Link href={initialURL + v}>{v}</Link>
                    </td>
                    {/* 월음 유무 확인 및 테이블 작성 */}
                    {showInitials.map((i) => {
                      let init;
                      i == "-" ? (init = "") : (init = i);
                      if (yueYin.includes(init + v)) count++;
                      return (
                        <td className="text-sm" key={"tb-" + i}>
                          {yueYin.includes(init + v) ? (
                            <Link href={syllableURL + init + v} className={"px-0.5" + ccss.tableLink}>
                              {isHan ? hans[count] : init + v}
                            </Link>
                          ) : null}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
