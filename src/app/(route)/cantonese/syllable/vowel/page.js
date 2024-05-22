import Link from "next/link";
import { syllable } from "@controller/yueYin";
import { syllableURL, initialURL } from "@controller/urls";
import * as ccss from "@controller/cssName";

export const metadata = {
  title: "DogKaeBi | Cantonese 운모(韻母)",
  description: "광둥어의 운모 발음법 및 조합",
  icons: { icon: "/logo.png" },
  openGraph: {
    title: "DogKaeBi | Cantonese 운모(韻母)",
    description: "광둥어의 운모 발음법 및 조합",
    url: "dogkaebi.com",
    siteName: "DogKaeBi 독깨비",
    type: "website",
    images: [
      {
        url: "https://dogkaebi.com/logo.png",
        width: 600,
        height: 600,
        alt: "dogkaebi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DogKaeBi | Cantonese 운모(韻母)",
    description: "광둥어의 운모 발음법 및 조합",
    url: "dogkaebi.com",
    site: "DogKaeBi 독깨비",
    images: { url: "https://dogkaebi.com/logo2.png", alt: "dogkaebi" },
  },
};

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
        <Link className={ccss.headerBtn} href={syllableURL}>
          👈 음절
        </Link>
        <Link className={ccss.headerBtn} href={initialURL}>
          성모 👉
        </Link>
      </div>
      <div className={ccss.mainBlock}>
        <h1 className={ccss.h1}>운모(韻母)</h1>
        <p className={ccss.textBox}>
          운모는 한국어의 모음과 비슷한 개념이다.
          <br /> 운모는 또 운복(韻腹)과 운미(韻尾)로 구성되어 있다.
          <br /> 운복은 9개, 운미는 8개가 있고 총57개 조합이 있다.
        </p>
        <div className={ccss.hr} />
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
        <div className={ccss.hr} />
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
        <div className={ccss.hr} />
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
                            {text.replace("2", "")}
                          </td>
                        ) : text.endsWith("3") ? (
                          <td key={text} colspan="3">
                            {text.replace("3", "")}
                          </td>
                        ) : text.startsWith("0") ? (
                          <td key={text}>
                            <Link className={ccss.tableLink} href={initialURL + text.replace("0", "").split(" ")[0]}>
                              {text.replace("0", "")}
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
