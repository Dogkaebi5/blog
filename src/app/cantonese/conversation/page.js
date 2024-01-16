import Link from "next/link";
import Heros from "../../components/Heros";

export default function Cantonese() {
  const nav = [
    ["한자", "/"],
    ["음절", "/syllable"],
    ["회화", "/conversation"],
  ];
  const activeClass =
    "rounded-full border py-2 px-8 mr-2 bg-slate-600 text-white";
  const notActiveClass = "rounded-full border py-2 px-8 mr-2";

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
                className={
                  url == "/conversation" ? activeClass : notActiveClass
                }
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
      <div></div>
    </>
  );
}
