// import { serialize } from "next-mdx-remote/serialize";
// import { MDXRemote } from "next-mdx-remote";

// export default function RemoteMdxPage({ mdxSource }) {
//   return <MDXRemote {...mdxSource} />;
// }

// export async function getStaticProps() {
//   // MDX text - can be from a local file, database, CMS, fetch, anywhere...
//   const res = await fetch("C:/Users/User/code/blog/src/app/(route)/test/5/test.mdx");
//   const mdxText = await res.text();
//   const mdxSource = await serialize(mdxText);
//   return { props: { mdxSource } };
// }
