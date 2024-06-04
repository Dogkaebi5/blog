"use client";

import * as ccss from "@controller/cssName";
import Link from "next/link";
import { useState } from "react";

export default function Product(props) {
  const [problem, setProblem] = useState(props.searchParams.p);

  return (
    <div className="h-full p-4 border text-sm">
      <h2 className="font-black mb-2 ">기본 기획</h2>
      <label>문제점</label>
      {props.searchParams.p == null ? (
        <input value={problem} onChange={(e) => setProblem(e.target.value)} className={ccss.input + " pl-2 w-full"} />
      ) : (
        <p className="w-full p-2 rounded bg-gray-50 border font-bold text-green-500">{props.searchParams.p}</p>
      )}
      <div className="flex items-center">
        <Link href={`/ideapad?p=${problem}`} className={ccss.headerBtn + " mt-2 ml-auto"}>
          다음
        </Link>
      </div>
      {/* <label>이유</label>
      <input className={ccss.input + " pl-2 w-full"} />
      <label>해결</label>
      <input className={ccss.input + " pl-2 w-full"} />
      <label>분류</label>
      <input className={ccss.input + " pl-2 w-full"} />
      <label>규모</label>
      <input className={ccss.input + " pl-2 w-full"} />
      <label>관계</label>
      <input className={ccss.input + " pl-2 w-full"} />
      <label>법</label>
      <input className={ccss.input + " pl-2 w-full"} />
      <label>지원금</label>
      <input className={ccss.input + " pl-2 w-full"} />
      <label>정의 누구</label>
      <input className={ccss.input + " pl-2 w-full"} />
      <label>정의 언제</label>
      <input className={ccss.input + " pl-2 w-full"} />
      <label>정의 무엇</label>
      <input className={ccss.input + " pl-2 w-full"} />
      <label>정의 어떻게</label>
      <input className={ccss.input + " pl-2 w-full"} />
      <label>제공</label>
      <input className={ccss.input + " pl-2 w-full"} /> */}
    </div>
  );
}

{
  /* <label>서비스/상품 이름</label>
<input className={ccss.input + " pl-2 w-full"} /> */
}
