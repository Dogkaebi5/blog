import Link from "next/link";
import syllable from "../yueYin";

export default function Syllable() {
  const vowels = Object.keys(syllable.vowel);
  const initialURL = "/cantonese/syllable/initial/";
  const m = "font-bold text-blue-500 w-14 bg-slate-100";
  const way = "bg-yellow-100 py-1 font-bold";
  const posit = "w-20 bg-blue-50 font-bold";
  const chinese = "bg-gray-100 ";

  return (
    <div className="mt-4 p-2">
      <h1 className="font-bold text-3xl mb-2">운모(韻母)</h1>
      <p className="p-4 mt-6 bg-slate-50 rounded-xl">
        운모는 한국어의 모음과 비슷한 개념이다.
        <br />
        운모는 또 운복(韻腹)과 운미(韻尾)로 구성되어 있다.
        <br />
        운복은 9개, 운미는 8개가 있고 총57개 조합이 있다.
      </p>
      <hr className="my-8" />
      <div className="p-4">
        <h2 className="text-lg mb-4 font-bold text-start">운복 & 운미</h2>
        <table>
          <tbody>
            <tr>
              <td className={m}>운복</td>
              <td className={m}>aa</td>
              <td className={m}>a</td>
              <td className={m}>e</td>
              <td className={m}>i</td>
              <td className={m}>o</td>
              <td className={m}>u</td>
              <td className={m}>oe</td>
              <td className={m}>eo</td>
              <td className={m}>yu</td>
            </tr>
            <tr>
              <td rowspan="2">발음</td>
              <td>[aː]</td>
              <td>[ɐ]</td>
              <td>
                [ɛː]
                <br />
                [e]
              </td>
              <td>[iː]/[ɪ]</td>
              <td>
                [ɔː]
                <br />
                [o]
              </td>
              <td>
                [uː]
                <br />
                [ʊ]
              </td>
              <td>[œː]</td>
              <td>[ɵ]</td>
              <td>[yː]</td>
            </tr>
            <tr>
              <td>ㅏ~</td>
              <td>ㅏ</td>
              <td>ㅔ</td>
              <td>ㅣ/ㅐ</td>
              <td>ㅓ/ㅗ</td>
              <td>ㅜ~</td>
              <td>ㅓ</td>
              <td>ㅗ</td>
              <td>ㅟ</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="p-4">
        <table>
          <tbody>
            <tr>
              <td className={m}>운미</td>
              <td className={m}>-i</td>
              <td className={m}>-u</td>
              <td className={m}>-m</td>
              <td className={m}>-n</td>
              <td className={m}>-ng</td>
              <td className={m}>-p</td>
              <td className={m}>-t</td>
              <td className={m}>-k</td>
            </tr>
            <tr>
              <td>발음</td>
              <td>
                [-i]
                <br />
                [-y]
              </td>
              <td>[-u]</td>
              <td>[-m]</td>
              <td>[-n]</td>
              <td>[-ŋ]</td>
              <td>[-p̚]</td>
              <td>[-t̚]</td>
              <td>[-k̚]</td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr className="my-8" />
      <div className="p-4">
        <h2 className="text-lg mb-4 font-bold text-start">운모 종류</h2>
        <div className="flex flex-wrap mt-6">
          {vowels.map((vowel) => (
            <Link
              href={initialURL + vowel}
              key={vowel}
              className="p-1 m-1 border rounded-lg hover:bg-black"
            >
              <h2 className="p-4 border bg-slate-100 inline-block rounded-md font-bold text-2xl">
                {vowel}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      <hr className="my-6" />
      <div className="p-4">
        <table className="text-sm">
          <caption className="text-lg mb-4 font-bold text-start">
            운모 조합표
          </caption>
          <thead>
            <tr className={posit}>
              <td>운모</td>
              <td>단 원음</td>
              <td colspan="2">복 원음</td>
              <td colspan="3">코 미음</td>
              <td colspan="3">입성</td>
            </tr>
          </thead>
          <tbody>
            <tr className={posit}>
              <td className={way + " w-20"}>음위</td>
              <td className="w-20">-</td>
              <td className="w-20">-i</td>
              <td className="w-20">-u</td>
              <td className="w-20">-m</td>
              <td className="w-20">-n</td>
              <td className="w-20">-ng</td>
              <td className="w-20">-p</td>
              <td className="w-20">-t</td>
              <td className="w-20">-k</td>
            </tr>
            <tr>
              <td className={way}>aa</td>
              <td>
                <Link href={initialURL + "aa"}>aa 呀</Link>
              </td>
              <td>
                <Link href={initialURL + "aai"}>aai 挨</Link>
              </td>
              <td>
                <Link href={initialURL + "aau"}>aau 拗</Link>
              </td>
              <td>
                <Link href={initialURL + "aam"}>aam 監</Link>
              </td>
              <td>
                <Link href={initialURL + "aan"}>aan 晏</Link>
              </td>
              <td>
                <Link href={initialURL + "aang"}>aang 罌</Link>
              </td>
              <td>
                <Link href={initialURL + "aap"}>aap 鴨</Link>
              </td>
              <td>
                <Link href={initialURL + "aat"}>aat 押</Link>
              </td>
              <td>
                <Link href={initialURL + "aak"}>aak 客</Link>
              </td>
            </tr>
            <tr>
              <td className={way}>a</td>
              <td></td>
              <td>
                <Link href={initialURL + "ai"}>ai 矮</Link>
              </td>
              <td>
                <Link href={initialURL + "au"}>au 歐</Link>
              </td>
              <td>
                <Link href={initialURL + "am"}>am 痷</Link>
              </td>
              <td>
                <Link href={initialURL + "an"}>an 恩</Link>
              </td>
              <td>
                <Link href={initialURL + "ang"}>ang 鶯</Link>
              </td>
              <td>
                <Link href={initialURL + "ap"}>ap 急</Link>
              </td>
              <td>
                <Link href={initialURL + "at"}>at 不</Link>
              </td>
              <td>
                <Link href={initialURL + "ak"}>ak 德</Link>
              </td>
            </tr>
            <tr>
              <td className={way}>e</td>
              <td>
                <Link href={initialURL + "e"}>e 誒</Link>
              </td>
              <td>
                <Link href={initialURL + "ei"}>ei 非</Link>
              </td>
              <td>
                <Link href={initialURL + "eu"}>eu 掉</Link>
              </td>
              <td>
                <Link href={initialURL + "em"}>em 舐</Link>
              </td>
              <td></td>
              <td>
                <Link href={initialURL + "eng"}>eng 鏡</Link>
              </td>
              <td>
                <Link href={initialURL + "ep"}>ep 夾</Link>
              </td>
              <td></td>
              <td>
                <Link href={initialURL + "ek"}>ek 尺</Link>
              </td>
            </tr>
            <tr>
              <td className={way}>i</td>
              <td>
                <Link href={initialURL + "i"}>i 衣</Link>
              </td>
              <td></td>
              <td>
                <Link href={initialURL + "iu"}>iu 妖</Link>
              </td>
              <td>
                <Link href={initialURL + "im"}>im 淹</Link>
              </td>
              <td>
                <Link href={initialURL + "in"}>in 煙</Link>
              </td>
              <td>
                <Link href={initialURL + "ing"}>ing 英</Link>
              </td>
              <td>
                <Link href={initialURL + "ip"}>ip 葉</Link>
              </td>
              <td>
                <Link href={initialURL + "it"}>it 熱</Link>
              </td>
              <td>
                <Link href={initialURL + "ik"}>ik 益</Link>
              </td>
            </tr>
            <tr>
              <td className={way}>o</td>
              <td>
                <Link href={initialURL + "o"}>o 柯</Link>
              </td>
              <td>
                <Link href={initialURL + "oi"}>oi 哀</Link>
              </td>
              <td>
                <Link href={initialURL + "ou"}>ou 奧</Link>
              </td>
              <td></td>
              <td>
                <Link href={initialURL + "on"}>on 安</Link>
              </td>
              <td>
                <Link href={initialURL + "ong"}>ong 康</Link>
              </td>
              <td></td>
              <td>
                <Link href={initialURL + "ot"}>ot 渴</Link>
              </td>
              <td>
                <Link href={initialURL + "ok"}>ok 惡</Link>
              </td>
            </tr>
            <tr>
              <td className={way}>u</td>
              <td>
                <Link href={initialURL + "u"}>u 烏</Link>
              </td>
              <td>
                <Link href={initialURL + "ui"}>ui 煨</Link>
              </td>
              <td></td>
              <td></td>
              <td>
                <Link href={initialURL + "un"}>un 碗</Link>
              </td>
              <td>
                <Link href={initialURL + "ung"}>ung 甕</Link>
              </td>
              <td></td>
              <td>
                <Link href={initialURL + "ut"}>ut 活</Link>
              </td>
              <td>
                <Link href={initialURL + "uk"}>uk 屋</Link>
              </td>
            </tr>
            <tr>
              <td className={way}>oe</td>
              <td>
                <Link href={initialURL + "oe"}>oe 靴</Link>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <Link href={initialURL + "oeng"}>oeng 香</Link>
              </td>
              <td></td>
              <td></td>
              <td>
                <Link href={initialURL + "oek"}>oek 約</Link>
              </td>
            </tr>
            <tr>
              <td className={way}>eo</td>
              <td></td>
              <td>
                <Link href={initialURL + "eoi"}>eoi 去</Link>
              </td>
              <td></td>
              <td></td>
              <td>
                <Link href={initialURL + "eon"}>eon 春</Link>
              </td>
              <td></td>
              <td></td>
              <td>
                <Link href={initialURL + "eot"}>eot 律</Link>
              </td>
              <td></td>
            </tr>
            <tr>
              <td className={way}>yu</td>
              <td>
                <Link href={initialURL + "yu"}>yu 於</Link>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <Link href={initialURL + "yun"}>yun 冤</Link>
              </td>
              <td></td>
              <td></td>
              <td>
                <Link href={initialURL + "yut"}>yut 月</Link>
              </td>
              <td></td>
            </tr>
            <tr>
              <td className={way}>독립 음절</td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <Link href={initialURL + "m"}>m 唔</Link>
              </td>
              <td></td>
              <td>
                <Link href={initialURL + "ng"}>ng 五</Link>
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        {/* <table className="text-sm">
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
              <td className={posit + "100"} rowspan="2">
                발음 위치
              </td>
              <td className={posit + "100"} colspan="2">
                입술
              </td>
              <td className={posit + "100"} colspan="5">
                혀
              </td>
              <td className={posit + "100"} rowspan="2">
                목
              </td>
            </tr>
            <tr>
              <td className={posit + "50"}>두 입술</td>
              <td className={posit + "50"}>입술, 이빨</td>
              <td className={posit + "50"}>끝</td>
              <td className={posit + "50"}>옆</td>
              <td className={posit + "50"}>몸</td>
              <td className={posit + "50"}>뿌리</td>
              <td className={posit + "50"}>뿌리 원순</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={chinese} rowspan="2">
                塞音 (清)
              </td>
              <td className={way}>파열음 내보냄</td>
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
              <td className={way}>파열음 안 내보냄</td>
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
              <td className={chinese} rowspan="2">
                塞擦音 (清)
              </td>
              <td className={way}>파찰음 내보냄</td>
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
              <td className={way}>파찰음 안 내보냄</td>
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
        </table> */}
      </div>
    </div>
  );
}
