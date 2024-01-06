import Image from "next/image";
import Link from "next/link";

const Card = (post) => {
  return (
    <div className="mt-4 bg-slate-200">
      <Link href={"/read/" + post.data.id}>
        <Image
          className="w-full"
          width={600}
          height={400}
          src={post.data.thumbnail}
          alt="sample img"
        />
        <div className="px-4 pt-4 pb-8">
          <h2 className="font-bold text-lg">{post.data.title}</h2>
          <p className="text-gray-700 text-sm pb-2">
            {post.data.date.split("T")[0]}
          </p>
          <p className="text-nowrap overflow-hidden text-ellipsis">
            {post.data.content}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
