import Link from "next/link";
import syllable from "../../yueYin";

export default function Initial(props) {
  const yueYin = syllable.yueYin;
  let alpha = props.params.id;

  if (alpha == "-") alpha = "";
  function checkIsInital(text) {
    return !(
      text.startsWith("a") ||
      text.startsWith("e") ||
      text.startsWith("i") ||
      text.startsWith("o") ||
      text.startsWith("u") ||
      text.startsWith("y")
    );
  }

  let isInitial = checkIsInital(alpha);

  function checkList(text) {
    if (alpha == "") return !checkIsInital(text);
    if (isInitial) {
      if (alpha == "n") return text.startsWith("n") && !text.startsWith("ng");
      if (alpha == "g") return text.startsWith("g") && !text.startsWith("gw");
      if (alpha == "k") return text.startsWith("k") && !text.startsWith("kw");
      return text.startsWith(alpha);
    }
    return text.endsWith(alpha);
  }

  return (
    <div className="p-8">
      <h1 className="p-8 bg-slate-100 inline-block rounded-md font-bold text-6xl">
        {alpha == "" ? "-" : alpha}
      </h1>
      <div className="px-2 my-4">
        <p className="my-4">
          {isInitial ? "성모(聲母) " : "음모(韻母) "}발음 : [아~]{" "}
        </p>
        <p>긴 [아]의 발음이 나는 운모(韻母)인 동시에 음절(音節)일 수도 있다.</p>
        <p>모든 성모(聲母)와 조합이 가능한 3개의 운모 중 하나이다.</p>
      </div>
      <hr />
      <div className="p-2">
        <h3 className="font-bold mb-4">음절 조합</h3>
        <div className="flex flex-wrap">
          {yueYin.map((alp) => {
            return checkList(alp) ? (
              <Link href={`/dictionary/yueyin/${alp}`} key={alp}>
                <span className="p-1 text-blue-600 underline">{alp}</span>
              </Link>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
}
