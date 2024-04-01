"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import * as ccss from "@controller/cssName";

const Navigation = () => {
  const fullPath = usePathname();
  const pathname = "/" + fullPath.split("/")[1];
  const navigation = [
    ["Home", "/"],
    ["粵", "/cantonese"],
    ["Blog", "/blog"],
    ["Product", "/product"],
    ["About", "/about"],
  ];

  // bugerBtn & menu css를 tailwind로 만들기 어려워, 별도 globals.css에 작성
  // => 보기 싫어서, 전부 globals.css에 작성
  const [navSide, setNavSide] = useState("nav-side");
  const [navBurger, setNavBurger] = useState("nav-burger");

  // btn handle. 아이콘 변경, 메뉴 출연, 스크롤 방지
  const setActive = () => {
    setNavBurger("nav-burger active");
    setNavSide("nav-side active");
  };
  const setInactive = () => {
    setNavBurger("nav-burger");
    setNavSide("nav-side");
  };
  function burgerBtnHandle(e) {
    e.preventDefault();
    navBurger == "nav-burger" ? setActive() : setInactive();
  }

  // TODO: 임시로고 변경
  // 광둥어를 home으로 변경하면서, isActive의 2번째 조건 추가

  return (
    <div className="navbar">
      <Link href={"/"} className={ccss.logo}>
        DogKaeBi
      </Link>
      <nav className="nav-main">
        {navigation.map(([title, url]) => {
          const isActive = pathname == url;
          return (
            <Link href={url} key={title} className={isActive ? "spread-underline active" : "spread-underline"}>
              {title}
            </Link>
          );
        })}
      </nav>
      <div className={navBurger} onClick={burgerBtnHandle}>
        <span className={"top-0"}> </span>
        <span className={"top-2"}> </span>
        <span className={"bottom-0"}> </span>
      </div>
      <div className={navSide}>
        {navigation.map(([title, url]) => {
          const isActive = pathname === url;
          return (
            <Link
              onClick={setInactive}
              href={url}
              key={title}
              className={isActive ? "draw-underline font-bold" : "draw-underline"}
            >
              {title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;
