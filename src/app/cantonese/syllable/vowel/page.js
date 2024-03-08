import Link from "next/link";
import { syllable, syllableURL, initialURL } from "../yueYin";
import * as ccss from "@/app/controller/cssName";

export default function Syllable() {
  const vowels = Object.keys(syllable.vowel);
  const vowelHeads = [
    ["aa", "a", "e", "i", "o", "u", "oe", "eo", "yu"],
    ["[ aː ]", "[ ɐ ]", "[ ɛː ] [ e ]", "[ iː ] [ ɪ ]", "[ ɔː ] [ o ]", "[ uː ] [ ʊ ]", "[ œː ]", "[ ɵ ]", "[ yː ]"],
    ["ㅏ~", "ㅏ", "ㅔ", "ㅣ/ㅐ", "ㅗㅓ", "ㅜ~", "ㅓ", "ㅗ", "ㅟ"],
  ];
  const vewelFinals = [];

  return (
    <div className={ccss.noHeroContent}>
      <div className={ccss.headerBtnBlock}>
        <button className={ccss.headerBtn} type="button">
          <Link href={syllableURL}>&lt;&lt; 음절</Link>
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
          <h2 className={ccss.h2}>운복(韻腹) & 운미(韻尾)</h2>
          <table className="mt-4 text-sm">
            <tbody>
              <tr className={ccss.tBlue + " font-bold"}>
                <td className="px-4">운복</td>
                <td className="px-4">aa</td>
                <td className="px-4">a</td>
                <td className="px-4">e</td>
                <td className="px-4">i</td>
                <td className="px-4">o</td>
                <td className="px-4">u</td>
                <td className="px-4">oe</td>
                <td className="px-4">eo</td>
                <td className="px-4">yu</td>
              </tr>
              <tr>
                <td rowspan="2">발음</td>
                <td>[ aː ]</td>
                <td>[ ɐ ]</td>
                <td>
                  [ ɛː ]<br />[ e ]
                </td>
                <td>
                  [ iː ]<br />[ ɪ ]
                </td>
                <td>
                  [ ɔː ]<br />[ o ]
                </td>
                <td>
                  [ uː ]<br />[ ʊ ]
                </td>
                <td>[ œː ]</td>
                <td>[ ɵ ]</td>
                <td>[ yː ]</td>
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
          <table className="mt-4 text-sm">
            <tbody>
              <tr className={ccss.tBlue + " font-bold"}>
                <td className="px-4">운미</td>
                <td className="px-4">-i</td>
                <td className="px-4">-u</td>
                <td className="px-4">-m</td>
                <td className="px-4">-n</td>
                <td className="px-4">-ng</td>
                <td className="px-4">-p</td>
                <td className="px-4">-t</td>
                <td className="px-4">-k</td>
              </tr>
              <tr>
                <td>발음</td>
                <td>
                  [ -i ]<br />[ -y ]
                </td>
                <td>[ -u ]</td>
                <td>[ -m ]</td>
                <td>[ -n ]</td>
                <td>[ -ŋ ]</td>
                <td>[ -p̚ ]</td>
                <td>[ -t̚ ]</td>
                <td>[ -k̚ ]</td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr className={ccss.hr} />
        <div className={ccss.subBlock}>
          <h2 className={ccss.h2}>운모 종류</h2>
          <div className={ccss.alpCardWrap}>
            {vowels.map((vowel) => (
              <Link href={initialURL + vowel} key={vowel} className={ccss.alpCardOutBox}>
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
                  <Link className={ccss.tableLink} href={initialURL + "aa"}>
                    aa 呀
                  </Link>
                </td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "aai"}>
                    aai 挨
                  </Link>
                </td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "aau"}>
                    aau 拗
                  </Link>
                </td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "aam"}>
                    aam 監
                  </Link>
                </td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "aan"}>
                    aan 晏
                  </Link>
                </td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "aang"}>
                    aang 罌
                  </Link>
                </td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "aap"}>
                    aap 鴨
                  </Link>
                </td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "aat"}>
                    aat 押
                  </Link>
                </td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "aak"}>
                    aak 客
                  </Link>
                </td>
              </tr>
              <tr>
                <td className={ccss.tYellow}>a</td>
                <td></td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "ai"}>
                    ai 矮
                  </Link>
                </td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "au"}>
                    au 歐
                  </Link>
                </td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "am"}>
                    am 痷
                  </Link>
                </td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "an"}>
                    an 恩
                  </Link>
                </td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "ang"}>
                    ang 鶯
                  </Link>
                </td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "ap"}>
                    ap 急
                  </Link>
                </td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "at"}>
                    at 不
                  </Link>
                </td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "ak"}>
                    ak 德
                  </Link>
                </td>
              </tr>
              <tr>
                <td className={ccss.tYellow}>e</td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "e"}>
                    e 誒
                  </Link>
                </td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "ei"}>
                    ei 非
                  </Link>
                </td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "eu"}>
                    eu 掉
                  </Link>
                </td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "em"}>
                    em 舐
                  </Link>
                </td>
                <td></td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "eng"}>
                    eng 鏡
                  </Link>
                </td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "ep"}>
                    ep 夾
                  </Link>
                </td>
                <td></td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "ek"}>
                    ek 尺
                  </Link>
                </td>
              </tr>
              <tr>
                <td className={ccss.tYellow}>i</td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "i"}>
                    i 衣
                  </Link>
                </td>
                <td></td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "iu"}>
                    iu 妖
                  </Link>
                </td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "im"}>
                    im 淹
                  </Link>
                </td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "in"}>
                    in 煙
                  </Link>
                </td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "ing"}>
                    ing 英
                  </Link>
                </td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "ip"}>
                    ip 葉
                  </Link>
                </td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "it"}>
                    it 熱
                  </Link>
                </td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "ik"}>
                    ik 益
                  </Link>
                </td>
              </tr>
              <tr>
                <td className={ccss.tYellow}>o</td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "o"}>
                    o 柯
                  </Link>
                </td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "oi"}>
                    oi 哀
                  </Link>
                </td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "ou"}>
                    ou 奧
                  </Link>
                </td>
                <td></td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "on"}>
                    on 安
                  </Link>
                </td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "ong"}>
                    ong 康
                  </Link>
                </td>
                <td></td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "ot"}>
                    ot 渴
                  </Link>
                </td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "ok"}>
                    ok 惡
                  </Link>
                </td>
              </tr>
              <tr>
                <td className={ccss.tYellow}>u</td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "u"}>
                    u 烏
                  </Link>
                </td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "ui"}>
                    ui 煨
                  </Link>
                </td>
                <td></td>
                <td></td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "un"}>
                    un 碗
                  </Link>
                </td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "ung"}>
                    ung 甕
                  </Link>
                </td>
                <td></td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "ut"}>
                    ut 活
                  </Link>
                </td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "uk"}>
                    uk 屋
                  </Link>
                </td>
              </tr>
              <tr>
                <td className={ccss.tYellow}>oe</td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "oe"}>
                    oe 靴
                  </Link>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "oeng"}>
                    oeng 香
                  </Link>
                </td>
                <td></td>
                <td></td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "oek"}>
                    oek 約
                  </Link>
                </td>
              </tr>
              <tr>
                <td className={ccss.tYellow}>eo</td>
                <td></td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "eoi"}>
                    eoi 去
                  </Link>
                </td>
                <td></td>
                <td></td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "eon"}>
                    eon 春
                  </Link>
                </td>
                <td></td>
                <td></td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "eot"}>
                    eot 律
                  </Link>
                </td>
                <td></td>
              </tr>
              <tr>
                <td className={ccss.tYellow}>yu</td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "yu"}>
                    yu 於
                  </Link>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "yun"}>
                    yun 冤
                  </Link>
                </td>
                <td></td>
                <td></td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "yut"}>
                    yut 月
                  </Link>
                </td>
                <td></td>
              </tr>
              <tr>
                <td className={ccss.tYellow}>독립 음절</td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "m"}>
                    m 唔
                  </Link>
                </td>
                <td></td>
                <td>
                  <Link className={ccss.tableLink} href={initialURL + "ng"}>
                    ng 五
                  </Link>
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
