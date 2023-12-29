'use client'
import { usePathname } from "next/navigation"

const Heros = () => {
  const pathname = usePathname()
  const navigation = [['Home', '/'],['粤', '/cantonese'],['Code', '/code'],['Blog', '/blog'],['About', '/about']];

  const title = navigation.map(([title, url]) => {
    if (pathname == url) {
      return title
    }
  })

  return (
    <div className="bg-slate-100 h-80 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="mt-4">This is {title} sub text</p>
    </div>
  )
}

export default Heros