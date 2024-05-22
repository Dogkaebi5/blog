import Link from "next/link";
import * as ccss from "@controller/cssName";
import { initialURL, syllableURL } from "@controller/urls";

export const metadata = {
  title: "DogKaeBi | Cantonese 발음",
  description: "최소한의 광둥어 발음 및 간단화 정리",
  icons: { icon: "/logo.png" },
  openGraph: {
    title: "DogKaeBi | Cantonese 발음",
    description: "최소한의 광둥어 발음 및 간단화 정리",
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
    title: "DogKaeBi | Cantonese 발음",
    description: "최소한의 광둥어 발음 및 간단화 정리",
    url: "dogkaebi.com",
    site: "DogKaeBi 독깨비",
    images: { url: "https://dogkaebi.com/logo2.png", alt: "dogkaebi" },
  },
};

export default function SyllableSp() {
  const initials = [
    ["b", "p", "m", "f", "d", "t", "n", "l", "g", "k", "ng", "w", "z", "c", "s", "j"],
    ["ㅂ", "ㅍ", "ㅁ", "ㅎ", "ㄷ", "ㅌ", "ㄴ", "ㄹ", "ㄱ", "ㅋ", "으", "우", "ㅈ", "ㅊ", "ㅅ", "이"],
    ["p", "t", "k", "n", "ng", "m"],
    ["ㅍ(ㅂ)", "ㅅ(ㄷ)", "ㅋ(ㄱ)", "ㄴ", "ㅇ", "ㅁ"],
  ];

  const vowels = [
    ["a", "e", "i", " o", "u", "y"],
    ["ㅏ", "ㅔ", "ㅣ", "ㅗㅓ", "ㅜ", "ㅣ"],
    ["ing", "oe", "eo", "yu"],
    ["앵", "ㅕ", "ㅗ", "ㅟ"],
  ];

  const thClass = "border p-1 hover:underline ";

  return (
    <div className={ccss.noHeroContent}>
      <div className={ccss.mainBlock}>
        <h1 className={ccss.h1}>음절(音節) 간단하게 보기</h1>
        <div className={ccss.textBox}>
          <p>[음절 간단하게 보기]는 이해를 돕기위한 예시로 실제의 월음 음절(粵音音節)와는 내용이 다르니, 음절의 자세한 내용은 성모, 운모, 음절에서 확인하세요.</p>
        </div>
        <div className="flex justify-between mt-8">
          <Link className={ccss.headerBtn} href={syllableURL}>
            월음 👉
          </Link>
          <Link className={ccss.headerBtn} href={syllableURL + "initial"}>
            성모 👉
          </Link>
          <Link className={ccss.headerBtn} href={syllableURL + "vowel"}>
            운모 👉
          </Link>
        </div>
        <hr className={ccss.hr} />
        <div className={ccss.subBlock}>
          <h3 className="font-bold">성모(聲母)</h3>
          <div className="scrollBarX overflow-x-scroll p-1 bg-gray-50">
            <tbody>
              <tr>
                {initials[0].map((i) => (
                  <th className={thClass + "text-pink-400"} key={i}>
                    <Link href={initialURL + i}>{i}</Link>
                  </th>
                ))}
              </tr>
              <tr>
                {initials[1].map((i) => (
                  <td key={i}>{i}</td>
                ))}
              </tr>
            </tbody>
          </div>
          <h3 className="font-bold mt-4">받침 성모</h3>
          <div className="scrollBarX overflow-x-scroll p-1 bg-gray-50">
            <tbody>
              <tr>
                {initials[2].map((i) => (
                  <th className={thClass + "text-pink-400 min-w-16"} key={i}>
                    <Link href={initialURL + i}>{i}</Link>
                  </th>
                ))}
              </tr>
              <tr>
                {initials[3].map((i) => (
                  <td key={i}>{i}</td>
                ))}
              </tr>
            </tbody>
          </div>
        </div>
        <hr className={ccss.hr} />
        <div className={ccss.subBlock}>
          <h3 className="font-bold">운모(聲母)</h3>
          <div className="scrollBarX overflow-x-scroll p-1 bg-gray-50">
            <tbody>
              <tr>
                {vowels[0].map((v) => (
                  <th className={thClass + "text-blue-400 min-w-10"} key={v}>
                    <Link href={initialURL + v}>{v}</Link>
                  </th>
                ))}
              </tr>
              <tr>
                {vowels[1].map((v) => (
                  <td key={v}>{v}</td>
                ))}
              </tr>
            </tbody>
          </div>
          <h3 className="font-bold mt-4">특수 운모</h3>
          <div className="scrollBarX overflow-x-scroll p-1 bg-gray-50">
            <tbody>
              <tr>
                {vowels[2].map((v) => (
                  <th className={thClass + "text-blue-400 min-w-10"} key={v}>
                    {v}
                  </th>
                ))}
              </tr>
              <tr>
                {vowels[3].map((v) => (
                  <td key={v}>{v}</td>
                ))}
              </tr>
            </tbody>
          </div>
        </div>
      </div>
    </div>
  );
}
