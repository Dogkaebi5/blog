import Image from "next/image";
import Link from "next/link";
import * as ccss from "@controller/cssName";
import { imgURL } from "../controller/urls";

const BlogCard = (props) => {
  const postData = props.data;
  const createdDate = postData.createdDate.toDate();
  const updatedDate = postData.updatedDate != null ? postData.updatedDate.toDate() : null;
  return (
    <div className={ccss.blogCard}>
      <Link scroll={false} href={`/blog/${postData.slug}`}>
        <Image className={ccss.blogCardImage} width={600} height={400} src={imgURL + postData.thumbnail} alt={postData.title} />
        <div className={ccss.blogCardTextWrap}>
          <div>
            <h2 className={ccss.blogCardTitle}>{postData.title}</h2>
            <p className={ccss.blogCardText}>{postData.summary ?? ""}</p>
          </div>
          <div>
            <p className={ccss.blogDate}>{createdDate.toLocaleString()}</p>
            {updatedDate != null ? <p className={ccss.blogDate}>{updatedDate.toLocaleString()} (Updated)</p> : null}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
