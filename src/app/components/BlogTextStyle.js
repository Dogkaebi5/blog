import Link from "next/link";
import { imgURL } from "../controller/urls";
import Image from "next/image";
import PrismLoader from "./PrismLoader";

export function H({ t, s = "2" }) {
  return <h2 className={`text-${s}xl`}>{t}</h2>;
}
export function B({ t }) {
  return <span className="font-bold">{t}</span>;
}

export function I({ t }) {
  return <span className="italic">{t}</span>;
}

export function X({ t }) {
  return <span className="line-through">{t}</span>;
}

export function M({ t }) {
  return <span className="bg-green-50">{t}</span>;
}

export function U({ t }) {
  return <span className="underline underline-offset-4">{t}</span>;
}

export function BQ({ t }) {
  return (
    <blockquote className="border-l-8 pl-4 my-2">
      <pre dangerouslySetInnerHTML={{ __html: t }} />
    </blockquote>
  );
}

export function FNR({ c }) {
  return (
    <Link id={`fnr-${c}`} href={`#fn-${c}`}>
      <sup className=" text-blue-600">[{c}]</sup>
    </Link>
  );
}
export function FN({ n }) {
  let count = 0;
  return n != null ? (
    <ol className="list-decimal text-sm text-gray-600 ml-6 mt-2">
      {n.map((note) => {
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
  ) : null;
}

export function IMG({ i, a }) {
  return <Image className="my-2" alt={a} width={500} height={500} src={imgURL + i} />;
}

export function CI({ c }) {
  return <code className="language-js">{c}</code>;
}

export function CP({ c }) {
  return (
    <pre className="language-js">
      <code dangerouslySetInnerHTML={{ __html: c }} />
    </pre>
  );
}

export function LT({ t, u }) {
  return (
    <Link className="text-blue-700 underline underline-offset-4" href={u}>
      {t}
    </Link>
  );
}

export function LI({ u, i, a }) {
  return (
    <Link className="text-blue-700 my-2 underline underline-offset-4 inline-block" href={u}>
      <Image alt={a} width={500} height={500} src={imgURL + i} />
    </Link>
  );
}

export function T({ t, d }) {
  return (
    <div className="inline relative ">
      <span className="underline underline-offset-4 decoration-dotted cursor-help peer">{t}</span>
      <div className="absolute left-2 -bottom-10 inline rounded p-1 text-sm bg-white border shadow invisible whitespace-nowrap opacity-0 peer-hover:visible peer-hover:opacity-100">
        {d}
      </div>
    </div>
  );
}
