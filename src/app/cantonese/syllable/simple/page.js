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

  const initialURL = "/cantonese/syllable/initial/";

  return (
    <div className="p-4">
      <div className="p-4">
        <p>성모(聲母)</p>
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
      <div className="p-4">
        <p>받침 성모</p>
        <table>
          <tbody className="text-center">
            <tr>
              {Object.keys(initials2).map((i) => (
                <th className="border p-1 text-pink-400" key={i}>
                  <Link href={initialURL + i}>{i}</Link>
                </th>
              ))}
            </tr>
            <tr>
              {Object.values(initials2).map((i) => (
                <td className="border p-1" key={i}>
                  {i}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <div className="p-4">
        <p>운모(聲母)</p>
        <table>
          <tbody className="text-center">
            <tr>
              {Object.keys(vowels).map((i) => (
                <th className="border p-1 text-blue-400" key={i}>
                  <Link href={initialURL + i}>{i}</Link>
                </th>
              ))}
            </tr>
            <tr>
              {Object.values(vowels).map((i) => (
                <td className="border p-1" key={i}>
                  {i}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <div className="p-4">
        <p>특수 운모</p>
        <table>
          <tbody className="text-center">
            <tr>
              {Object.keys(vowels2).map((i) => (
                <th className="border p-1 text-blue-400" key={i}>
                  {i}
                </th>
              ))}
            </tr>
            <tr>
              {Object.values(vowels2).map((i) => (
                <td className="border p-1" key={i}>
                  {i}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
