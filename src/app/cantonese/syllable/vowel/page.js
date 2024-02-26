import Link from "next/link";
import syllable from "../yueYin";
import * as ccss from "@/app/controller/cssName";

export default function Syllable() {
  const vowels = Object.keys(syllable.vowel);
  const initialURL = "/cantonese/syllable/initial/";

  return (
    <div className={ccss.noHeroContent}>
      <div className={ccss.headerBtnBlock}>
        <button className={ccss.headerBtn} type="button">
          <Link href={"/cantonese/syllable"}>&lt;&lt; 음절</Link>
        </button>
        <button className={ccss.headerBtn} type="button">
          <Link href={initialURL}>성모 &gt;&gt; </Link>
        </button>
      </div>
      <div className={ccss.mainBlock}>
        <h1 className={ccss.h1}>운모(韻母)</h1>
        <p className={ccss.textBox}>
          운모는 한국어의 모음과 비슷한 개념이다.
          <br />
          운모는 또 운복(韻腹)과 운미(韻尾)로 구성되어 있다.
          <br />
          운복은 9개, 운미는 8개가 있고 총57개 조합이 있다.
        </p>
        <hr className={ccss.hr} />
        <div className={ccss.subBlock}>
          <h2 className={ccss.h2}>운복(韻母) & 운미(韻尾)</h2>
          <table>
            <tbody>
              <tr className="font-bold">
                <td className={ccss.tBlue}>운복</td>
                <td className={ccss.tBlue}>aa</td>
                <td className={ccss.tBlue}>a</td>
                <td className={ccss.tBlue}>e</td>
                <td className={ccss.tBlue}>i</td>
                <td className={ccss.tBlue}>o</td>
                <td className={ccss.tBlue}>u</td>
                <td className={ccss.tBlue}>oe</td>
                <td className={ccss.tBlue}>eo</td>
                <td className={ccss.tBlue}>yu</td>
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
              <tr className="font-bold">
                <td className={ccss.tBlue}>운미</td>
                <td className={ccss.tBlue}>-i</td>
                <td className={ccss.tBlue}>-u</td>
                <td className={ccss.tBlue}>-m</td>
                <td className={ccss.tBlue}>-n</td>
                <td className={ccss.tBlue}>-ng</td>
                <td className={ccss.tBlue}>-p</td>
                <td className={ccss.tBlue}>-t</td>
                <td className={ccss.tBlue}>-k</td>
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
        <hr className={ccss.hr} />
        <div className={ccss.subBlock}>
          <h2 className={ccss.h2}>운모 종류</h2>
          <div className={ccss.alpCardWrap}>
            {vowels.map((vowel) => (
              <Link
                href={initialURL + vowel}
                key={vowel}
                className={ccss.alpCardOutBox}
              >
                <h2 className={ccss.alpCardInBox}>{vowel}</h2>
              </Link>
            ))}
          </div>
        </div>
        <hr className={ccss.hr} />
        <div className={ccss.subBlock}>
          <h2 className={ccss.h2}>운모 조합표</h2>
          <table className={ccss.table}>
            <thead>
              <tr className={ccss.tBlue}>
                <td className="font-bold py-1">운모</td>
                <td className="font-bold py-1">단 원음</td>
                <td className="font-bold py-1" colspan="2">
                  복 원음
                </td>
                <td className="font-bold py-1" colspan="3">
                  코 미음
                </td>
                <td className="font-bold py-1" colspan="3">
                  입성
                </td>
              </tr>
            </thead>
            <tbody>
              <tr className={ccss.tBlue}>
                <td className={ccss.tYellow}>음위</td>
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
                <td className={ccss.tYellow}>aa</td>
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
                <td className={ccss.tYellow}>a</td>
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
                <td className={ccss.tYellow}>e</td>
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
                <td className={ccss.tYellow}>i</td>
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
                <td className={ccss.tYellow}>o</td>
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
                <td className={ccss.tYellow}>u</td>
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
                <td className={ccss.tYellow}>oe</td>
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
                <td className={ccss.tYellow}>eo</td>
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
                <td className={ccss.tYellow}>yu</td>
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
                <td className={ccss.tYellow}>독립 음절</td>
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
    </div>
  );
}
