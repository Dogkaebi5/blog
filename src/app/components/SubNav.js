"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import * as ccss from "@/app/controller/cssName";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

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
      ["월음", "/cantonese/syllable"],
      ["단어", "/cantonese/word"],
      ["회화", "/cantonese/conversation"],
    ];
  if (pathnames[1] == "")
    nav = [
      ["All", "/"],
      ["일상", "/?tag=daily"],
      ["책", "/?tag=book"],
      ["코딩", "/?tag=coding"],
      ["광둥어", "/?tag=cantonese"],
    ];

  return (
    <>
      <div className={ccss.subNavWrap}>
        <div className="flex flex-wrap gap-2 mx-2">
          {nav.map(([item, param]) => {
            let params = param.split("/");
            return (
              <Link
                href={param}
                key={item}
                className={
                  tag == null
                    ? lastPathname == params[params.length - 1]
                      ? ccss.toggleActive
                      : ccss.toggle
                    : tag == param.split("=")[1]
                    ? ccss.toggleActive
                    : ccss.toggle
                }
              >
                {item}
              </Link>
            );
          })}
        </div>
        <form className={ccss.searchWrap}>
          <Image
            height={20}
            width={20}
            alt="search"
            src="/magnifying-glass-solid.svg"
          />
          <input type="search" placeholder="search.." className="px-4" />
        </form>
      </div>
      <hr className="mt-4 mb-6" />
    </>
  );
};

export default SubNav;
