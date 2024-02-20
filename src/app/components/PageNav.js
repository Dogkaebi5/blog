"use client";

const PageNav = (maxPage) => {
  return (
    <div className="my-8 flex justify-center items-center">
      <span className="p-1 hover:underline cursor-pointer">◀</span>
      <span className="px-2 hover:underline cursor-pointer font-bold bg-violet-100 rounded-xl">
        1
      </span>
      <span className="p-1 hover:underline ">...</span>
      <span className="p-1 hover:underline cursor-pointer">3</span>
      <span className="p-1 hover:underline cursor-pointer">4</span>
      <span className="p-1 hover:underline cursor-pointer">5</span>
      <span className="p-1 hover:underline ">...</span>
      <span className="p-1 hover:underline cursor-pointer">30</span>
      <span className="p-1 hover:underline cursor-pointer">▶</span>
    </div>
  );
};

export default PageNav;
