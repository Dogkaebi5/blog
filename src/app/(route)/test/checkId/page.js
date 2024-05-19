"use client";

import { setIdFromTc } from "@/app/controller/handleId";
import { useState } from "react";

export default function CheckId() {
  const [value, setValue] = useState();
  const [id, setId] = useState();
  function handleClick() {
    setId(setIdFromTc(value));
  }

  const [val, setVal] = useState();
  const [time, setTime] = useState();
  function handleClick2() {
    let timestamp = new Date(val * 1000);
    console.log(timestamp);
    setTime(timestamp.toLocaleDateString());
  }
  return (
    <>
      code체크
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={handleClick}>check</button>
      <p>code: {id}</p>
      <hr />
      시간계산
      <input value={val} onChange={(e) => setVal(e.target.value)} />
      <button onClick={handleClick2}>check</button>
      <p>time: {time}</p>
    </>
  );
}
