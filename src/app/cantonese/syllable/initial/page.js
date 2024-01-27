import Link from "next/link";
import syllable from "../yueYin";

export default function Syllable() {
  const initials = Object.keys(syllable.initial);
  const initialURL = "/cantonese/syllable/initial/";

  return (
    <div className="mt-4 p-2">
      <h1 className="font-bold text-xl mb-2">성모(聲母)</h1>
      <p className="p-2">
        성모는 한국어의 자음과 비슷한 개념이다.
        <br />
        광둥어에만 있는 개념이 아닌 중국어 발음에 공통적으로 있다.
        <br />
        보통화 병음(拼音)에서도 첫 발음인 알파벳을 성모라고 칭한다.
      </p>
      <div className="flex flex-wrap mt-6">
        {initials.map((initial) => (
          <Link
            href={initialURL + initial}
            key={initial}
            className="p-1 m-1 border rounded-lg hover:bg-black"
          >
            <h2 className="p-4 border bg-slate-100 inline-block rounded-md font-bold text-6xl">
              {initial}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
