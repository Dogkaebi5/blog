import Link from "next/link";
import Heros from "@components/Heros";

export default function Home() {
  const cardClass = "shadow p-6 rounded-xl";
  return (
    <>
      <Heros path={""} />
      <div className="m-4 gap-8 columns-3">
        <Link href={"/cantonese"}>
          <div className={cardClass + " bg-green-50"}>광둥어</div>
        </Link>
        <Link href={"/blog"}>
          <div className={cardClass + " bg-yellow-50"}>일기</div>
        </Link>

        <div className={cardClass + " bg-gray-50"}>기획 (공사중)</div>
      </div>
    </>
  );
}
