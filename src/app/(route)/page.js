import Link from "next/link";
import Heros from "@components/Heros";

export default function Home() {
  const cardClass = "block p-6 rounded-xl shadow text-center";
  return (
    <>
      <Heros path={""} />
      <div className="m-4 md:columns-3">
        <Link className={cardClass + " bg-green-50"} href="/cantonese">
          광둥어
        </Link>
        <Link className={cardClass + " bg-yellow-50"} href="/blog">
          일기
        </Link>
        <div className={cardClass + " bg-gray-50"}>기획 (공사중)</div>
      </div>
    </>
  );
}
