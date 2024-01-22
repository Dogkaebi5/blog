export default function Syllable() {
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
  const vowels = { a: "ㅏ", e: "ㅔ", i: "ㅣ", o: "ㅗㅓ", u: "ㅜ", y: "ㅣ" };

  return (
    <div className="p-4">
      <div className="p-4">
        <p>성모(聲母)</p>
        <table>
          <tbody className="text-center">
            <tr>
              {Object.keys(initials).map((i) => (
                <th className="border p-1 text-pink-400" key={i}>
                  {i}
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
              <th className="border p-1 text-pink-400">p</th>
              <th className="border p-1 text-pink-400">t</th>
              <th className="border p-1 text-pink-400">k</th>
              <th className="border p-1 text-pink-400">n</th>
              <th className="border p-1 text-pink-400">ng</th>
              <th className="border p-1 text-pink-400">m</th>
            </tr>
            <tr>
              <td className="border p-1">ㅍ(ㅂ)</td>
              <td className="border p-1">ㅌ(ㄷ)</td>
              <td className="border p-1">ㅋ(ㄱ)</td>
              <td className="border p-1">ㄴ</td>
              <td className="border p-1">ㅇ</td>
              <td className="border p-1">ㅁ</td>
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
                  {i}
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
              <th className="border p-1 text-blue-400">ing</th>
              <th className="border p-1 text-blue-400">oe</th>
              <th className="border p-1 text-blue-400">eo</th>
              <th className="border p-1 text-blue-400">yu</th>
            </tr>
            <tr>
              <td className="border p-1">앵</td>
              <td className="border p-1">ㅕ</td>
              <td className="border p-1">ㅗ</td>
              <td className="border p-1">ㅟ</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
