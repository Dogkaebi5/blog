"use client";
import { useEffect, useState } from "react";
import syllable from "./yueYin";
import Link from "next/link";
import Heros from "@/app/components/Heros";
import SubNav from "@/app/components/SubNav";

export default function Syllable() {
  const [initials, setInitials] = useState([]);
  const [vowels, setVowels] = useState([]);
  const [initial, setInitial] = useState("전체");
  const [vowel, setVowel] = useState("전체");
  const [isHan, setIshan] = useState(false);

  const yueYin = Object.keys(syllable.yueYin);
  const initialOptions = Object.keys(syllable.initial);
  const vowelOptions = Object.keys(syllable.vowel);
  const yueYinDetails = Object.values(Object.values(syllable.yueYin));
  const hans = yueYinDetails.map((detail) => detail.han);
  let count = -1;

  const simpleSyllabelURL = "/cantonese/syllable/simple";
  const initialURL = "/cantonese/syllable/initial/";
  const yueYinURL = "/cantonese/syllable/yueyin/";

  useEffect(() => {
    setInitials(Object.keys(syllable.initial));
    setVowels(Object.keys(syllable.vowel));
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
      setVowels(Object.keys(syllable.vowel));
    } else {
      setVowels([e.target.value]);
    }
  };

  const handleIsHan = (e) => {
    console.log(e.target.value);
    setIshan(!isHan);
  };

  return (
    <>
      <Heros />
      <SubNav />
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
              <Link href={"/cantonese/syllable/initial"}>
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
              <Link href={"/cantonese/syllable/vowel"}>
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
              <Link href={"/cantonese/syllable/tone"}>
                <p className={linkClass}>More &gt;&gt;</p>
              </Link>
            </div>
          </div>
          <div className={linkClass + " mt-2 font-bold"}>
            <Link href={simpleSyllabelURL}>간단하게 보기 &gt;&gt;</Link>
          </div>
          <label className="relative inline-flex items-center cursor-pointer mt-4">
            <input
              type="checkbox"
              value={isHan}
              className="sr-only peer"
              onClick={handleIsHan}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              음절/한자
            </span>
          </label>
        </div>

        <table className="mx-auto">
          <tbody>
            <tr>
              <td className={intialCalss}></td>
              {initials.map((i) => (
                <td className={intialCalss} key={i + 2}>
                  <Link href={initialURL + i}>{i}</Link>
                </td>
              ))}
            </tr>
            {vowels.map((v) => {
              return (
                <tr key={v}>
                  <td className={vowelCalss}>
                    <Link href={initialURL + v}>{v}</Link>
                  </td>
                  {initials.map((i) => {
                    let init;
                    i == "-" ? (init = "") : (init = i);
                    if (yueYin.includes(init + v)) count++;
                    return (
                      <td className="text-sm border" key={i + 3}>
                        {yueYin.includes(init + v) ? (
                          <Link
                            href={yueYinURL + init + v}
                            className={"px-0.5"}
                          >
                            {isHan ? hans[count] : init + v}
                          </Link>
                        ) : (
                          ""
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
