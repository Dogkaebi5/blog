"use client";

import Link from "next/link";
import Heros from "../components/Heros";
import { usePathname } from "next/navigation";
import SubNav from "../components/SubNav";

export default function RootLayout({ children }) {
  const pathName = usePathname();

  const nav = [
    ["한자", ""],
    ["음절", "/syllable"],
    ["단어", "/word"],
    ["회화", "/conversation"],
  ];
  const notActiveClass = "rounded-full border py-2 px-8 mr-2";
  const activeClass = notActiveClass + " bg-slate-600 text-white";

  return (
    <>
      <Heros />
      <SubNav />
      <div>{children}</div>
    </>
  );
}
