import * as ccss from "@/app/controller/cssName";
import Link from "next/link";

export default function SyllableSp() {
  const initials = {
    b: "ㅂ",
    p: "ㅍ",
    m: "ㅁ",
    f: "ㅎ",
    d: "ㄷ",
    t: "ㅌ",
    n: "ㄴ",
    l: "ㄹ",
    g: "ㄱ",
    k: "ㅋ",
    ng: "으",
    w: "우",
    z: "ㅈ",
    c: "ㅊ",
    s: "ㅅ",
    j: "이",
  };
  const initials2 = {
    p: "ㅍ(ㅂ)",
    t: "ㅅ(ㄷ)",
    k: "ㅋ(ㄱ)",
    n: "ㄴ",
    ng: "ㅇ",
    m: "ㅁ",
  };
  const vowels = { a: "ㅏ", e: "ㅔ", i: "ㅣ", o: "ㅗㅓ", u: "ㅜ", y: "ㅣ" };
  const vowels2 = { ing: "앵", oe: "ㅕ", eo: "ㅗ", yu: "ㅟ" };
  const syllableURL = "/cantonese/syllable/";
  const initialURL = syllableURL + "initial/";

  return (
    <div className={ccss.noHeroContent}>
      <div className={ccss.mainBlock}>
        <h1 className={ccss.h1}>음절(音節) 간단하게 보기</h1>
        <div className={ccss.textBox}>
          <p>
            [음절 간단하게 보기]는 이해를 돕기위한 예시로 실제의 월음
            음절(粵音音節)와는 내용이 다르니, 음절의 자세한 내용은 성모, 운모,
            음절에서 확인하세요.
          </p>
        </div>
        <div className="flex justify-between mt-8">
          <Link className={ccss.headerBtn} href={syllableURL}>
            월음음절 &gt;&gt;
          </Link>

          <Link className={ccss.headerBtn} href={syllableURL + "initial"}>
            성모 &gt;&gt;
          </Link>
          <Link className={ccss.headerBtn} href={syllableURL + "vowel"}>
            운모 &gt;&gt;
          </Link>
        </div>
        <hr className={ccss.hr} />
        <div className={ccss.subBlock}>
          <h3 className={ccss.h3}>성모(聲母)</h3>
          <table>
            <tbody className="text-center">
              <tr>
                {Object.keys(initials).map((i) => (
                  <th className="border p-1 text-pink-400" key={i}>
                    <Link href={initialURL + i}>{i}</Link>
                  </th>
                ))}
              </tr>
              <tr>
                {Object.values(initials).map((i) => (
                  <td className="border p-1" key={i}>
                    {i}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <div className={ccss.subBlock + " mt-4"}>
          <h3 className={ccss.h3}>받침 성모</h3>
          <table>
            <tbody>
              <tr>
                {Object.keys(initials2).map((i) => (
                  <th className="border p-1 text-pink-400" key={i}>
                    <Link href={initialURL + i}>{i}</Link>
                  </th>
                ))}
              </tr>
              <tr>
                {Object.values(initials2).map((i) => (
                  <td key={i}>{i}</td>
                ))}
              </tr>
            </tbody>
          </table>
          <hr className={ccss.hr} />
        </div>
        <div className={ccss.subBlock}>
          <h3 className={ccss.h3}>운모(聲母)</h3>
          <table>
            <tbody>
              <tr>
                {Object.keys(vowels).map((i) => (
                  <th className="border p-1 text-blue-400" key={i}>
                    <Link href={initialURL + i}>{i}</Link>
                  </th>
                ))}
              </tr>
              <tr>
                {Object.values(vowels).map((i) => (
                  <td key={i}>{i}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <div className={ccss.subBlock}>
          <h3 className={ccss.h3 + " mt-4"}>특수 운모</h3>
          <table>
            <tbody>
              <tr>
                {Object.keys(vowels2).map((i) => (
                  <th className="border p-1 text-blue-400" key={i}>
                    {i}
                  </th>
                ))}
              </tr>
              <tr>
                {Object.values(vowels2).map((i) => (
                  <td key={i}>{i}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
