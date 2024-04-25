import Link from "next/link";
import { syllable } from "@controller/yueYin";
import { initialURL, syllableURL, vowelURL } from "@controller/urls";
import * as ccss from "@controller/cssName";

export default function Initial() {
  const initials = Object.keys(syllable.initial);
  const initialTable = [
    ["中文2", "塞音 (清)2", "塞擦音 (清)2", "鼻音 (濁)", "邊音 (濁)", "擦音 (清)", "半元音"],
    ["발음 분류2", "청음2", "청음2", "탁음", "탁음", "청음", "-"],
    ["발음2", "파열음\n(내쉼)", "파열음\n(내쉼X)", "파찰음\n(내쉼)", "파찰음\n(내쉼X)", "코음", "옆음", "마찰음", "반원음"],
    ["2입", "입술", "0b 波", "0p 婆", "", "", "0m 摸", "", "", "0w 華"],
    ["입술, 이빨", "", "", "", "", "", "", "0f 科", ""],
    ["5혀", "끝", "0d 多", "0t 拖", "", "", "0n 挪", "0l 羅", "", ""],
    ["옆", "", "", "0z 知", "0c 雌", "", "", "0s 思", ""],
    ["몸", "", "", "", "", "", "", "", "0j 也"],
    ["뿌리", "0g 哥", "0k 卡", "", "", "0ng 我", "", "", ""],
    ["뿌리 원순", "0gw 姑", "0kw 箍", "", "", "", "", "", ""],
    ["목2", "", "", "", "", "", "", "0h 何", ""],
  ];

  return (
    <div className={ccss.noHeroContent}>
      <div className={ccss.headerBtnBlock}>
        <Link className={ccss.headerBtn} href={syllableURL}>
          👈 음절
        </Link>
        <Link className={ccss.headerBtn} href={vowelURL}>
          운모 👉
        </Link>
      </div>
      <div className={ccss.mainBlock}>
        <h1 className={ccss.h1}>성모(聲母)</h1>
        <div className={ccss.textBox}>
          성모는 한국어의 자음과 비슷한 개념이다.
          <br /> 광둥어의 성모는 총 19개로 구성되어 있다.
          <br /> ([ - ]은 무음이다)
          <br />
          <br /> 광둥어에만 있는 개념이 아닌 중국어 발음에 공통적으로 있다.
          <br /> 보통화 병음(拼音)에서도 첫 발음인 알파벳을 성모라고 칭한다.
        </div>
        <hr className={ccss.hr} />
        <div className="px-4">
          <h2 className={ccss.h2}>성모 종류</h2>
          <div className={ccss.alpCardWrap}>
            {initials.map((initial) => (
              <Link href={initialURL + initial} key={initial} className={ccss.alpCardOutBox}>
                <h2 className={ccss.alpCardInBox}>{initial}</h2>
              </Link>
            ))}
          </div>
        </div>
        <hr className={ccss.hr} />
        <div className={ccss.subBlock}>
          <h2 className={ccss.h2}>성모 발음</h2>
          <div className="text-sm p-4 mt-2 shadow">
            한국어와 발음 구분이 다르다.
            <br /> 대부분 언어의 구분은 : 치음, 치경음, 치경구개음, 설순음, 구개수음
            <br /> 광둥어는 입, 혀, 목으로 구분하고
            <br /> 밑처럼 또 나누어서 구분한다
            <br />
            <br />• 입술 : b, p, m, w
            <br />• 앞니와 입술 : F
            <br />• 혀 끝 : d, t, n, l
            <br />• 혀 옆 : z, c, s
            <br />• 혀 몸 : j
            <br />• 혀 뿌리 : g, k, ng
            <br />• 혀 뿌리, 둥근 입 : gw, kw
            <br />• 목 : h
          </div>
          <div className="mt-2 scrollBarX overflow-x-scroll bg-gray-100 rounded">
            <table className="mx-auto my-2 bg-white">
              <tbody className="initial-table">
                {initialTable.map((row) => {
                  return (
                    <tr key={"r" + row[0]}>
                      {row.map((text) => {
                        return text.endsWith("2") ? (
                          <td key={text} colspan="2">
                            {text.split("2")[0]}
                          </td>
                        ) : text.startsWith("2") ? (
                          <td key={text} rowspan="2">
                            {text.split("2")[1]}
                          </td>
                        ) : text.startsWith("5") ? (
                          <td key={text} rowspan="5">
                            {text.split("5")[1]}
                          </td>
                        ) : text.startsWith("0") ? (
                          <td key={text}>
                            <Link className={ccss.tableLink} href={initialURL + text.split("0")[1].split("")[0]}>
                              {text.split("0")[1]}
                            </Link>
                          </td>
                        ) : (
                          <td key={text}>{text}</td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
