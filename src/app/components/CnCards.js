import Link from "next/link";
import { setIdFromTc } from "../controller/handleId";

const CnCard = (props) => {
  const data = props.data;

  console.log(props);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {data.map((post) => {
        const id = setIdFromTc(post.tc);
        return post.tc.length != 1 ? (
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
  );
};

export default CnCard;
