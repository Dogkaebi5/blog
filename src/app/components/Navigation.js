"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navigation = () => {
  const fullPath = usePathname();
  const pathname = "/" + fullPath.split("/")[1];
  const navigation = [
    ["Home", "/"],
    ["Blog", "/blog"],
    ["Product", "/product"],
    ["About", "/about"],
  ];

  // bugerBtn & menu css를 windtail로 만들기 어려워, 별도 globals.css에 작성
  // 메뉴가 비활성일 때, 우측 화면 밖 + 투명
  const menuClass = ` navbar-menu absolute top-0 w-full h-screen touch-none bg-black opacity-95 pt-32 px-14 text-white`;
  const menuInactClass = ` -right-full opacity-0`;
  const [menuActiveClass, setMenuActiveClass] = useState(menuInactClass);

  const burgerLineClass = `absolute h-1 w-6 rounded-full my-1 bg-slate-800`;
  const burgerBtnClass = `h-7 w-8 mr-4 my-2 cursor-pointer relative z-10`;
  const [burgerActClass, setBurgerActClass] = useState(" navbar-burger");

  // 메뉴 활성화 때 전체화면
  const [navWrap, setNavWrap] = useState("navbar");
  const nawWrapAct = `navbar active w-full h-full overflow-hidden`;

  // btn handle. 아이콘 변경, 메뉴 출연, 스크롤 방지
  const setActive = () => {
    setBurgerActClass(" navbar-burger active");
    setMenuActiveClass(" right-0");
    setNavWrap(nawWrapAct);
  };
  const setInactive = () => {
    setBurgerActClass(" navbar-burger");
    setMenuActiveClass(menuInactClass);
    setNavWrap("navbar");
  };
  function burgerBtnHandle(e) {
    e.preventDefault();
    if (burgerActClass == " navbar-burger") {
      setActive();
    } else {
      setInactive();
    }
  }

  // TODO: 임시로고 변경
  // 광둥어를 home으로 변경하면서, isActive의 2번째 조건 추가
  return (
    <div className={navWrap}>
      <Link href={"/"} className="h-8 py-1 px-4 rounded-full bg-green-100">
        DogKaeBi
      </Link>
      <nav className="navbar-main flex space-x-2 my-2 ">
        {navigation.map(([title, url]) => {
          const isActive = pathname == url || (pathname == "/cantonese" && url == "/");
          return (
            <Link
              href={url}
              key={title}
              className={isActive ? "spread-underline text-green-600 font-bold" : "spread-underline"}
            >
              {title}
            </Link>
          );
        })}
      </nav>
      <div className={burgerBtnClass + burgerActClass} onClick={burgerBtnHandle}>
        <span className={burgerLineClass + " top-0"}> </span>
        <span className={burgerLineClass + " top-2"}> </span>
        <span className={burgerLineClass + " bottom-0"}> </span>
      </div>
      <div className={menuActiveClass + menuClass}>
        {navigation.map(([title, url]) => {
          const isActive = pathname === url;
          return (
            <Link
              onClick={setInactive}
              href={url}
              key={title}
              className={isActive ? "draw-underline font-bold" : "draw-underline"}
            >
              <p className="my-4 px-4">{title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;
