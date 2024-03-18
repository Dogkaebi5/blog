import Image from "next/image";
import Link from "next/link";
import * as ccss from "@/app/controller/cssName";

// https://drive.google.com/uc?id=

const BlogCard = (props) => {
  const postData = props.data;
  return (
    <div className={ccss.blogCard}>
      <Link scroll={false} href={`/${postData.id}`}>
        <Image
          className="object-cover w-full h-56"
          width={600}
          height={400}
          src={postData.thumbnail}
          alt={postData.title}
        />
        <div className={ccss.blogCardTextWrap}>
          <h2 className={ccss.h2}>{postData.title}</h2>
          <p className={ccss.blogDate}>{new Date(postData.date).toLocaleDateString()}</p>
          <p className={ccss.blogCardText}>{postData.content}</p>
          {/* TODO: summary 추가로 content 대체 여부? */}
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
