import { syllableURL } from "@/app/controller/urls";
import * as ccss from "@controller/cssName";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "DogKaeBi | Cantonese 성조",
  description: "광둥어 성조의 종류 및 성조에 대한 설명",
  icons: { icon: "/logo.png" },
  openGraph: {
    title: "DogKaeBi | Cantonese 성조",
    description: "광둥어 성조의 종류 및 성조에 대한 설명",
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
    title: "DogKaeBi | Cantonese 성조",
    description: "광둥어 성조의 종류 및 성조에 대한 설명",
    url: "dogkaebi.com",
    site: "DogKaeBi 독깨비",
    images: { url: "https://dogkaebi.com/logo2.png", alt: "dogkaebi" },
  },
};

export default function Syllable() {
  const toneTable = [
    ["1", "IA", "陰平 (음평)", "上陰入 (상음입)"],
    ["2", "IIA", "陰上 (음상)", ""],
    ["3", "IIIA", "陰去 (음거)", "下陰入 (하음입)"],
    ["4", "IB", "陽平 (양평)", ""],
    ["5", "IIB", "陽上 (양상)", ""],
    ["6", "IIIB", "陽去 (양거)", "陽入 (양입)"],
  ];

  const toneDescription = `광둥어의 성조는 9성6조(九聲六調)이다.
간단하게 설명하면 성조는 6개이고, 입성(入聲)이 있다.

성조의 뜻은 음높이가 변화하는 것을 뜻한다. 
예시로 '도 → 도# → 레'의 변화와 비슷하다
모든 중국어(각 방언 포함)의 발음은 일반적으로 5개 음높이에서 성조를 만든다.`;

  const LinkText = ({ text }) => {
    return (
      <Link className={ccss.linkGreenText + " underline"} href={syllableURL + text}>
        {text}
      </Link>
    );
  };

  return (
    <div className={ccss.noHeroContent}>
      <div className={ccss.headerBtnBlock}>
        <Link className={ccss.headerBtn} href={"/cantonese/syllable"}>
          👈 음절
        </Link>
      </div>
      <div className={ccss.mainBlock}>
        <h1 className={ccss.h1}>광둥어 성조(聲調)</h1>
        <p className={ccss.textBox}>{toneDescription}</p>
        <div className={ccss.hr} />
        <h2 className={ccss.h2}>광둥어 성조</h2>
        <table className="my-4 text-sm">
          <tbody>
            <tr>
              <td className={ccss.tGray}>월병</td>
              <td className={ccss.tGray}>표기</td>
              <td className={ccss.tGray}>명칭</td>
              <td className={ccss.tGray}>入聲 (입성)</td>
            </tr>
            {toneTable.map((span) => {
              return (
                <tr key={span[0]}>
                  <td className="px-4">{span[0]}</td>
                  <td className="px-4">{span[1]}</td>
                  <td className="px-4">{span[2]}</td>
                  <td className="px-4">{span[3]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className={ccss.textBox}>
          <span className="font-bold"> 陰平, 陰上, 陰去, 陽平, 陽上, 陽去, 上陰入, 下陰入, 陽入</span>
          <br /> 성조의 정식명칭은 평상거입(平上去入)의 이름이다.
          <br />
          <br /> 성은 총 9개가 있지만 성조는
          <br /> 1, 2, 3, 4, 5, 6 으로 표기한다.
          <br />
          <br /> 광둥어 발음 중에서 모든 성조가 다 있는 음절은 매우 적다.
          <br /> <LinkText text="maa" /> ,&nbsp; <LinkText text="si" /> ,&nbsp; <LinkText text="ngaa" /> &nbsp;가 대표적인 모든 성조가 있는 음절이다.
        </div>
        <div className={ccss.hr} />
        <h2 className={ccss.h2}>광둥어 입성(入聲)</h2>
        <div className={ccss.textBox}>
          <span className="font-bold"> 上陰入, 下陰入, 陽入</span>
          <br /> 입성은 한국어의 받침음과 비슷하다.
          <br /> 운미(韻尾)가 p, t, k 으로, 끝부분이 짧은 발음이다.
          <br />
          <br /> 7, 8, 9성은 1, 3, 6성과 같은 조(調)다
          <br /> 1, 3, 6성으로 7, 8, 9성조를 표기한다.
        </div>
        <div className={ccss.hr} />
        <h2 className={ccss.h2}>광둥어 성조 발음 예시</h2>
        <div className={ccss.textBox}>
          시작 음은 사람마다 다르다. 태생으로 낮거나 높을 수 있다.
          <br />
          <br />
          예시.
          <br />
          음역이 &#39;도, 도#, 레, 레#, 미&#39;인 사람의 경우
          <br />각 음을 1, 2, 3, 4, 5로 표기하면
          <br />
          보통화 발음은 [ 55, 35, 214, 51 ] 4개 성조이다.
          <br />
          광둥어 발음은 [ 55, 35, 33, 11, 13, 22 ] 6개 성조와 [5, 3, 2] 3개 입성이다.
          <br />
          입성의 성조는 1성, 3성, 6성의 짧은 음으로 음절표기는 1, 3, 6를 사용한다.
          <Image
            className="py-4"
            width={600}
            height={400}
            alt="tone"
            src="https://blogfiles.pstatic.net/MjAyMTAzMDlfNjkg/MDAxNjE1MjUzMDE1MzMy.TI8nWZICWMDE6nlg0qBCycpQ_9HMeCAnllQhzVsWorsg.6IDE3mH6hODoqDjEhRQl2J462iScFgWa9Cfetl3LuYIg.JPEG.st9dog/SE-e449a329-8faa-4fd9-88f7-79ae74fad006.jpg"
          />
        </div>
        <div className={ccss.hr} />
        <h2 className={ccss.h2}>평상거입(平上去入)</h2>
        <div className={ccss.textBox}>
          평상거입은 중국 발음 체계이다. <br />
          <br />
          보통화의 성조는 음평(陰平), 양평(陽平), 상성(上聲), 거성(去聲)이다.
          <br />
          보통화는 입성이 없다.
          <br /> <br />
          입성(入聲)은 사성인 평상거입(平上去入)중 하나로, 짧고 빨리 닫는 소리를 얘기한다. <br />
          <br />
          훈민정음에도 사용된 것으로 보아 한국어도 평상거입이 있었을 것이다.
          <br />
          &#39;ㄱ, ㄷ, ㄹ, ㅂ, ㅅ&#39; 받침인 글자가 입성이다.
          <br />
          (광둥어는 &#39;ㄹ&#39; 받침음은 없다)
        </div>
        <div className={ccss.hr} />
        <h2 className={ccss.h2}>한국어 성조</h2>
        <div className={ccss.textBox}>
          한국어에 대한 오해 중 하나가 &quot;한국어에 성조가 없다&quot;이다.
          <br />
          <br /> 훈민정음에도 평상거입이 있었다.
          <br /> 옛날 한국어는 성조 체계가 있었던 것 같다.
          <br />
          <br /> 현재 한국어도 성조는 있다. 모든 소리는 성조가 있다.
          <br /> 하지만 한국어는 성조가 달라도 의미가 크게 변화하지 않는다.
          <br />
          <br /> 하지만 &quot;밥 먹었어&quot;와 &quot;밥 먹었어?&quot; 같은 말은 성조로 구분한다.
        </div>
        <div className={ccss.hr} />
        <h2 className={ccss.h2}>다른 광둥어 성조 표기법</h2>
        <div className={ccss.textBox}>
          홍콩어언학학회, 예일(현재), 만국음표, 광저우, 유석상은 전부 숫자로 표기한다.
          <br /> <span className="font-bold">1, 2, 3, 4, 5, 6</span>
          <br />
          <br />
          예일(전통) : <span className="border p-1 rounded">⎺</span>
          <span className="border p-1 rounded">
            <sup>
              <span className="text-[8px]">╱</span>
            </sup>
          </span>
          <span className="border p-1 rounded">&nbsp;&nbsp;</span>
          <span className="border p-1 rounded">
            <sup>
              <span className="text-[8px]">╲</span>
            </sup>
            h
          </span>
          <span className="border p-1 rounded">
            <sup>
              <span className="text-[8px]">╱</span>
            </sup>
            h
          </span>
          <span className="border p-1 rounded">h</span>
          <br />
          <br />
          황석릉 :{" "}
          <span className="border py-1 px-2 rounded">
            <sup>
              <span className="text-[6px]">│</span>
            </sup>
          </span>
          <span className="border py-1 px-2 rounded">
            <sup>
              <span className="text-[6px]">╱</span>
            </sup>
          </span>
          <span className="border py-1 px-2 rounded">
            <sup>
              <span className="text-[6px]">─</span>
            </sup>
          </span>
          <span className="border py-1 px-2 rounded">
            <sub>
              <span className="text-[6px]">│</span>
            </sub>
          </span>
          <span className="border py-1 px-2 rounded">
            <sub>
              <span className="text-[6px]">╱</span>
            </sub>
          </span>
          <span className="border py-1 px-2 rounded">
            <sub>
              <span className="text-[6px]">─</span>
            </sub>
          </span>
        </div>
      </div>
    </div>
  );
}
