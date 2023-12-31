'use client'
import { usePathname } from "next/navigation"

const Heros = () => {
  const pathname = usePathname()
  let title

  if (pathname == '/') title = "독깨비 노트"
  if (pathname == '/cantonese') title = "粵"
  if (pathname == '/code') title = "CODE"
  if (pathname == '/blog') title = "BLOG"
  if (pathname == '/about') title = "독깨비 ..."

  return (
      <div className="bg-slate-100 h-80 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="mt-4">This is {title} sub text</p>
      </div>
  )
}

export default Heros