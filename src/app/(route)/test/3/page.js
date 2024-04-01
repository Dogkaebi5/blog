import Link from "next/link";
import { syllable } from "@controller/yueYin";
import { initialURL, syllableURL, vowelURL } from "@controller/urls";
import * as ccss from "@controller/cssName";

export default function Initial() {
  const initials = Object.keys(syllable.initial);
  const initialTable = [
    ["b 波", "p 婆", "", "", "m 摸", "", "", "w 華"],
    ["", "", "", "", "", "", "f 科", ""],
    ["d 多", "t 拖", "", "", "n 挪", "l 羅", "", ""],
    ["", "", "z 知", "c 雌", "", "", "s 思", ""],
    ["", "", "", "", "", "", "", "j 也"],
    ["g 哥", "k 卡", "", "", "ng 我", "", "", ""],
    ["gw 姑", "kw 箍", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "h 何", ""],
  ];

  const textTable = [
    ["中文2", "塞音 (清)2", "塞擦音 (清)2", "鼻音 (濁)", "邊音 (濁)", "擦音 (清)", "半元音"],
    ["발음 분류2", "청음2", "청음2", "탁음", "탁음", "청음", "-"],
    [
      "발음2",
      "파열음\n(내쉼)",
      "파열음\n(내쉼X)",
      "파찰음\n(내쉼)",
      "파찰음\n(내쉼X)",
      "코음",
      "옆음",
      "마찰음",
      "반원음",
    ],
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
        <button className={ccss.headerBtn} type="button">
          <Link href={syllableURL}>&lt;&lt; 음절</Link>
        </button>
        <button className={ccss.headerBtn} type="button">
          <Link href={vowelURL}>운모 &gt;&gt; </Link>
        </button>
      </div>
      <div className={ccss.mainBlock}>
        <h1 className={ccss.h1}>성모(聲母)</h1>
        <div className={ccss.textBox}>
          성모는 한국어의 자음과 비슷한 개념이다.
          <br />
          광둥어의 성모는 총 19개로 구성되어 있다.([ - ]은 무음이다)
          <br />
          <br />
          광둥어에만 있는 개념이 아닌 중국어 발음에 공통적으로 있다.
          <br />
          보통화 병음(拼音)에서도 첫 발음인 알파벳을 성모라고 칭한다.
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
          <div className="scrollBarX">
            <table>
              <tbody className="table-test">
                {textTable.map((row) => {
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
          <div className="scrollBarX overflow-x-scroll">
            <table className={ccss.table}>
              <thead className={ccss.th}>
                <tr>
                  <td className={ccss.tGray} colspan="2">
                    中文
                  </td>
                  <td className={ccss.tGray} colspan="2">
                    塞音 (清)
                  </td>
                  <td className={ccss.tGray} colspan="2">
                    塞擦音 (清)
                  </td>
                  <td className={ccss.tGray}>鼻音 (濁)</td>
                  <td className={ccss.tGray}>邊音 (濁)</td>
                  <td className={ccss.tGray}>擦音 (清)</td>
                  <td className={ccss.tGray}>半元音</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={ccss.tGray} colspan="2">
                    발음 분류
                  </td>
                  <td className={ccss.tGray} colspan="2">
                    청음
                  </td>
                  <td className={ccss.tGray} colspan="2">
                    청음
                  </td>
                  <td className={ccss.tGray}>탁음</td>
                  <td className={ccss.tGray}>탁음</td>
                  <td className={ccss.tGray}>청음</td>
                  <td className={ccss.tGray}>-</td>
                </tr>
                <tr>
                  <td className={ccss.tYellow} colspan="2">
                    발음
                  </td>
                  <td className={ccss.tYellow}>
                    파열음
                    <br />
                    (내쉼)
                  </td>
                  <td className={ccss.tYellow}>
                    파열음
                    <br />
                    (내쉼X)
                  </td>
                  <td className={ccss.tYellow}>
                    파찰음
                    <br />
                    (내쉼)
                  </td>
                  <td className={ccss.tYellow}>
                    파찰음
                    <br />
                    (내쉼X)
                  </td>
                  <td className={ccss.tYellow}>코음</td>
                  <td className={ccss.tYellow}>옆음</td>
                  <td className={ccss.tYellow}>마찰음</td>
                  <td className={ccss.tYellow}>반원음</td>
                </tr>
                <tr>
                  <td className={ccss.tBlue} rowspan="2">
                    입
                  </td>
                  <td className={ccss.tBlue}>입술</td>
                  {initialTable[0].map((i) => (
                    <td key={"key" + i} className={ccss.tableLink}>
                      <Link className={ccss.tableLink} href={initialURL + i.split(" ")[0]}>
                        {i}
                      </Link>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className={ccss.tBlue}>입술, 이빨</td>
                  {initialTable[1].map((i) => (
                    <td key={"key" + i} className={ccss.tableLink}>
                      <Link className={ccss.tableLink} href={initialURL + i.split(" ")[0]}>
                        {i}
                      </Link>
                    </td>
                  ))}
                </tr>

                <tr>
                  <td className={ccss.tBlue} rowspan="5">
                    혀
                  </td>
                  <td className={ccss.tBlue}>끝</td>
                  {initialTable[2].map((i) => (
                    <td key={"key" + i} className={ccss.tableLink}>
                      <Link className={ccss.tableLink} href={initialURL + i.split(" ")[0]}>
                        {i}
                      </Link>
                    </td>
                  ))}
                </tr>

                <tr>
                  <td className={ccss.tBlue}>옆</td>
                  {initialTable[3].map((i) => (
                    <td key={"key" + i} className={ccss.tableLink}>
                      <Link className={ccss.tableLink} href={initialURL + i.split(" ")[0]}>
                        {i}
                      </Link>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className={ccss.tBlue}>몸</td>
                  {initialTable[4].map((i) => (
                    <td key={"key" + i} className={ccss.tableLink}>
                      <Link className={ccss.tableLink} href={initialURL + i.split(" ")[0]}>
                        {i}
                      </Link>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className={ccss.tBlue}>뿌리</td>
                  {initialTable[5].map((i) => (
                    <td key={"key" + i} className={ccss.tableLink}>
                      <Link className={ccss.tableLink} href={initialURL + i.split(" ")[0]}>
                        {i}
                      </Link>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className={ccss.tBlue}>뿌리 원순</td>
                  {initialTable[6].map((i) => (
                    <td key={"key" + i} className={ccss.tableLink}>
                      <Link className={ccss.tableLink} href={initialURL + i.split(" ")[0]}>
                        {i}
                      </Link>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className={ccss.tBlue} colspan="2">
                    목
                  </td>
                  {initialTable[7].map((i) => (
                    <td key={"key" + i} className={ccss.tableLink}>
                      <Link className={ccss.tableLink} href={initialURL + i.split(" ")[0]}>
                        {i}
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          {/* <table className={ccss.table}>
            <thead className={ccss.th}>
              <tr>
                <td className={ccss.tGray} rowspan="2">
                  中文
                </td>
                <td className={ccss.tYellow} rowspan="2">
                  발음 방법
                </td>
                <td className={ccss.tBlue} rowspan="2">
                  발음 위치
                </td>
                <td className={ccss.tBlue} colspan="2">
                  입술
                </td>
                <td className={ccss.tBlue} colspan="5">
                  혀
                </td>
                <td className={ccss.tBlue} rowspan="2">
                  목
                </td>
              </tr>
              <tr>
                <td className={ccss.tBlue}>두 입술</td>
                <td className={ccss.tBlue}>입술, 이빨</td>
                <td className={ccss.tBlue}>끝</td>
                <td className={ccss.tBlue}>옆</td>
                <td className={ccss.tBlue}>몸</td>
                <td className={ccss.tBlue}>뿌리</td>
                <td className={ccss.tBlue}>뿌리 원순</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={ccss.tGray} rowspan="2">
                  塞音 (清)
                </td>
                <td className={ccss.tYellow}>파열음 (내붊)</td>
                <td className={ccss.tGray} rowspan="2">
                  청음
                </td>
                <td>
                  <Link href={initialURL + "b"}>b 波</Link>
                </td>
                <td>　</td>
                <td>
                  <Link href={initialURL + "d"}>d 多</Link>
                </td>
                <td>　</td>
                <td>　</td>
                <td>
                  <Link href={initialURL + "g"}>g 哥</Link>
                </td>
                <td>
                  <Link href={initialURL + "gw"}>gw 姑</Link>
                </td>
                <td>　</td>
              </tr>
              <tr>
                <td className={ccss.tYellow}>파열음 (안 내붊)</td>
                <td>
                  <Link href={initialURL + "p"}>p 婆</Link>
                </td>
                <td>　</td>
                <td>
                  <Link href={initialURL + "t"}>t 拖</Link>
                </td>
                <td>　</td>
                <td>　</td>
                <td>
                  <Link href={initialURL + "k"}>k 卡</Link>
                </td>
                <td>
                  <Link href={initialURL + "kw"}>kw 箍</Link>
                </td>
                <td>　</td>
              </tr>
              <tr>
                <td className={ccss.tGray} rowspan="2">
                  塞擦音 (清)
                </td>
                <td className={ccss.tYellow}>파찰음 (내붊)</td>
                <td className={ccss.tGray} rowspan="2">
                  청음
                </td>
                <td>　</td>
                <td>　</td>
                <td>　</td>
                <td>
                  <Link href={initialURL + "z"}>z 知</Link>
                </td>
                <td>　</td>
                <td>　</td>
                <td>　</td>
                <td>　</td>
              </tr>
              <tr>
                <td className={ccss.tYellow}>파찰음 (안 내붊)</td>
                <td>　</td>
                <td>　</td>
                <td>　</td>
                <td>
                  <Link href={initialURL + "c"}>c 雌</Link>
                </td>
                <td>　</td>
                <td>　</td>
                <td>　</td>
                <td>　</td>
              </tr>
              <tr>
                <td className={ccss.tGray}>鼻音 (濁)</td>
                <td className={ccss.tYellow}>코음</td>
                <td className={ccss.tGray}>탁음</td>
                <td>
                  <Link href={initialURL + "m"}>m 摸</Link>
                </td>
                <td>　</td>
                <td>
                  <Link href={initialURL + "n"}>n 挪</Link>
                </td>
                <td>　</td>
                <td>　</td>
                <td>
                  <Link href={initialURL + "ng"}>ng 我</Link>
                </td>
                <td>　</td>
                <td>　</td>
              </tr>
              <tr>
                <td className={ccss.tGray}>邊音 (濁)</td>
                <td className={ccss.tYellow}>옆음</td>
                <td className={ccss.tGray}>탁음</td>
                <td>　</td>
                <td>　</td>
                <td>
                  <Link href={initialURL + "l"}>l 羅</Link>
                </td>
                <td>　</td>
                <td>　</td>
                <td>　</td>
                <td>　</td>
                <td>　</td>
              </tr>
              <tr>
                <td className={ccss.tGray}>擦音 (清)</td>
                <td className={ccss.tYellow}>마찰음</td>
                <td className={ccss.tGray}>청음</td>
                <td>　</td>
                <td>　</td>
                <td>　</td>
                <td>
                  <Link href={initialURL + "s"}>s 思</Link>
                </td>
                <td>　</td>
                <td>　</td>
                <td>　</td>
                <td>
                  <Link href={initialURL + "h"}>h 何</Link>
                </td>
              </tr>
              <tr>
                <td className={ccss.tGray}>半元音</td>
                <td className={ccss.tYellow}>반원음</td>
                <td className={ccss.tGray}>　</td>
                <td>
                  <Link href={initialURL + "w"}>w 華</Link>
                </td>
                <td>　</td>
                <td>　</td>
                <td>　</td>
                <td>
                  <Link href={initialURL + "j"}>j 也</Link>
                </td>
                <td>　</td>
                <td>　</td>
                <td>　</td>
              </tr>
            </tbody>
          </table> */}
        </div>
      </div>
    </div>
  );
}
