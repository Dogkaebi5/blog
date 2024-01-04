import Image from "next/image"
import Link from "next/link"

const PageCards = () => {
  const data = [
    {
      "id": 1,
      "title": "제목 샘플 1",
      "date": "2999.12.31",
      "thumbnail": "https://placehold.co/600x400.png",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      "id": 2,
      "title": "제목 샘플 2",
      "date": "2999.12.31",
      "thumbnail": "https://placehold.co/600x400.png",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      "id": 3,
      "title": "제목 샘플 3",
      "date": "2999.12.31",
      "thumbnail": "https://placehold.co/600x400.png",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
  ]
  return ( 
    <div className="mt-8 flex gap-4">
        {data.map((post) => 
          <div key={post.id} className="max-w-80 bg-slate-200">
            <Link href={"/read/"+post.id} >
              <Image width={600} height={400} src={post.thumbnail} alt="sample img"/>
              <div className="px-4 pt-4 pb-8">
                <h2 className="font-bold text-lg">{post.title}</h2>
                <p className="text-gray-700 text-sm pb-2">{post.date}</p>
                <p className="text-nowrap overflow-hidden text-ellipsis">{post.content}</p>
              </div>
            </Link>
          </div>
        )}
    </div>
  )
}
export default PageCards