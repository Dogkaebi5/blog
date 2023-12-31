'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

const SubNav = () => {
  const pathname = usePathname()
  let nav = ["한자", "음절", "회화", "문화"];

  return (
    <>
      <div className="flex justify-between items-center mt-10 mb-4">
        <div>
          <Link href="/cantonese" className="rounded-full border py-2 px-8 mr-2 bg-slate-600 text-white">All</Link>
          {nav.map((item) => (
            <Link 
              href={"/cantonese?tag="+item}
              key={item}
              className={'rounded-full border py-2 px-8 mr-2'}>{item}
            </Link>
          ))}
        </div>
        <form>
          <input className="border rounded-lg py-1 w-40 mr-2"/>
          <input type="submit" value="검색" className="bg-black text-white border rounded-lg py-1 px-6"/>
        </form>
      </div>
      <hr/>
    </>
  )
}

export default SubNav