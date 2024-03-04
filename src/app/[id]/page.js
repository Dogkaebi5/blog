import * as ccss from "@/app/controller/cssName";
import Image from "next/image";
import Link from "next/link";

export default async function Read(props) {
  const res = await fetch("http://localhost:3000/json/data.json");
  const jsonData = await res.json();
  const allData = await jsonData.data;
  const data = await allData.filter((obj) => {
    if (obj.id == Number(props.params.id)) {
      return obj;
    }
  })[0];
  const date = new Date(data.date).toLocaleDateString();

  const category = () => {
    if (data.category == "book") return "책";
    if (data.category == "daily") return "일상";
    if (data.category == "coding") return "코딩";
    if (data.category == "cantonese") return "광둥어";
  };

  return (
    <div className="p-16">
      <div className="px-4">
        <h1 className={ccss.h1}>{data.title}</h1>
        <p className={ccss.blogDate}>- {date}</p>
        <div className="flex mt-4">
          <Link className={ccss.headerBtn} href={`/?tag=${data.category}`}>
            {category()}
          </Link>
        </div>
      </div>
      <div className="mt-8 ">
        <Image
          className="object-cover w-full max-h-96"
          width={600}
          height={400}
          src={data.thumbnail}
          alt={data.title}
        />
      </div>
      <div className="my-5">{data.content}</div>
    </div>
  );
}
