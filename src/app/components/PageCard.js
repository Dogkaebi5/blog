import Image from "next/image"

const PageCard = () => {
  return ( 
    <div className="w-1/5 bg-slate-300 ">
      <Image width={600} height={400} src={"https://placehold.co/600x400.png"} alt="sample img"/>
      <div className="px-4 pt-4 pb-8">
        <h2>제목</h2>
        <p>2999.12.31</p>
        <p className="text-nowrap overflow-hidden text-ellipsis">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  )
}
export default PageCard