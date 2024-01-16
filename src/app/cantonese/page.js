import Link from "next/link";
import Heros from "../components/Heros";

export default function Cantonese() {
  const nav = [
    ["한자", "/"],
    ["음절", "/syllable"],
    ["회화", "/conversation"],
  ];
  const activeClass =
    "rounded-full border py-2 px-8 mr-2 bg-slate-600 text-white";
  const notActiveClass = "rounded-full border py-2 px-8 mr-2";

  const data = [
    {
      id: 1,
      hanzi: "一",
      mean: "숫자 1(일), 하나",
    },
    {
      id: 2,
      hanzi: "二",
      mean: "숫자 2(이), 둘",
    },
    {
      id: 3,
      hanzi: "三",
      mean: "숫자 3(삼), 셋",
    },
    {
      id: 4,
      hanzi: "四",
      mean: "숫자 4(사), 넷",
    },
    {
      id: 5,
      hanzi: "五",
      mean: "숫자 5(오), 다섯",
    },
    {
      id: 6,
      hanzi: "六",
      mean: "숫자 6(육), 여섯",
    },
    {
      id: 7,
      hanzi: "七",
      mean: "숫자 7(칠), 일곱",
    },
    {
      id: 8,
      hanzi: "八",
      mean: "숫자 8(팔), 여덟",
    },
    {
      id: 9,
      hanzi: "九",
      mean: "숫자 9(구), 아홉",
    },
    {
      id: 10,
      hanzi: "十",
      mean: "숫자 10(십), 열",
    },
  ];

  return (
    <>
      <Heros />
      <div className="flex justify-between items-center mt-10 mb-4">
        <div>
          {nav.map(([category, url]) => {
            return (
              <Link
                href={"/cantonese" + url}
                key={url}
                className={url == "/" ? activeClass : notActiveClass}
              >
                {category}
              </Link>
            );
          })}
        </div>
        <form>
          <input className="border rounded-lg pl-2 py-1 w-40 mr-2" />
          <input
            type="submit"
            value="검색"
            className="bg-black text-white border rounded-lg py-1 px-6"
          />
        </form>
      </div>
      <hr />
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 xl:grid-cols-10 gap-4">
        {data.map((post) => (
          <div key="" className="mt-4 bg-slate-200">
            <Link href={`/read/${post.id}`}>
              <h1 className="font-bold text-6xl bg-slate-300 text-center py-5">
                {post.hanzi}
              </h1>
              <p className="p-2 text-nowrap overflow-hidden text-ellipsis">
                {post.mean}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
