"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const SubNav = () => {
  const path = usePathname();
  const pathnames = path.split("/");
  const lastPathname = pathnames[pathnames.length - 1];

  const params = useSearchParams();
  const tag = params.get("tag");
  let nav = [];

  if (pathnames[1] == "cantonese")
    nav = [
      ["한자", "/cantonese"],
      ["음절", "/cantonese/syllable"],
      ["단어", "/cantonese/word"],
      ["회화", "/cantonese/conversation"],
    ];
  if (pathnames[1] == "blog")
    nav = [
      ["All", "/blog"],
      ["일상", "/blog?tag=daily"],
      ["책", "/blog?tag=book"],
      ["코딩", "/blog?tag=coding"],
    ];

  const activeClass =
    "rounded-full border py-2 px-8 mr-2 bg-slate-600 text-white";
  const notActiveClass = "rounded-full border py-2 px-8 mr-2";

  return (
    <>
      <div className="flex justify-between items-center mt-8">
        <div>
          {nav.map(([item, param]) => {
            let params = param.split("/");
            return (
              <Link
                href={param}
                key={item}
                className={
                  tag == null
                    ? lastPathname == params[params.length - 1]
                      ? activeClass
                      : notActiveClass
                    : tag == param.split("=")[1]
                    ? activeClass
                    : notActiveClass
                }
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
      <hr className="mt-4 mb-6" />
    </>
  );
};

export default SubNav;
