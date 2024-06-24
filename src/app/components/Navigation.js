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

  // btn handle. 아이콘 변경, 메뉴 출연, 스크롤 방지
  const clickHandle = () => setIsActive(!isActive);

  // TODO: 임시로고 변경
  // 광둥어를 home으로 변경하면서, isActive의 2번째 조건 추가

  return (
    <header className="flex justify-between items-center px-1 py-2">
      <Link className="ml-2 px-4 py-2 font-bold rounded-full hover:bg-green-100" href="/">
        DogKaeBi
      </Link>
      <nav className="nav-main">
        {navigation.map(([title, url]) => (
          <Link href={url} key={title} className={pathname == url ? "spread-underline active" : "spread-underline"}>
            {title}
          </Link>
        ))}
      </nav>
      <div onClick={clickHandle} className={isActive ? "nav-burger active" : "nav-burger"}>
        <span className="top-0"> </span>
        <span className="top-2"> </span>
        <span className="bottom-0"> </span>
      </div>
      <nav className={isActive ? "nav-side active" : "nav-side"}>
        {navigation.map(([title, url]) => (
          <Link onClick={clickHandle} href={url} key={title} className={pathname === url ? "draw-underline font-bold" : "draw-underline"}>
            {title}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navigation;
