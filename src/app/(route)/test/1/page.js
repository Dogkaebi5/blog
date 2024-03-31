import { imgURL } from "@controller/urls";
import * as ccss from "@controller/cssName";
import Image from "next/image";
import { B, BQ, CI, CP, FN, FNR, H, I, IMG, LI, LT, M, T, U, X } from "@/app/components/BlogTextStyle";

export default function Test() {
  const preCode = `const a = "This is indented code.";
console.log(a);
`;
  const imageIDs = ["1ssG03ftjdPTSJy8Co49mZ73YAOsFGntF", "16TOHBZwX30pmS993qvRbZt8uUXEAR_mm"];
  const quote = `This is blockquotes
This is blockquotes line 2`;

  const inlineCode = `console.log("hello world")`;
  const footnotes = ["This is footnote 1.", "This is footnote 2.", "This is footnote 3."];

  return (
    <div className="p-16">
      <div className="px-4">
        <h1 className={ccss.h1}>타이틀 </h1>
        <p className={ccss.blogDate}>- 2023. 01. 01</p>
        <p className={ccss.blogDate}>( 2023. 12. 31 Updated )</p>
        <div className="flex mt-4">
          <p className={ccss.headerBtn}>카테고리</p>
        </div>
      </div>
      <div className="mt-8">
        <Image
          className="object-cover w-full max-h-96"
          width={1000}
          height={1000}
          src={imgURL + "1ssG03ftjdPTSJy8Co49mZ73YAOsFGntF"}
          alt="sample image"
        />
      </div>
      {/* **** 실패 : 컴포넌트 + dangerouslySetInnerHTML 사용 테스트 */}
      {/* prettier-ignore */}
      <div className="my-5 leading-7">
        <H t="Sub Title"/>
        <p>footnote 1 <FNR c="1" /></p>
        <p>footnote 2 <FNR c="2" /></p>
        <p>footnote 3 <FNR c="3" /></p>
        <p>This normal is text.</p>
        <p><B t="This is bold text. " /></p>
        <p><I t="This is italic text. " /></p>
        <p><X t="This is strikethrough. " /></p>
        <p><M t="This is marked text. " /></p>
        <p><U t="This is underline text. " /></p>
        <T t="Tooltip " d="This is tooltip text." />
        <p><LT t="Text link" u="/test" /></p>
        <LI u="/test" a="sample" i={imageIDs[0]} />
        <BQ t="This is blockquotes <br/>blockquotes line 2" />
        <IMG a="sample" i={imageIDs[1]} />
        This is inline code <CI c={inlineCode} />
        <CP c={`const a = "This is indented code.";\nconsole.log(a);`} />
        <p>when just use <br />br tag, text height</p>
        <p>한글을 사용할 때의 <br />자간 및 행간 테스트.</p>
        <p>用漢字的時候<br />字體與文字間距標本</p>
        <hr />
        <FN n={footnotes} />
      </div>
    </div>
  );
}
