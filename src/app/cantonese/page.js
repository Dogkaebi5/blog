import Link from "next/link";
import Heros from "../components/Heros";
import SubNav from "../components/SubNav";

export default function Cantonese() {
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
      <SubNav />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 xl:grid-cols-10 gap-4">
        {data.map((post) => (
          <div key={post.id} className="bg-slate-100 border">
            <Link href={`/cantonese/${post.id}`}>
              <h1 className="font-bold text-6xl bg-slate-200 text-center py-5">
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
