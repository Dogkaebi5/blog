"use client";
import Link from "next/link";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import * as ccss from "@controller/cssName";
import { useState } from "react";

//
// btns + 파람에 따라 css변경함으로 use client를 사용
// client 를 사용하지 않는 방법을 고려했지만, tag에 따라서 변경으로 수정 못 함

const SubNav = (props) => {
  const path = usePathname();
  const params = useSearchParams();
  const tag = params.get("tag");

  const router = useRouter();
  const [search, setSearch] = useState("");

  // nav tag name & path
  const navData =
    props.path == "cantonese"
      ? [
          ["한자", ""],
          ["월음", "/syllable"],
          ["단어", "/word"],
          ["회화", "/conversation"],
        ]
      : props.path == "blog"
      ? [
          ["All", ""],
          ["일상", "?tag=daily"],
          ["코딩", "?tag=coding"],
          ["광둥어", "?tag=cantonese"],
        ]
      : [];

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      console.log(search);
      router.push("/search?q=" + search);
    }
  };

  const checkToggleIsActive = (url) => {
    if (props.path == "cantonese") {
      if (path == "/cantonese") return url == "";
      return path.split("/")[2] == url.split("/")[1];
    }
    if (props.path == "blog") {
      if (tag == null) return url == "";
      return tag == url.split("=")[1];
    }
  };

  return (
    <>
      <div className={ccss.subNavWrap}>
        <div className="flex flex-wrap gap-2 mx-2">
          {navData.map(([item, url]) => {
            return (
              <Link
                href={"/" + props.path + url}
                key={item}
                className={checkToggleIsActive(url) ? ccss.toggleActive : ccss.toggle}
                // 현재 페이지 확인, 쿼리tag가 없으면 path와 url비교, 퀴리tag가 있으면 tag와 url 태크와 비교
              >
                {item}
              </Link>
            );
          })}
        </div>
        <input
          type="search"
          placeholder="search.."
          //logo 삽입 때문에 class가 길다
          className={`${ccss.searchWrap}`}
          style={{ backgroundSize: "16px" }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <hr className="mt-4 mb-6" />
    </>
  );
};

export default SubNav;
