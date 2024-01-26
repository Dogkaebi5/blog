"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const SubNav = () => {
  const pathname = usePathname();
  const params = useSearchParams();
  const tag = params.get("tag");
  let nav = [];

  if (pathname == "/cantonese")
    nav = [
      ["한자", ""],
      ["음절", "/syllable"],
      ["회화", "/conversation"],
    ];
  if (pathname == "/blog")
    nav = [
      ["책", "?tag=book"],
      ["일상", "?tag=daily"],
      ["코딩", "?tag=coding"],
    ];

  const activeClass =
    "rounded-full border py-2 px-8 mr-2 bg-slate-600 text-white";
  const notActiveClass = "rounded-full border py-2 px-8 mr-2";

  return (
    <>
      <div className="flex justify-between items-center mt-10 mb-4">
        <div>
          <Link
            href={pathname}
            className={tag == null ? activeClass : notActiveClass}
          >
            All
          </Link>
          {nav.map(([item, param]) => {
            return (
              <Link
                href={pathname + param}
                key={item}
                className={tag == item ? activeClass : notActiveClass}
              >
                {item}
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
    </>
  );
};

export default SubNav;
