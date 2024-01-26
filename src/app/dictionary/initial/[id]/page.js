import Link from "next/link";
import syllable from "../../yueYin";
import {
  checkEVowel,
  checkIVowel,
  checkIncludeNGK,
  checkIsVowel,
  checkLongAVowel,
  checkOVowel,
  checkOnlyStartWithNGK,
  checkUVowel,
} from "@/app/controller/checkYueYinType";

export default function Initial(props) {
  const alpha = props.params.id;
  const yueYins = Object.keys(syllable.yueYin);
  const isInitial = !checkIsVowel(alpha);
  const type = isInitial ? "initial" : "vowel";
  const data = syllable[type][alpha];

  function checkYueYinList(yueYin) {
    if (alpha == "-") return checkIsVowel(yueYin);
    if (alpha == "m") return nText.startsWith(alpha) || nText.endsWith("hm");
    if (alpha == "ng") return nText.startsWith(alpha) || nText.endsWith("hng");

    if (isInitial) {
      return checkIncludeNGK(alpha)
        ? checkOnlyStartWithNGK(nText, alpha)
        : nText.startsWith(alpha);
    }
    if (!isInitial) {
      if (alpha.startsWith("a")) return checkLongAVowel(yueYin, alpha);
      if (alpha.startsWith("e")) return checkEVowel(yueYin, alpha);
      if (alpha == "i") return checkIVowel(yueYin, alpha);
      if (alpha.startsWith("o")) return checkOVowel(yueYin, alpha);
      if (alpha.startsWith("u")) return checkUVowel(yueYin, alpha);
      return nText.endsWith(alpha);
    }
  }

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
          {yueYins.map((yueYin) => {
            return checkYueYinList(yueYin) ? (
              <Link href={`/dictionary/yueyin/${yueYin}`} key={yueYin}>
                <span className="p-1 text-blue-600 underline">{yueYin}</span>
              </Link>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
}
