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
  const burgerLineClass = "absolute h-1 w-6 rounded-full my-1 bg-slate-800";

  function burgerBtnHandle(e) {
    e.preventDefault();
    if (burgerBtnClass == "navbar-burger") {
      setBurgerBtnClass("navbar-burger-active");
    } else {
      setBurgerBtnClass("navbar-burger");
    }
    console.log(burgerBtnClass);
  }

  return (
    <div className="flex justify-between items-center my-2">
      <Link href={"/"} className="py-2 px-4 rounded-full bg-slate-100">
        DogKaeBi
      </Link>
      <nav className="navbar-main space-x-2 my-2">
        {navigation.map(([title, url]) => {
          const isActive = pathname === url;
          return (
            <Link
              href={url}
              key={title}
              className={
                isActive
                  ? "spread-underline w-20 font-bold"
                  : "spread-underline w-20"
              }
            >
              {title}
            </Link>
          );
        })}
      </nav>
      <div
        className={`${burgerBtnClass} h-7 px-4 cursor-pointer relative mr-4`}
        onClick={burgerBtnHandle}
      >
        <span className={burgerLineClass + " top-0"}></span>
        <span className={burgerLineClass + " top-2"}></span>
        <span className={burgerLineClass + " bottom-0"}></span>
      </div>
    </div>
  );
};

export default Navigation;
