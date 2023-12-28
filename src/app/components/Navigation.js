'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () =>{
  const pathname = usePathname();
  const navigation = [['Home', '/'],['粤', '/cantonese'],['Code', '/code'],['Blog', '/blog'],['About', '/about'],];

  return (
    <nav className="flex sm:justify-center space-x-2 my-2">
      {navigation.map(([title, url]) => {
        const isActive = pathname === url
        return (
          <Link 
            href={url}
            key={title}
            className={isActive ? 'spread-underline w-20 font-bold':'spread-underline w-20'}>{title}
          </Link>
        )
      })}
    </nav>
  )
}

export default Navigation;