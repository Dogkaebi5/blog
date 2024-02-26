"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navigation = () => {
  const fullPath = usePathname();
  const pathname = "/" + fullPath.split("/")[1];
  const navigation = [
    ["Home", "/"],
    ["粤", "/cantonese"],
    ["Product", "/product"],
    ["About", "/about"],
  ];

  const [burgerBtnClass, setBurgerBtnClass] = useState("navbar-burger");
  const [menuActiveClass, setMenuActiveClass] = useState(
    "-right-full opacity-0"
  );
  const [navWrap, setNavWrap] = useState("");
  const burgerLineClass = "absolute h-1 w-6 rounded-full my-1 bg-slate-800";
  const menuClass =
    " navbar-menu absolute top-0 w-full h-screen touch-none bg-black opacity-95 pt-32 px-14 text-white";
  function burgerBtnHandle(e) {
    e.preventDefault();
    if (burgerBtnClass == "navbar-burger") {
      setBurgerBtnClass("navbar-burger-active");
      setMenuActiveClass("right-0");
      setNavWrap("fixed w-full h-full overflow-hidden");
    } else {
      setBurgerBtnClass("navbar-burger");
      setMenuActiveClass("-right-full opacity-0");
      setNavWrap("");
    }
  }

  return (
    <div className={navWrap + " flex justify-between py-2"}>
      <Link href={"/"} className="h-8 py-1 px-4 rounded-full bg-green-100">
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
                isActive
                  ? "spread-underline text-green-600 font-bold"
                  : "spread-underline"
              }
            >
              {title}
            </Link>
          );
        })}
      </nav>
      <div
        className={`${burgerBtnClass} h-7 w-8 mr-4 my-2 cursor-pointer relative z-10`}
        onClick={burgerBtnHandle}
      >
        <span className={burgerLineClass + " top-0"}> </span>
        <span className={burgerLineClass + " top-2"}> </span>
        <span className={burgerLineClass + " bottom-0"}> </span>
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
