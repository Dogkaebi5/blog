import Link from "next/link";
import syllable from "../../yueYin";

export default function Initial(props) {
  function checkIsInital(text) {
    return !(
      text.startsWith("a") ||
      text.startsWith("e") ||
      text.startsWith("i") ||
      text.startsWith("o") ||
      text.startsWith("u") ||
      text.startsWith("y")
    );
  }

  function checkList(text) {
    let nText;
    text == "-" ? (nText = "") : (nText = text);

    if (alpha == "-") return !checkIsInital(nText);
    if (alpha == "m") {
      return (
        nText.startsWith(alpha) ||
        (nText.endsWith("m") &&
          !nText.endsWith("am") &&
          !nText.endsWith("em") &&
          !nText.endsWith("im"))
      );
    }
    if (alpha == "ng") {
      return (
        nText.startsWith(alpha) ||
        (nText.endsWith("ng") &&
          !nText.endsWith("ang") &&
          !nText.endsWith("eng") &&
          !nText.endsWith("ing") &&
          !nText.endsWith("ong") &&
          !nText.endsWith("ung"))
      );
    }
    if (isInitial) {
      if (alpha == "n")
        return nText.startsWith(alpha) && !nText.startsWith("ng");
      if (alpha == "g")
        return nText.startsWith(alpha) && !nText.startsWith("gw");
      if (alpha == "k")
        return nText.startsWith(alpha) && !nText.startsWith("kw");
      return text.startsWith(alpha);
    }
    if (!isInitial) {
      if (alpha == "ai") return nText.endsWith(alpha) && !nText.endsWith("aai");
      if (alpha == "au") return nText.endsWith(alpha) && !nText.endsWith("aau");
      if (alpha == "am") return nText.endsWith(alpha) && !nText.endsWith("aam");
      if (alpha == "an") return nText.endsWith(alpha) && !nText.endsWith("aan");
      if (alpha == "ang")
        return nText.endsWith(alpha) && !nText.endsWith("aang");
      if (alpha == "ap") return nText.endsWith(alpha) && !nText.endsWith("aap");
      if (alpha == "at") return nText.endsWith(alpha) && !nText.endsWith("aat");
      if (alpha == "ak") return nText.endsWith(alpha) && !nText.endsWith("aak");
      if (alpha == "e") return nText.endsWith(alpha) && !nText.endsWith("oe");
      if (alpha == "eng")
        return nText.endsWith(alpha) && !nText.endsWith("oeng");
      if (alpha == "ek") return nText.endsWith(alpha) && !nText.endsWith("oek");
      if (alpha == "i") {
        return (
          nText.endsWith("i") &&
          !nText.endsWith("ai") &&
          !nText.endsWith("ei") &&
          !nText.endsWith("oi") &&
          !nText.endsWith("ui")
        );
      }
      if (alpha == "oi") return nText.endsWith(alpha) && !nText.endsWith("eoi");
      if (alpha == "on") return nText.endsWith(alpha) && !nText.endsWith("eon");
      if (alpha == "ot") return nText.endsWith(alpha) && !nText.endsWith("eot");
      if (alpha == "u") {
        return (
          nText.endsWith(alpha) &&
          !nText.endsWith("au") &&
          !nText.endsWith("eu") &&
          !nText.endsWith("iu") &&
          !nText.endsWith("ou") &&
          !nText.endsWith("yu")
        );
      }
      if (alpha == "un") return nText.endsWith(alpha) && !nText.endsWith("yun");
      if (alpha == "ut") return nText.endsWith(alpha) && !nText.endsWith("yut");
      return nText.endsWith(alpha);
    }
  }

  const alpha = props.params.id;
  const yueYin = Object.keys(syllable.yueYin);
  //
  const isInitial = checkIsInital(alpha);
  const type = isInitial ? "initial" : "vowel";
  const data = syllable[type][alpha];

  return (
    <div className="p-8">
      <button className="px-4 mb-6 bg-slate-200 rounded-full" type="button">
        <Link href={"/cantonese/syllable"}>&lt;&lt; 음절</Link>
      </button>
      <div className="flex">
        <h1 className="p-8 bg-slate-100 inline-block rounded-md font-bold text-6xl">
          {alpha}
        </h1>
        <div className="p-4">
          <p>
            구분 :
            {isInitial
              ? alpha == "ng" || alpha == "m"
                ? " 성모(聲母) 겸 음모(韻母) "
                : " 성모(聲母)"
              : " 음모(韻母) "}
          </p>
          <p>발음 : [{data.pronunciation}]</p>
        </div>
      </div>
      <div className="p-4">
        <p>{data.detail}</p>
      </div>
      <hr />
      <div className="p-2 mt-4">
        <h3 className="font-bold mb-4">음절 조합</h3>
        <div className="flex flex-wrap">
          {yueYin.map((alp) => {
            return checkList(alp) ? (
              <Link href={`/dictionary/yueyin/${alp}`} key={alp}>
                <span className="p-1 text-blue-600 underline">{alp}</span>
              </Link>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
}
