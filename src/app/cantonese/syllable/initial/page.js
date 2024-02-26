import Link from "next/link";
import syllable from "../yueYin";
import * as ccss from "@/app/controller/cssName";

export default function Syllable() {
  const initials = Object.keys(syllable.initial);
  const initialURL = "/cantonese/syllable/initial/";

  return (
    <div className={ccss.noHeroContent}>
      <div className={ccss.headerBtnBlock}>
        <button className={ccss.headerBtn} type="button">
          <Link href={"/cantonese/syllable"}>&lt;&lt; 음절</Link>
        </button>
        <button className={ccss.headerBtn} type="button">
          <Link href={"/cantonese/syllable/vowel"}>운모 &gt;&gt; </Link>
        </button>
      </div>
      <div className={ccss.mainBlock}>
        <h1 className={ccss.h1}>성모(聲母)</h1>
        <p className={ccss.textBox}>
          성모는 한국어의 자음과 비슷한 개념이다.
          <br />
          광둥어의 성모는 총 19개로 구성되어 있다.([-]은 무음이다)
          <br />
          <br />
          광둥어에만 있는 개념이 아닌 중국어 발음에 공통적으로 있다.
          <br />
          보통화 병음(拼音)에서도 첫 발음인 알파벳을 성모라고 칭한다.
        </p>
        <hr className={ccss.hr} />
        <div className="px-4">
          <h2 className={ccss.h2}>성모 종류</h2>
          <div className={ccss.alpCardWrap}>
            {initials.map((initial) => (
              <Link
                href={initialURL + initial}
                key={initial}
                className={ccss.alpCardOutBox}
              >
                <h2 className={ccss.alpCardInBox}>{initial}</h2>
              </Link>
            ))}
          </div>
        </div>
        <hr className={ccss.hr} />
        <div className={ccss.subBlock + " overflow-auto"}>
          <h2 className={ccss.h2}>성모 발음</h2>

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
                  구분
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
                  입술
                </td>
                <td className={ccss.tBlue}>두 입술</td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "b"}>
                    b 波
                  </Link>
                </td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "p"}>
                    p 婆
                  </Link>
                </td>
                <td>　</td>
                <td>　</td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "m"}>
                    m 摸
                  </Link>
                </td>
                <td>　</td>
                <td>　</td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "w"}>
                    w 華
                  </Link>
                </td>
              </tr>
              <tr>
                <td className={ccss.tBlue}>입술, 이빨</td>
                <td>　</td>
                <td>　</td>
                <td>　</td>
                <td>　</td>
                <td>　</td>
                <td>　</td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "f"}>
                    f 科
                  </Link>
                </td>
                <td>　</td>
              </tr>

              <tr>
                <td className={ccss.tBlue} rowspan="5">
                  혀
                </td>
                <td className={ccss.tBlue}>끝</td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "d"}>
                    d 多
                  </Link>
                </td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "t"}>
                    t 拖
                  </Link>
                </td>
                <td>　</td>
                <td>　</td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "n"}>
                    n 挪
                  </Link>
                </td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "l"}>
                    l 羅
                  </Link>
                </td>
                <td>　</td>
                <td>　</td>
              </tr>

              <tr>
                <td className={ccss.tBlue}>옆</td>
                <td>　</td>
                <td>　</td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "z"}>
                    z 知
                  </Link>
                </td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "c"}>
                    c 雌
                  </Link>
                </td>
                <td>　</td>
                <td>　</td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "s"}>
                    s 思
                  </Link>
                </td>
                <td>　</td>
              </tr>
              <tr>
                <td className={ccss.tBlue}>몸</td>
                <td>　</td>
                <td>　</td>
                <td>　</td>
                <td>　</td>
                <td>　</td>
                <td>　</td>
                <td>　</td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "j"}>
                    j 也
                  </Link>
                </td>
              </tr>
              <tr>
                <td className={ccss.tBlue}>뿌리</td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "g"}>
                    g 哥
                  </Link>
                </td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "k"}>
                    k 卡
                  </Link>
                </td>
                <td>　</td>
                <td>　</td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "ng"}>
                    ng 我
                  </Link>
                </td>
                <td>　</td>
                <td>　</td>
                <td>　</td>
              </tr>
              <tr>
                <td className={ccss.tBlue}>뿌리 원순</td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "gw"}>
                    gw 姑
                  </Link>
                </td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "kw"}>
                    kw 箍
                  </Link>
                </td>
                <td>　</td>
                <td>　</td>
                <td>　</td>
                <td>　</td>
                <td>　</td>
                <td>　</td>
              </tr>
              <tr>
                <td className={ccss.tBlue} colspan="2">
                  목
                </td>
                <td>　</td>
                <td>　</td>
                <td>　</td>
                <td>　</td>
                <td>　</td>
                <td>　</td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "h"}>
                    h 何
                  </Link>
                </td>
                <td>　</td>
              </tr>
            </tbody>
          </table>
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
