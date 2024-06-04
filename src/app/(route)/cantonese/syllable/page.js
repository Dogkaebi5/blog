"use client";

import Link from "next/link";

import Heros from "@components/Heros";
import SubNav from "@components/SubNav";
import JyutPingTable from "@components/JyutPingTable";
import * as ccss from "@controller/cssName";
import { simpleSyllableURL, initialURL, vowelURL, toneURL } from "@controller/urls";

export default function Syllable() {
  const syllableDescription = `<br/>광둥어 발음과 표기법을 뜻한다.
<br/>중국도 광둥어 전공은 있지만 통일된 학습법이 있지는 않다.
<br/>즉 학파와 학교마다 표기법이 다른 경우가 많다.
<br/><br/>월음의 대표적인 표기법은 :
<br/>① 월병(粵拼), ② 황석릉(黃錫凌), ③ 예일(耶魯), ④ 광저우(廣州), ⑤ IPA, ⑥ 교원(教院), ⑦ 유석상(劉錫祥) 등이 있다.
<br/>본 사이트에서 사용하는 월음은 월병
`;

  const urls = {
    initial: { title: "聲母", url: initialURL },
    vowel: { title: "韻母", url: vowelURL },
    tone: { title: "聲調", url: toneURL },
  };

  const LinkCard = ({ type }) => {
    return (
      <Link className={ccss.syllableLinkCard} href={urls[type].url}>
        <p className="text-3xl font-bold">{urls[type].title}</p>
        <p>자세히 알아보기➡️</p>
      </Link>
    );
  };

  return (
    <>
      <Heros path="tc" />
      <SubNav path="tc" slug="syllable" />
      <section className="text-center mb-8 max-w-4xl">
        <div className={ccss.syllableWrap}>
          <div className={ccss.syllableDetail}>
            <span className={ccss.h2}>월음(粵音)</span>
            <span dangerouslySetInnerHTML={{ __html: syllableDescription }} />
            <span className=" bg-green-100 p-1/2 rounded-xl ">(粵拼)</span>이다.
            <p className="my-2">
              <Link className={ccss.headerBtn + " inline-block"} href={simpleSyllableURL}>
                월음 간략 설명 ➡️
              </Link>
            </p>
            <div className="mt-4">
              월음은 <span className="font-bold">성모(聲母), 운모(韻母), 성조(聲調)</span>으로 구성된다.
            </div>
            <div className={ccss.syllableSelectorsWrap + " mt-4"}>
              <LinkCard type="initial" />
              <LinkCard type="vowel" />
              <LinkCard type="tone" />
            </div>
          </div>
        </div>
        <JyutPingTable />
      </section>
    </>
  );
}
