import { imgURL } from "@controller/urls";
import * as ccss from "@controller/cssName";
import Image from "next/image";
import { B, BQ, CI, CP, FN, FNR, I, IMG, LI, LT, M, T, U, X } from "@/app/components/BlogTextStyle";

export default function Test() {
  const preCode = `const a = "This is indented code.";
console.log(a);
`;
  const imageIDs = ["1ssG03ftjdPTSJy8Co49mZ73YAOsFGntF"];
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
      <div className="mt-8 ">
        <Image
          className="object-cover w-full max-h-96"
          width={1000}
          height={1000}
          src={imgURL + "1ssG03ftjdPTSJy8Co49mZ73YAOsFGntF"}
          alt="sample image"
        />
      </div>

      <div className="my-5">
        <h2 className="text-2xl">Sub title</h2>
        footnote 1
        <FNR count="1" />
        footnote 2
        <FNR count="2" />
        footnote 3
        <FNR count="3" />
        This is text.
        <B text="This is bold text. " />
        <I text="This is italic text. " />
        <X text="This is strikethrough. " />
        <M text="This is marked text. " />
        <T text="Tooltip " tip="This is tooltip text." />
        <U text="This is underline text. " />
        <LT text="Text link" url="/test" />
        <LI url="/test" alt="sample" img={imageIDs[0]} />
        <BQ text={quote} />
        <IMG alt="sample" img={imageIDs[0]} />
        This is inline code <CI code={inlineCode} />
        <CP code={preCode} />
        <hr />
        <FN notes={footnotes} />
      </div>
    </div>
  );
}
