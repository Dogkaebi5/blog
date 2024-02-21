import Image from "next/image";
import Link from "next/link";
import * as ccss from "@/app/controller/cssName";

const BlogCard = (props) => {
  const postData = props.data;
  return (
    <div className={ccss.blogCard}>
      <Link href={`/${postData.id}`}>
        <Image
          className="w-full"
          width={600}
          height={400}
          src={postData.thumbnail}
          alt={postData.title}
        />
        <div className={ccss.blogCardTextWrap}>
          <h2 className={ccss.h2}>{postData.title}</h2>
          <p className={ccss.blogDate}>
            {new Date(postData.date).toLocaleDateString()}
          </p>
          <p className={ccss.blogCardText}>{postData.content}</p>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
