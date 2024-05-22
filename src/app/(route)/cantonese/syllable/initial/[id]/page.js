import Link from "next/link";
import { syllable } from "@controller/yueYin";
import { syllableURL } from "@controller/urls";
import * as check from "@controller/checkYueYinType";
import * as ccss from "@controller/cssName";

export async function generateMetadata(props) {
  return {
    title: `DogKaeBi | Cantonese 음절 [${props.params.id}]`,
    description: `광둥어의 음절 [${props.params.id}] 발음 및 조합`,
    icons: { icon: "/logo.png" },
    openGraph: {
      title: `DogKaeBi | Cantonese 음절 [${props.params.id}]`,
      description: `광둥어의 음절 [${props.params.id}] 발음 및 조합`,
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
      title: `DogKaeBi | Cantonese 음절 [${props.params.id}]`,
      description: `광둥어의 음절 [${props.params.id}] 발음 및 조합`,
      url: "dogkaebi.com",
      site: "DogKaeBi 독깨비",
      images: { url: "https://dogkaebi.com/logo2.png", alt: "dogkaebi" },
    },
  };
}

export default function Initial(props) {
  // 성모 or 운모 확인
  const alpha = props.params.id;
  const isInitial = !check.checkIsVowel(alpha);

  const type = {
    true: { en: "initial", kr: "성모(聲母)" },
    false: { en: "vowel", kr: "음모(韻母)" },
  };

  const yueYins = Object.keys(syllable.yueYin);
  // 해당 성모 or 운모 데이터.
  const data = syllable[type[isInitial].en][alpha] ?? {
    pronunciation: "-",
    detail: "존재하지 않거나 단독으로 존재하지 않는 발음입니다",
  };

  //포함된 월음 찾기 (ctrller에 각 함수)
  function checkYueYinList(yueYin) {
    if (alpha == "-") return check.checkIsVowel(yueYin);
    if (alpha == "m") return yueYin.startsWith(alpha) || yueYin.endsWith("hm");
    if (alpha == "ng") return yueYin.startsWith(alpha) || yueYin.endsWith("hng");

    if (isInitial) {
      return check.checkIncludeNGK(alpha) ? check.checkOnlyStartWithNGK(yueYin, alpha) : yueYin.startsWith(alpha);
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

  // content(상세내역) key 생성용
  // TODO: content 태그 출력 여부
  let contentKeyIndex = 0;

  return (
    <div className={ccss.noHeroContent}>
      <div className={ccss.headerBtnBlock}>
        <button className={ccss.headerBtn}>
          <Link href={syllableURL}>👈 음절</Link>
        </button>
      </div>
      <div className={ccss.mainBlock}>
        <div className="flex">
          <h1 className={ccss.alpTitle}>{alpha}</h1>
          <div className={ccss.subBlock + " m-4"}>
            <p className="font-bold mb-2">{alpha == "ng" || alpha == "m" ? " 성모(聲母) 겸 음모(韻母) " : type[isInitial].kr}</p>
            <p>발음 : {data.pronunciation}</p>
          </div>
        </div>
        <div className={ccss.subBlock + " pt-4"}>
          {data.detail.split("/").map((content) => (
            <p key={alpha + contentKeyIndex++}>{content}</p>
          ))}
        </div>
        <div className={ccss.hr} />
        <div className={ccss.subBlock}>
          <h2 className={ccss.h2}>음절 조합</h2>
          <div className={ccss.alpCardWrap}>
            {yueYins.map((yueYin) => {
              return checkYueYinList(yueYin) ? (
                <Link className={ccss.alpCardOutBox} href={syllableURL + yueYin} key={yueYin}>
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
