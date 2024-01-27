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
  const data = syllable[type][alpha] ?? {
    pronunciation: "-",
    detail: "존재하지 않거나 단독으로 존재하지 않는 발음입니다",
  };

  function checkYueYinList(yueYin) {
    if (alpha == "-") return checkIsVowel(yueYin);
    if (alpha == "m") return yueYin.startsWith(alpha) || yueYin.endsWith("hm");
    if (alpha == "ng")
      return yueYin.startsWith(alpha) || yueYin.endsWith("hng");

    if (isInitial) {
      return checkIncludeNGK(alpha)
        ? checkOnlyStartWithNGK(yueYin, alpha)
        : yueYin.startsWith(alpha);
    }
    if (!isInitial) {
      if (alpha.startsWith("a")) return checkLongAVowel(yueYin, alpha);
      if (alpha.startsWith("e")) return checkEVowel(yueYin, alpha);
      if (alpha == "i") return checkIVowel(yueYin, alpha);
      if (alpha.startsWith("o")) return checkOVowel(yueYin, alpha);
      if (alpha.startsWith("u")) return checkUVowel(yueYin, alpha);
      return yueYin.endsWith(alpha);
    }
  }

  const yueYinURL = "/cantonese/syllable/yueyin/";

  let keyIndex = 0;

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
          <p>발음 : {data.pronunciation}</p>
        </div>
      </div>
      <div className="p-4">
        {data.detail.split("/").map((content) => (
          <p key={alpha + keyIndex++}>{content}</p>
        ))}
      </div>
      <hr />
      <div className="p-2 mt-4">
        <h3 className="font-bold mb-4">음절 조합</h3>
        <div className="flex flex-wrap">
          {yueYins.map((yueYin) => {
            return checkYueYinList(yueYin) ? (
              <Link href={yueYinURL + yueYin} key={yueYin}>
                <span className="p-1 text-blue-600 underline">{yueYin}</span>
              </Link>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
}
