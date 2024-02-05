import Link from "next/link";
import Heros from "../components/Heros";
import SubNav from "../components/SubNav";
import { words } from "./hanja";

export default function Cantonese() {
  const data = Object.values(words);

  return (
    <>
      <Heros />
      <SubNav />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
        {data.map((post) => {
          const id = post.tc.codePointAt(0);
          return post.tc.length == 1 ? (
            <div key={id} className="bg-slate-200 border text-center">
              <Link href={`/cantonese/${id}`}>
                <p className="bg-white py-3 text-sm">{post.yueYin}</p>
                <h1 className="font-bold text-6xl bg-white pb-6">{post.tc}</h1>
                <p className="py-2 text-sm font-bold">{post.title}</p>
              </Link>
            </div>
          ) : null;
        })}
      </div>
    </>
  );
}
