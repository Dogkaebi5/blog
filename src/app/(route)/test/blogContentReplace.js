import { B, BQ, CI, CP, FN, FNR, H, I, IMG, LI, LT, M, T, U, X } from "@/app/(route)/test/BlogTextStyle";

//  /<H Sub Title

export default function contentReplacer(content) {
  const customTags = content.split(`/<`);
  customTags.map((tag) => {
    const firstChar = tag.charAt(0);
    if (tag.startWith("H")) return "B()";
  });
}

//  /<H Sub Title
// <h2 className={`text-2xl`}>{t}</h2>;
// <IMG a="sample" i={imageIDs[1]} />
//

function test(t) {
  if (tag.startWith("H")) return `<h2 className="text-2xl">${t}</h2>`;
  if (tag.startWith("B")) return `<span className="font-bold">${t}</span>`;
  if (tag.startWith("I")) return `<span className="italic">${t}</span>`;
  if (tag.startWith("X")) return `<span className="line-through">${t}</span>`;
  if (tag.startWith("M")) return `<span className="bg-green-50">${t}</span>`;
  if (tag.startWith("U")) return `<span className="underline underline-offset-4">${t}</span>`;
  if (tag.startWith("Q")) return `<blockquote className="border-l-8 pl-4 my-2"><pre dangerouslySetInnerHTML={{ __html: ${t} }} /></blockquote>`;
  if (tag.startWith("FN")) return `<Link id={fnr-${t}} href={#fn-${t}}><sup className=" text-blue-600">[${c}]</sup></Link>`;
  if (tag.startWith("IMG")) return ``;
}
