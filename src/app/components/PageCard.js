import Image from "next/image"
import Link from "next/link"

const PageCard = () => {
  const post = {
    "title": "제목 샘플",
    "date": "2999.12.31",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }
  return ( 
    <div className="max-w-80 bg-slate-200">
      <Link href="/read/1" >
        <Image width={600} height={400} src={"https://placehold.co/600x400.png"} alt="sample img"/>
        <div className="px-4 pt-4 pb-8">
          <h2 className="font-bold text-lg">{post.title}</h2>
          <p className="text-gray-700 text-sm pb-2">{post.date}</p>
          <p className="text-nowrap overflow-hidden text-ellipsis">{post.content}</p>
        </div>
      </Link>
    </div>
  )
}
export default PageCard