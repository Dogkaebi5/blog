"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import * as ccss from "@controller/cssName";

////////
// btns + 파람에 따라 css변경함으로 use client를 사용
// client 를 사용하지 않는 방법을 고려했지만, tag에 따라서 변경으로 수정 못 함

const SubNav = (props) => {
  const path = usePathname();
  const pathnames = path.split("/");
  const lastPathname = pathnames[pathnames.length - 1];

  const params = useSearchParams();
  const tag = params.get("tag");

  const setNavData = () => {
    if (props.path == "cantonese")
      return [
        ["한자", "/cantonese"],
        ["월음", "/cantonese/syllable"],
        ["단어", "/cantonese/word"],
        ["회화", "/cantonese/conversation"],
      ];
    if (props.path == "blog")
      return [
        ["All", "/blog"],
        ["일상", "/blog?tag=daily"],
        ["책", "/blog?tag=book"],
        ["코딩", "/blog?tag=coding"],
        ["광둥어", "/blog?tag=cantonese"],
      ];
  };
  let navData = setNavData();

  return (
    <>
      <div className={ccss.subNavWrap}>
        <div className="flex flex-wrap gap-2 mx-2">
          {navData.map(([item, url]) => {
            let params = url.split("/");
            return (
              <Link
                href={url}
                key={item}
                className={
                  tag == null
                    ? lastPathname == params[params.length - 1]
                      ? ccss.toggleActive
                      : ccss.toggle
                    : tag == url.split("=")[1]
                    ? ccss.toggleActive
                    : ccss.toggle
                }
                //// 현재 페이지 확인
                // 쿼리tag가 없으면 path와 url비교
                // 퀴리tag가 있으면 tag와 url 태크와 비교
              >
                {item}
              </Link>
            );
          })}
        </div>
        <form className="">
          <input
            type="search"
            placeholder="search.."
            className={`${ccss.searchWrap}`}
            style={{ backgroundSize: "16px" }}
            //// logo 삽입 때문에 class가 길다
          />
        </form>
      </div>
      <hr className="mt-4 mb-6" />
    </>
  );
};

export default SubNav;
