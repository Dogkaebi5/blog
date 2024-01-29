import Link from "next/link";
import syllable from "../yueYin";

export default function Syllable() {
  const initials = Object.keys(syllable.initial);
  const initialURL = "/cantonese/syllable/initial/";
  const way = "bg-yellow-100 py-1 ";
  const posit = "w-20 bg-blue-50";
  const chinese = "bg-gray-100 ";

  return (
    <>
      <div className="mx-2 my-8 flex justify-between">
        <button className="px-4 py-1 bg-slate-200 rounded-full" type="button">
          <Link href={"/cantonese/syllable"}>&lt;&lt; 음절</Link>
        </button>
        <button className="px-4 py-1 bg-slate-200 rounded-full" type="button">
          <Link href={"/cantonese/syllable/vowel"}>운모 &gt;&gt; </Link>
        </button>
      </div>
      <div className="p-4">
        <h1 className="font-bold text-3xl mb-2">성모(聲母)</h1>
        <p className="p-4 mt-6 bg-slate-50 rounded-xl">
          성모는 한국어의 자음과 비슷한 개념이다.
          <br />
          광둥어의 성모는 총 19개로 구성되어 있다.([-]은 무음이다)
          <br />
          <br />
          광둥어에만 있는 개념이 아닌 중국어 발음에 공통적으로 있다.
          <br />
          보통화 병음(拼音)에서도 첫 발음인 알파벳을 성모라고 칭한다.
        </p>
        <hr className="my-8" />
        <div className="p-4">
          <h2 className="text-lg mb-4 font-bold text-start">성모 종류</h2>
          <div className="flex flex-wrap mt-6">
            {initials.map((initial) => (
              <Link
                href={initialURL + initial}
                key={initial}
                className="p-1 m-1 border rounded-lg hover:bg-black"
              >
                <h2 className="p-4 border bg-slate-100 inline-block rounded-md font-bold text-2xl">
                  {initial}
                </h2>
              </Link>
            ))}
          </div>
        </div>
        <hr className="my-6" />
        <div className="p-4">
          <table className="text-sm">
            <caption className="text-lg mb-4 font-bold text-start">
              성모 발음
            </caption>
            <thead className="font-extrabold">
              <tr>
                <td className={chinese} rowspan="2">
                  中文
                </td>
                <td className={way} rowspan="2">
                  발음 방법
                </td>
                <td className={posit} rowspan="2">
                  발음 위치
                </td>
                <td className={posit} colspan="2">
                  입술
                </td>
                <td className={posit} colspan="5">
                  혀
                </td>
                <td className={posit} rowspan="2">
                  목
                </td>
              </tr>
              <tr>
                <td className={posit}>두 입술</td>
                <td className={posit}>입술, 이빨</td>
                <td className={posit}>끝</td>
                <td className={posit}>옆</td>
                <td className={posit}>몸</td>
                <td className={posit}>뿌리</td>
                <td className={posit}>뿌리 원순</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={chinese} rowspan="2">
                  塞音 (清)
                </td>
                <td className={way}>파열음 (내붊)</td>
                <td className={chinese} rowspan="2">
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
                <td className={way}>파열음 (안 내붊)</td>
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
                <td className={chinese + " px-4"} rowspan="2">
                  塞擦音 (清)
                </td>
                <td className={way}>파찰음 (내붊)</td>
                <td className={chinese} rowspan="2">
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
                <td className={way + "px-4"}>파찰음 (안 내붊)</td>
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
                <td className={chinese}>鼻音 (濁)</td>
                <td className={way}>코음</td>
                <td className={chinese}>탁음</td>
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
                <td className={chinese}>邊音 (濁)</td>
                <td className={way}>옆음</td>
                <td className={chinese}>탁음</td>
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
                <td className={chinese}>擦音 (清)</td>
                <td className={way}>마찰음</td>
                <td className={chinese}>청음</td>
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
                <td className={chinese}>半元音</td>
                <td className={way}>반원음</td>
                <td className={chinese}>　</td>
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
          </table>
        </div>
      </div>
    </>
  );
}
