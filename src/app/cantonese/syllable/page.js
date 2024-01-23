"use client";
import { useEffect, useState } from "react";
import syllable from "../../dictionary/yueYin";
import Link from "next/link";

export default function Syllable() {
  const [initials, setInitials] = useState([]);
  const [vowels, setVowels] = useState([]);
  const [initial, setInitial] = useState("전체");
  const [vowel, setVowel] = useState("전체");

  const yueYin = syllable.yueYin;
  const initialOptions = Object.keys(syllable.initial);
  const vowelOptions = syllable.vowel;

  useEffect(() => {
    setInitials(Object.keys(syllable.initial));
    setVowels(syllable.vowel);
  }, []);

  const labelClass = "text-sm font-bold";
  const boxClass = "justify-center m-2 p-4 rounded-xl bg-slate-100";
  const selectClass =
    "border rounded-lg my-2 p-1 text-center sm:min-w-40 w-full";
  const linkClass = "text-xs border rounded-lg underline p-1 bg-slate-200";
  const intialCalss = "text-sm border text-pink-600";
  const vowelCalss = "text-sm border text-blue-600";

  const handleInitial = (e) => {
    setInitial(e.target.value);
    if (e.target.value == "전체") {
      setInitials(Object.keys(syllable.initial));
    } else {
      setInitials([e.target.value]);
    }
  };
  const handleVowel = (e) => {
    setVowel(e.target.value);
    if (e.target.value == "전체") {
      setVowels(syllable.vowel);
    } else {
      setVowels([e.target.value]);
    }
  };

  return (
    <div className="text-center">
      <div className="my-6 sm:w-fit w-full mx-auto">
        <div className="sm:flex justify-center">
          <div className={boxClass}>
            <p className={labelClass}>성모(聲母)</p>
            <select
              value={initial}
              className={selectClass}
              onChange={handleInitial}
            >
              <option value="전체">전체</option>
              {initialOptions.map((i) => (
                <option value={i} key={i + 1}>
                  {i}
                </option>
              ))}
            </select>
            <Link href={"/"}>
              <p className={linkClass}>More &gt;&gt;</p>
            </Link>
          </div>
          <div className={boxClass}>
            <p className={labelClass}>운모(韻母)</p>
            <select
              value={vowel}
              className={selectClass}
              onChange={handleVowel}
            >
              <option value="전체">전체</option>
              {vowelOptions.map((v) => (
                <option value={v} key={v + 1}>
                  {v}
                </option>
              ))}
            </select>
            <Link href={"/"}>
              <p className={linkClass}>More &gt;&gt;</p>
            </Link>
          </div>
          <div className={boxClass}>
            <p className={labelClass}>성조(聲調)</p>
            <select className={selectClass}>
              <option>전체</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
            </select>
            <Link href={"/"}>
              <p className={linkClass}>More &gt;&gt;</p>
            </Link>
          </div>
        </div>
        <div className={linkClass + " mt-2 font-bold"}>
          <Link href={"/cantonese/syllableSp"}>간단하게 보기 &gt;&gt;</Link>
        </div>
      </div>

      <table className="mx-auto">
        <tbody>
          <tr>
            <td className={intialCalss}></td>
            {initials.map((i) => (
              <td className={intialCalss} key={i + 2}>
                <Link href={`/dictionary/initial/${i}`}>{i}</Link>
              </td>
            ))}
          </tr>
          {vowels.map((v) => (
            <tr key={v}>
              <td className={vowelCalss}>
                <Link href={`/dictionary/initial/${v}`}>{v}</Link>
              </td>
              {initials.map((i) => {
                let init;
                i == "-" ? (init = "") : (init = i);
                return (
                  <td className="text-sm border" key={i + 3}>
                    {yueYin.includes(init + v) ? (
                      <Link href={`/dictionary/yueyin/${init + v}`}>
                        {init + v}
                      </Link>
                    ) : (
                      ""
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
