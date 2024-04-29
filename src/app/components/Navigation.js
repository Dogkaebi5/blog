"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navigation = () => {
  const pathname = "/" + usePathname().split("/")[1];
  const navigation = [
    ["Home", "/"],
    ["粵", "/cantonese"],
    ["Blog", "/blog"],
    // ["Product", "/product"],
    ["About", "/about"],
  ];

  // bugerBtn & menu css를 tailwind로 만들기 어려워, 별도 globals.css에 작성
  // => 보기 싫어서, 전부 globals.css에 작성
  const [isActive, setIsActive] = useState(false);
  const [navSide, setNavSide] = useState("nav-side");
  const [navBurger, setNavBurger] = useState("nav-burger");

  // btn handle. 아이콘 변경, 메뉴 출연, 스크롤 방지
  function clickHandle() {
    if (isActive) {
      setNavBurger("nav-burger active");
      setNavSide("nav-side active");
    } else {
      setNavBurger("nav-burger");
      setNavSide("nav-side");
    }
    setIsActive(!isActive);
  }

  // TODO: 임시로고 변경
  // 광둥어를 home으로 변경하면서, isActive의 2번째 조건 추가

  return (
    <div className="navbar ml-2 lg:ml-0">
      <Link className="px-4 py-2 font-bold rounded-full hover:bg-green-100" href="/">
        DogKaeBi
      </Link>
      <nav className="nav-main">
        {navigation.map(([title, url]) => {
          return (
            <Link href={url} key={title} className={pathname == url ? "spread-underline active" : "spread-underline"}>
              {title}
            </Link>
          );
        })}
      </nav>
      <div onClick={clickHandle} className={navBurger}>
        <span className={"top-0"}> </span>
        <span className={"top-2"}> </span>
        <span className={"bottom-0"}> </span>
      </div>
      <div className={navSide}>
        {navigation.map(([title, url]) => {
          return (
            <Link onClick={clickHandle} href={url == "/product" ? "/" : url} key={title} className={pathname === url ? "draw-underline font-bold" : "draw-underline"}>
              {title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;
