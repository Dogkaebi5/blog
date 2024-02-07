import Image from "next/image";
import Link from "next/link";

const BlogCard = (props) => {
  const postData = props.data;
  return (
    <div className="mt-4 bg-slate-200">
      <Link href={`/${postData.id}`}>
        <Image
          className="w-full"
          width={600}
          height={400}
          src={postData.thumbnail}
          alt={postData.title}
        />
        <div className="px-4 pt-4 pb-8">
          <h2 className="font-bold text-lg">{postData.title}</h2>
          <p className="text-gray-700 text-sm pb-2">
            {new Date(postData.date).toLocaleDateString()}
          </p>
          <p className="text-nowrap overflow-hidden text-ellipsis">
            {postData.content}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
