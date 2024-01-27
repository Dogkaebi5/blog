import Link from "next/link";
import syllable from "../yueYin";

export default function Syllable() {
  const vowels = Object.keys(syllable.vowel);
  const initialURL = "/cantonese/syllable/initial/";
  const m = "font-bold text-blue-500 w-14 bg-slate-100";
  const way = "bg-yellow-100 py-1 font-bold";
  const posit = "w-20 bg-blue-50 font-bold";

  return (
    <>
      <div className="mx-2 my-8 flex justify-between">
        <button className="px-4 py-1 bg-slate-200 rounded-full" type="button">
          <Link href={"/cantonese/syllable"}>&lt;&lt; 음절</Link>
        </button>
        <button className="px-4 py-1 bg-slate-200 rounded-full" type="button">
          <Link href={initialURL}>성모 &gt;&gt; </Link>
        </button>
      </div>
      <div className="p-4">
        <h1 className="font-bold text-3xl">운모(韻母)</h1>
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
                <td>ㅗㅓ</td>
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
        </div>
      </div>
    </>
  );
}
