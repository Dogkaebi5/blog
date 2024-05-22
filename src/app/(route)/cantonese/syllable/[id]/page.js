import Link from "next/link";
import { syllable } from "@controller/yueYin";
import { initialURL } from "@controller/urls";
import { checkIsVowel } from "@controller/checkYueYinType";
import * as ccss from "@controller/cssName";
import YueYinPlayer from "@components/YueYinPlayer";

export async function generateMetadata(props) {
  return {
    title: `DogKaeBi | Cantonese 월음(粵音) [${props.params.id}]`,
    description: `광둥어의 음절 [${props.params.id}] 발음 및 성조 조합`,
    icons: { icon: "/logo.png" },
    openGraph: {
      title: `DogKaeBi | Cantonese 월음(粵音) [${props.params.id}]`,
      description: `광둥어의 음절 [${props.params.id}] 발음 및 성조 조합`,
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
      title: `DogKaeBi | Cantonese 월음(粵音) [${props.params.id}]`,
      description: `광둥어의 음절 [${props.params.id}] 발음 및 성조 조합`,
      url: "dogkaebi.com",
      site: "DogKaeBi 독깨비",
      images: { url: "https://dogkaebi.com/logo2.png", alt: "dogkaebi" },
    },
  };
}

export default function YueYin(props) {
  const yueYin = props.params.id;
  // 성모 운모 분리
  function splitYueYin() {
    if (checkIsVowel(yueYin)) return ["", yueYin];
    if (yueYin.startsWith("gw") || yueYin.startsWith("kw")) return [yueYin.substring(0, 2), yueYin.substring(2)];
    if (yueYin.startsWith("ng")) return yueYin.length == 2 ? ["", yueYin] : [yueYin.substring(0, 2), yueYin.substring(2)];
    if (yueYin.startsWith("m")) return yueYin.length == 1 ? ["", yueYin] : [yueYin.substring(0, 1), yueYin.substring(1)];
    return [yueYin.substring(0, 1), yueYin.substring(1)];
  }

  const initial = splitYueYin()[0];
  const vowel = splitYueYin()[1];
  const data = syllable.yueYin[yueYin];
  const yueYinArr = data.tone.map((tone) => yueYin + tone);
  const initialBtnText = initial == "" ? "👈 성모표" : `👈 성모 [ ${initial} ]`;

  return (
    <div className={ccss.noHeroContent}>
      <div className={ccss.headerBtnBlock}>
        <Link className={ccss.headerBtn} href={initialURL + initial}>
          {initialBtnText}
        </Link>
        <Link className={ccss.headerBtn} href={initialURL + vowel}>
          운모 [ {vowel} ] 👉
        </Link>
      </div>
      <div className={ccss.mainBlock}>
        <div className="flex">
          <h1 className={ccss.alpTitle}>{yueYin}</h1>
          <div className={ccss.subBlock + " m-4"}>
            <p className="font-bold mb-2">월음 (粵音)</p>
            <p>발음 : [{data.pronunciation}]</p>
          </div>
        </div>
        <div className={ccss.subBlock + " pt-4"}>
          <p>성모 : {initial}</p>
          <p>운모 : {vowel}</p>
        </div>
        <div className={ccss.hr} />
        <div className={ccss.subBlock}>
          <h2 className={ccss.h2}>성조</h2>
          <YueYinPlayer yueYinArr={yueYinArr} />
        </div>
      </div>
    </div>
  );
}
