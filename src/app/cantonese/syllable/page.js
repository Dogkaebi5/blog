const initial = [
  "",
  "b",
  "p",
  "m",
  "f",
  "d",
  "t",
  "n",
  "l",
  "g",
  "k",
  "ng",
  "h",
  "gw",
  "kw",
  "w",
  "z",
  "c",
  "s",
  "j",
];
const vowels = [
  "",
  "aa",
  "aai",
  "aau",
  "aam",
  "aan",
  "aang",
  "aap",
  "aat",
  "aak",
  "ai",
  "au",
  "am",
  "an",
  "ang",
  "ap",
  "at",
  "ak",
  "e",
  "ei",
  "eu",
  "em",
  "eng",
  "ep",
  "ek",
  "i",
  "iu",
  "im",
  "in",
  "ing",
  "ip",
  "it",
  "ik",
  "o",
  "oi",
  "ou",
  "on",
  "ong",
  "ot",
  "ok",
  "oe",
  "oeng",
  "oek",
  "eoi",
  "eon",
  "eot",
  "u",
  "ui",
  "un",
  "ung",
  "ut",
  "uk",
  "yu",
  "yun",
  "yut",
  "m",
  "ng",
];

const excep = [
  "faau",
  "daau",
  "taau",
  "gwaau",
  "kwaau",
  "waau",
  "jaau",
  "baam",
  "paam",
  "faam",
  "kaam",
  "gwaam",
  "kwaam",
  "waam",
  "jaam",
  "kaan",
  "kwaan",
  "jaan",
  "faang",
  "daang",
  "taang",
  "naang",
  "kaang",
  "jaang",
  "baap",
  "paap",
  "maap",
  "faap",
  "kaap",
  "gwaap",
  "kwaap",
];

export default function Syllable() {
  return (
    <div className="w-full mt-8 text-center">
      <table className="mx-auto border">
        {vowels.map((vowel) => (
          <tr key={vowel}>
            <td className="text-pink-600 border">{vowel}</td>
            {initial.map((alpha) => (
              <td
                className={
                  alpha == alpha + vowel ? "text-blue-600 border" : "border"
                }
                key={alpha}
              >
                {excep.includes(alpha + vowel) ? null : alpha + vowel}
              </td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
}
