"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navigation = () => {
  const pathname = usePathname();
  const navigation = [
    ["Home", "/"],
    ["粤", "/cantonese"],
    ["Product", "/product"],
    ["About", "/about"],
  ];

  const [burgerBtnClass, setBurgerBtnClass] = useState("navbar-burger");
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [menuActiveClass, setMenuActiveClass] = useState("-right-96");
  const burgerLineClass = "absolute h-1 w-6 rounded-full my-1 bg-slate-800";
  const menuClass =
    " navbar-menu transition-all absolute top-0 w-96 h-full bg-black opacity-90 pt-32 px-14 text-white";

  function burgerBtnHandle(e) {
    e.preventDefault();
    if (burgerBtnClass == "navbar-burger") {
      setBurgerBtnClass("navbar-burger-active");
      setMenuActiveClass("right-0");
    } else {
      setBurgerBtnClass("navbar-burger");
      setMenuActiveClass("-right-96");
    }
  }

  return (
    <div className="flex justify-between items-center py-2">
      <Link href={"/"} className="py-2 px-4 rounded-full bg-slate-100">
        DogKaeBi
      </Link>
      <nav className="navbar-main space-x-2 my-2 flex">
        {navigation.map(([title, url]) => {
          const isActive = pathname === url;
          return (
            <Link
              href={url}
              key={title}
              className={
                isActive ? "spread-underline font-bold" : "spread-underline"
              }
            >
              {title}
            </Link>
          );
        })}
      </nav>
      <div
        className={`${burgerBtnClass} h-7 px-4 cursor-pointer relative mr-4 z-10`}
        onClick={burgerBtnHandle}
      >
        <span className={burgerLineClass + " top-0"}></span>
        <span className={burgerLineClass + " top-2"}></span>
        <span className={burgerLineClass + " bottom-0"}></span>
      </div>
      <div className={menuActiveClass + menuClass}>
        {navigation.map(([title, url]) => {
          const isActive = pathname === url;
          return (
            <Link
              href={url}
              key={title}
              className={
                isActive ? "draw-underline font-bold" : "draw-underline"
              }
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
