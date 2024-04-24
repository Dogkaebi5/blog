// import { imgURL } from "@controller/urls";
// import * as ccss from "@controller/cssName";
// import Image from "next/image";
// import fs from "fs";
// import Markdown from "markdown-to-jsx";
// import PrismLoader from "@components/PrismLoader";

// export default async function Test() {
//   const file = "./src/app/(route)/test/2/mdTest2.md";
//   const text = fs.readFileSync(file, "utf8");
//   // const test = await (await fetch("https://drive.google.com/uc?id=1uawh6Ixk6729fNOoOOdcn0i5RwcULL29")).text();
//   const images = ["1ssG03ftjdPTSJy8Co49mZ73YAOsFGntF", "16TOHBZwX30pmS993qvRbZt8uUXEAR_mm"];
//   // const res = await fetch(`https://drive.google.com/uc?id=${images[0]}`);
//   // const data = res.arrayBuffer();
//   // const blob = new Blob([data], { type: res.headers.get("content-type") });
//   // const imageUrl = URL.createObjectURL(blob);
//   // const blog = await res.blob();
//   // const url = URL.createObjectURL(blog);

//   const options = {
//     overrides: {
//       img: ({ src, ...props }) => <Image width={500} height={500} src={src} {...props} />,
//     },
//   };
//   const imglink = `https://drive.google.com/uc?id=${images[0]}`;

//   const content = text.replaceAll("MDIMG=1", imglink);
//   return (
//     <div className="p-16">
//       <div className="px-4">
//         <h1 className={ccss.h1}>타이틀 </h1>
//         <p className={ccss.blogDate}>- 2023. 01. 01</p>
//         <p className={ccss.blogDate}>( 2023. 12. 31 Updated )</p>
//         <div className="flex mt-4">
//           <p className={ccss.headerBtn}>카테고리</p>
//         </div>
//       </div>
//       <div className="mt-8">
//         <Image className="object-cover w-full max-h-96" width={1000} height={1000} src={imgURL + images[0]} alt="sample image" />
//       </div>

//       <article className="prose prose-stone mt-8">
//         <PrismLoader />
//         <Markdown options={options}>{content}</Markdown>
//       </article>
//       <iframe src="https://drive.google.com/file/d/16TOHBZwX30pmS993qvRbZt8uUXEAR_mm/preview" width="640" height="480" allow="autoplay"></iframe>
//       <img width={500} height={500} src={`https://drive.google.com/uc?id=${images[0]}`} alt="Google Drive Image" />
//       <Image width={500} height={500} src={`https://drive.google.com/uc?export=view&id=${images[0]}`} alt="Google Drive Image" />
//     </div>
//   );
// }
