"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();
  const navigation = [
    ["Home", "/"],
    ["粤", "/cantonese"],
    ["Product", "/product"],
    ["About", "/about"],
  ];

  return (
    <div className="flex justify-between items-center">
      <Link href={"/"} className="px-4 py-2 bg-slate-100 m-1">
        logo
      </Link>
      <nav className="flex sm:justify-center space-x-2 my-2">
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
    </div>
  );
};

export default Navigation;
