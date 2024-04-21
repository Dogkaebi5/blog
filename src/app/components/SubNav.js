import Link from "next/link";
import * as ccss from "@controller/cssName";
import SearchInput from "./SearchInput";

//
// btns + 파람에 따라 css변경함으로 use client를 사용
// client 를 사용하지 않는 방법을 고려했지만, tag에 따라서 변경으로 수정 못 함
// slug를 부모로 받아서 server component로 변경

const SubNav = (props) => {
  // nav tag name & path
  const navData =
    props.path == "tc"
      ? [
          ["한자", ""],
          ["월음", "syllable"],
          ["단어", "word"],
          ["회화", "conversation"],
        ]
      : props.path == "blog"
      ? [
          ["All", ""],
          ["일상", "daily"],
          ["코딩", "coding"],
          ["광둥어", "cantonese"],
        ]
      : [];

  const trail = props.path == "cantonese" ? "/" : "?tag=";

  return (
    <>
      <div className={ccss.subNavWrap}>
        <div className="flex flex-wrap gap-2 mx-2">
          {navData.map(([item, url]) => (
            <Link
              key={item}
              href={url == "" ? `/${props.path}` : `/${props.path + trail + url}`}
              className={props.slug == null && url == "" ? ccss.toggleActive : url == props.slug ? ccss.toggleActive : ccss.toggle}
            >
              {item}
            </Link>
          ))}
        </div>
        <SearchInput />
      </div>
      <hr className="mt-4 mb-6" />
    </>
  );
};

export default SubNav;
