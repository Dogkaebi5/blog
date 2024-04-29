import Link from "next/link";
import Heros from "@components/Heros";

export default function Home() {
  const cardClass = "p-6 my-4 mx-10 rounded-xl shadow text-center font-bold text-lg hover:scale-105 hover:ring-2 ring-green-200";
  return (
    <>
      <Heros path={""} />
      <div className="">
        <div className={cardClass + " bg-green-50"}>
          <Link className="" href="/cantonese">
            광둥어
          </Link>
        </div>
        <div className={cardClass + " bg-yellow-50"}>
          <Link href="/blog">일기</Link>
        </div>
        <div className={cardClass + " bg-gray-50"}>기획 (공사중)</div>
      </div>
    </>
  );
}
