import Link from "next/link";
import syllable from "../../yueYin";
import * as check from "@/app/controller/checkYueYinType";
import * as ccss from "@/app/controller/cssName";

export default function Initial(props) {
  const alpha = props.params.id;
  const yueYins = Object.keys(syllable.yueYin);
  const isInitial = !check.checkIsVowel(alpha);
  const type = isInitial ? "initial" : "vowel";
  const data = syllable[type][alpha] ?? {
    pronunciation: "-",
    detail: "존재하지 않거나 단독으로 존재하지 않는 발음입니다",
  };

  function checkYueYinList(yueYin) {
    if (alpha == "-") return check.checkIsVowel(yueYin);
    if (alpha == "m") return yueYin.startsWith(alpha) || yueYin.endsWith("hm");
    if (alpha == "ng")
      return yueYin.startsWith(alpha) || yueYin.endsWith("hng");

    if (isInitial) {
      return check.checkIncludeNGK(alpha)
        ? check.checkOnlyStartWithNGK(yueYin, alpha)
        : yueYin.startsWith(alpha);
    }
    if (!isInitial) {
      if (alpha.startsWith("a")) return check.checkLongAVowel(yueYin, alpha);
      if (alpha.startsWith("e")) return check.checkEVowel(yueYin, alpha);
      if (alpha == "i") return check.checkIVowel(yueYin, alpha);
      if (alpha.startsWith("o")) return check.checkOVowel(yueYin, alpha);
      if (alpha.startsWith("u")) return check.checkUVowel(yueYin, alpha);
      return yueYin.endsWith(alpha);
    }
  }

  const yueYinURL = "/cantonese/syllable/yueyin/";

  let keyIndex = 0;

  return (
    <div className={ccss.noHeroContent}>
      <div className={ccss.headerBtnBlock}>
        <button className={ccss.headerBtn}>
          <Link href={"/cantonese/syllable"}>&lt;&lt; 음절</Link>
        </button>
      </div>
      <div className={ccss.mainBlock}>
        <div className="flex">
          <h1 className={ccss.alpTitle}>{alpha}</h1>
          <div className={ccss.subBlock + " py-4"}>
            <p className="font-bold mb-2">
              {isInitial
                ? alpha == "ng" || alpha == "m"
                  ? " 성모(聲母) 겸 음모(韻母) "
                  : " 성모(聲母)"
                : " 음모(韻母) "}
            </p>
            <p>발음 : {data.pronunciation}</p>
          </div>
        </div>
        <div className={ccss.subBlock + " pt-4"}>
          {data.detail.split("/").map((content) => (
            <p key={alpha + keyIndex++}>{content}</p>
          ))}
        </div>
        <hr className={ccss.hr} />
        <div className={ccss.subBlock}>
          <h2 className={ccss.h2}>음절 조합</h2>
          <div className={ccss.alpCardWrap}>
            {yueYins.map((yueYin) => {
              return checkYueYinList(yueYin) ? (
                <Link
                  className={ccss.alpCardOutBox}
                  href={yueYinURL + yueYin}
                  key={yueYin}
                >
                  <span className={ccss.alpCardInBox}>{yueYin}</span>
                </Link>
              ) : null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
