import Link from "next/link";
import Heros from "@components/Heros";
import SearchInput from "@components/SearchInput";

export default function Home() {
  const cardClass = "block p-6 m-4 mx-10 rounded-xl shadow text-center font-bold text-lg hover:scale-105 hover:ring-2 ring-green-200";
  return (
    <>
      <Heros path="" />
      <div className="flex justify-center mt-4 mb-8">
        <SearchInput />
      </div>
      <hr className="mb-6 mx-10" />
      <Link className={cardClass + " bg-green-50"} href="/cantonese">
        광둥어
      </Link>
      <Link className={cardClass + " bg-yellow-50"} href="/blog">
        일기
      </Link>
      <div className={cardClass + " bg-gray-50"}>기획 (공사중)</div>
    </>
  );
}
