import Link from "next/link";
import { syllable } from "@controller/yueYin";
import { syllableURL, initialURL } from "@controller/urls";
import * as ccss from "@controller/cssName";

export default function Syllable() {
  const vowels = Object.keys(syllable.vowel);
  const vowelHeads = [
    ["운복", "aa", "a", "e", "i", "o", "u", "oe", "eo", "yu"],
    ["2발음", "[ aː ]", "[ ɐ ]", "[ ɛː ] [ e ]", "[ iː ] [ ɪ ]", "[ ɔː ] [ o ]", "[ uː ] [ ʊ ]", "[ œː ]", "[ ɵ ]", "[ yː ]"],
    ["ㅏ~", "ㅏ", "ㅔ", "ㅣ/ㅐ", "ㅗㅓ", "ㅜ~", "ㅓ", "ㅗ", "ㅟ"],
  ];
  const vowelFinals = [
    ["운미", "-i", "-u", "-m", "-n", "-ng", "-p", "-t", "-k"],
    ["발음", "[ -i ] [ -y ]", "[ -u ]", "[ -m ]", "[ -n ]", "[ -ŋ ]", "[ -p̚ ]", "[ -t̚ ]", "[ -k̚ ]"],
  ];

  const vowelTable = [
    ["운모", "단 원음", "복 원음2", "코 미음3", "입성3"],
    ["음위", "-", "-i", "-u", "-m", "-n", "-ng", "-p", "-t", "-k"],
    ["aa", "0aa 呀", "0aai 挨", "0aau 拗", "0aam 監", "0aan 晏", "0aang 罌", "0aap 鴨", "0aat 押", "0aak 客"],
    ["a", "", "0ai 矮", "0au 歐", "0am 痷", "0an 恩", "0ang 鶯", "0ap 急", "0at 不", "0ak 德"],
    ["e", "0e 誒", "0ei 非", "0eu 掉", "0em 舐", "", "0eng 鏡", "0ep 夾", "", "0ek 尺"],
    ["i", "0i 衣", "", "0iu 妖", "0im 淹", "0in 煙", "0ing 英", "0ip 葉", "0it 熱", "0ik 益"],
    ["o", "0o 柯", "0oi 哀", "0ou 奧", "", "0on 安", "0ong 康", "", "0ot 渴", "0ok 惡"],
    ["u", "0u 烏", "0ui 煨", "", "", "0un 碗", "0ung 甕", "", "0ut 活", "0uk 屋"],
    ["oe", "0oe 靴", "", "", "", "", "0oeng 香", "", "", "0oek 約"],
    ["eo", "", "0eoi 去", "", "", "0eon 春", "", "", "0eot 律", ""],
    ["yu", "0yu 於", "", "", "", "0yun 冤", "", "", "0yut 月", ""],
    ["독립 음절", "", "", "", "0m 唔", "", "0ng 五", "", "", ""],
  ];

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
          <h2 className={ccss.h2}>운복(韻腹) & 운미(韻尾)</h2>
          <div className="scrollBarX overflow-x-scroll ">
            <table className="my-2">
              <tbody className="vowel-hf">
                {vowelHeads.map((row) => {
                  return (
                    <tr key={"r" + row[0]}>
                      {row.map((text) => {
                        return text.startsWith("2") ? (
                          <td key={text} rowspan="2">
                            {text.replace("2", "")}
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
          <div className="scrollBarX overflow-x-scroll ">
            <table className="my-2">
              <tbody className="vowel-hf">
                {vowelFinals.map((row) => {
                  return (
                    <tr key={"r" + row[0]}>
                      {row.map((text) => (
                        <td key={text}>{text}</td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <hr className={ccss.hr} />
        <div className={ccss.subBlock}>
          <h2 className={ccss.h2}>운모 조합표</h2>
          <div className="scrollBarX overflow-x-scroll mt-4">
            <table className="mx-auto my-2">
              <tbody className="vowel-table">
                {vowelTable.map((row) => {
                  return (
                    <tr key={"r" + row[0]}>
                      {row.map((text) => {
                        return text.endsWith("2") ? (
                          <td key={text} colspan="2">
                            {text.split("2")[0]}
                          </td>
                        ) : text.endsWith("3") ? (
                          <td key={text} colspan="3">
                            {text.split("3")[0]}
                          </td>
                        ) : text.startsWith("0") ? (
                          <td key={text}>
                            <Link className={ccss.tableLink} href={initialURL + text.split(0)[1].split(" ")[0]}>
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
