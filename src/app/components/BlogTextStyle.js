import Link from "next/link";
import { imgURL } from "../controller/urls";
import Image from "next/image";
import PrismLoader from "./PrismLoader";

export function B({ text }) {
  return <span className="font-bold">{text}</span>;
}

export function I({ text }) {
  return <span className="italic">{text}</span>;
}

export function X({ text }) {
  return <span className="line-through">{text}</span>;
}

export function M({ text }) {
  return <span className="bg-green-50">{text}</span>;
}

export function U({ text }) {
  return <span className="underline underline-offset-4">{text}</span>;
}

export function BQ({ text }) {
  return (
    <blockquote className="border-l-8 pl-4 my-2">
      <pre>{text}</pre>
    </blockquote>
  );
}

export function FNR({ count }) {
  return (
    <Link id={`fnr-${count}`} href={`#fn-${count}`}>
      <sup className=" text-blue-600">[{count}]</sup>
    </Link>
  );
}
export function FN({ notes }) {
  let count = 0;
  return (
    <ol className="list-decimal text-sm text-gray-600 ml-6 mt-2">
      {notes.map((note) => {
        count++;
        return (
          <li key={count}>
            <Link className="hover:underline" href={`#fnr-${count}`}>
              {note}
            </Link>
          </li>
        );
      })}
    </ol>
  );
}

export function IMG({ img, alt }) {
  return <Image className="my-2" alt={alt} width={500} height={500} src={imgURL + img} />;
}

export function CI({ code }) {
  return (
    <>
      <code className="language-js">{code}</code>
      <PrismLoader />
    </>
  );
}

export function CP({ code }) {
  return (
    <>
      <pre className="language-js">
        <code>{code}</code>
      </pre>
      <PrismLoader />
    </>
  );
}

export function LT({ text, url }) {
  return (
    <Link className="text-blue-700 underline underline-offset-4" href={url}>
      {text}
    </Link>
  );
}

export function LI({ url, img, alt }) {
  return (
    <Link className="text-blue-700 my-2 underline underline-offset-4 inline-block" href={url}>
      <Image alt={alt} width={500} height={500} src={imgURL + img} />
    </Link>
  );
}

export function T({ text, tip }) {
  return (
    <div className="inline relative ">
      <span className="underline underline-offset-4 decoration-dotted cursor-help peer">{text}</span>
      <div className="absolute left-2 -bottom-10 inline rounded p-1 text-sm bg-white border shadow invisible whitespace-nowrap opacity-0 peer-hover:visible peer-hover:opacity-100">
        {tip}
      </div>
    </div>
  );
}
