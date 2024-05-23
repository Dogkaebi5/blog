import Link from "next/link";
import { useState } from "react";

import { syllable } from "@controller/yueYin";
import { initialURL, syllableURL } from "@controller/urls";
import * as ccss from "@controller/cssName";

const JyutPingTable = () => {
  // 전체 월음, 성모, 운모표
  const yueYin = Object.keys(syllable.yueYin);
  const allInitials = Object.keys(syllable.initial);
  const allVowels = Object.keys(syllable.vowel);
  // 한자 리스트
  const hans = Object.values(Object.values(syllable.yueYin)).map((detail) => detail.han);
  // 표시되는 성모, 운모
  const [showInitials, setShowInitials] = useState(allInitials);
  const [showVowels, setShowVowels] = useState(allVowels);
  // 선택한 성모, 운모
  const [selectedInitial, setSelectedInitial] = useState("전체");
  const [selectedVowel, setSelectedVowelVowel] = useState("전체");
  // 월음-한자 표시 선택
  const [isHan, setIshan] = useState(false);
  // boxType
  const selectBoxTypes = {
    initial: { title: "聲母", value: selectedInitial, handle: handleInitial, data: allInitials },
    vowel: { title: "韻母", value: selectedVowel, handle: handleVowel, data: allVowels },
    tone: { title: "聲調", data: [1, 2, 3, 4, 5, 6] },
  };
  // 한자 리스트 index num
  let count = -1;

  function handleInitial(e) {
    setSelectedInitial(e.target.value);
    if (e.target.value == "전체") {
      setShowInitials(allInitials);
    } else {
      setShowInitials([e.target.value]);
    }
  }
  function handleVowel(e) {
    setSelectedVowelVowel(e.target.value);
    if (e.target.value == "전체") {
      setShowVowels(allVowels);
    } else {
      setShowVowels([e.target.value]);
    }
  }
  // toggle(checkbox) handler
  function handleIsHan(e) {
    setIshan(!isHan);
  }

  return (
    <div className="mt-2 scrollBarX overflow-x-scroll p-2 bg-gray-50 border rounded">
      <label className="relative inline-flex items-center cursor-pointer mt-4">
        <input type="checkbox" value={isHan} className="sr-only peer" onClick={handleIsHan} />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
        <span className="ms-3 text-sm font-bold text-green-600 dark:text-gray-300">음절/한자</span>
      </label>
      <div className={ccss.syllableSelectorsWrap}>
        <SelectorBox type="initial" />
        <SelectorBox type="vowel" />
        <SelectorBox type="tone" />
      </div>
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
  );

  function SelectorBox({ type }) {
    return (
      <div className={ccss.syllableSelectorBox}>
        <p className={ccss.syllablelable}>{selectBoxTypes[type].title}</p>
        <select className={ccss.syllableSelect} value={selectBoxTypes[type].value} onChange={selectBoxTypes[type].handle}>
          <option value="전체">전체</option>
          {selectBoxTypes[type].data.map((i) => (
            <option value={i} key={"select-" + i}>
              {i}
            </option>
          ))}
        </select>
      </div>
    );
  }
};

export default JyutPingTable;
