import * as ccss from "@/app/controller/cssName";
import Image from "next/image";
import Link from "next/link";

export default function Syllable() {
  const yueYinURL = "/cantonese/syllable/yueyin/";
  return (
    <div className={ccss.noHeroContent}>
      <div className={ccss.headerBtnBlock}>
        <button className={ccss.headerBtn} type="button">
          <Link href={"/cantonese/syllable"}>&lt;&lt; 음절</Link>
        </button>
      </div>
      <div className={ccss.mainBlock}>
        <h1 className={ccss.h1}>성조(聲調)</h1>
        <p className={ccss.textBox}>
          광둥어의 성조는 9성6조(九聲六調)이다.
          <br />
          간단하게 설명하면 성조는 6개이고, 입성(入聲)이 있다.
          <br />
          <br />
          성조의 뜻은 음높이가 변화하는 것을 뜻한다. <br />
          예시로 &#39;도&gt;도#&gt;레&#39;의 변화와 비슷하다
          <br />
          모든 중국어(각 방언 포함)의 발음은 일반적으로 5개 음높이에서 성조를
          만든다.
          <br />
        </p>
        <hr className={ccss.hr} />
        <h2 className={ccss.h2}>광둥어 성조</h2>
        <table className="my-4">
          <tbody>
            <tr>
              <td className={ccss.tGray}>구분</td>
              <td className={ccss.tGray}>표기</td>
              <td className={ccss.tGray}>음평 </td>
              <td className={ccss.tGray}>입성</td>
            </tr>
            <tr>
              <td>IA</td>
              <td>1</td>
              <td className="px-4">음평 陰平</td>
              <td className="px-4">상음입 上陰入</td>
            </tr>
            <tr>
              <td>IIA</td>
              <td>2</td>
              <td>음상 陰上</td>
              <td></td>
            </tr>
            <tr>
              <td>IIIA</td>
              <td>3</td>
              <td>음거 陰去</td>
              <td>하음입 下陰入</td>
            </tr>
            <tr>
              <td>IB</td>
              <td>4</td>
              <td>양평 陽平</td>
              <td></td>
            </tr>
            <tr>
              <td>IIB</td>
              <td>5</td>
              <td>양상 陽上</td>
              <td></td>
            </tr>
            <tr>
              <td>IIIB</td>
              <td>6</td>
              <td>양거 陽去</td>
              <td>양입 陽入</td>
            </tr>
          </tbody>
        </table>
        <p className={ccss.textBox}>
          모든 성조가 다 있는 음절은 매우 적다.
          <br />
          <Link className={ccss.linkGreenText} href={yueYinURL + "maa"}>
            maa
          </Link>
          ,&nbsp;
          <Link className={ccss.linkGreenText} href={yueYinURL + "si"}>
            si
          </Link>
          ,&nbsp;
          <Link className={ccss.linkGreenText} href={yueYinURL + "ngaa"}>
            ngaa
          </Link>
          &nbsp;가 대표적인 모든 성조가 있는 음절이다.
        </p>
        <hr className={ccss.hr} />
        <h2 className={ccss.h2}>성조 변화 예시</h2>
        <p className={ccss.textBox}>
          시작하는 음은 사람마다 다르다. <br />
          사람의 목소리 음이 태생으로 낮거나 높을 수 있다.
          <br />
          <br />
          예시로 음역이 &#39;도, 도#, 레, 레#, 미&#39;인 사람의 경우
          <br />
          각 음을 1, 2, 3, 4, 5로 표기하면
          <br />
          보통화 발음은 [ 55, 35, 214, 51] 4개 성조이다.
          <br />
          광둥어 발음은 [ 55, 35, 33, 11, 13, 22 ] 6개 성조와 [5, 3, 2] 3개
          입성이다.
          <br /> 입성의 성조는 1성, 3성, 6성의 짧은 음으로 음절표기는 1, 3, 6를
          사용한다.
          <Image
            className="py-4"
            width={600}
            height={400}
            alt="tone"
            src="https://blogfiles.pstatic.net/MjAyMTAzMDlfNjkg/MDAxNjE1MjUzMDE1MzMy.TI8nWZICWMDE6nlg0qBCycpQ_9HMeCAnllQhzVsWorsg.6IDE3mH6hODoqDjEhRQl2J462iScFgWa9Cfetl3LuYIg.JPEG.st9dog/SE-e449a329-8faa-4fd9-88f7-79ae74fad006.jpg"
          />
        </p>
        <hr className={ccss.hr} />
        <h2 className={ccss.h2}>평상거입(平上去入)</h2>
        <p className={ccss.textBox}>
          평상거입은 중국 발음 체계이다. <br />
          <br />
          보통화의 성조는 음평(陰平), 양평(陽平), 상성(上聲), 거성(去聲)이다.
          <br />
          보통화는 입성이 없다.
          <br />
          <br />
          입성(入聲)은 사성인 평상거입(平上去入)중 하나로, 짧고 빨리 닫는 소리를
          얘기한다. <br />
          <br />
          훈민정음에도 사용된 것으로 보아 한국어도 평상거입이 있었을 것이다.
          <br />
          &#39;ㄱ, ㄷ, ㄹ, ㅂ, ㅅ&#39; 받침인 글자가 입성이다.
          <br />
          (광둥어는 &#39;ㄹ&#39; 받침음은 없다)
        </p>
        <hr className={ccss.hr} />
        <h2 className={ccss.h2}>한국어 성조</h2>
        <p className={ccss.textBox}>
          한국어에 대한 오해 중 하나가 &quot;한국어에 성조가 없다&quot;이다.
          <br />
          <br />
          훈민정음에도 평상거입이 있었다.
          <br />
          옛날 한국어는 성조 체계가 있었던 것 같다.
          <br />
          <br />
          현재 한국어도 성조는 있다. 모든 소리는 성조가 있다.
          <br />
          하지만 한국어는 성조가 달라도 의미가 크게 변화하지 않는다.
          <br />
          <br /> 하지만 &quot;밥 먹었어&quot;와 &quot;밥 먹었어?&quot; 같은 말은
          성조로 구분한다.
        </p>
        <hr className={ccss.hr} />
      </div>
    </div>
  );
}
