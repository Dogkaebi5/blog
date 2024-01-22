"use client";
import { useEffect, useState } from "react";
import syllable from "./yueYin";

export default function Syllable() {
  const [initials, setInitials] = useState([]);
  const [vowels, setVowels] = useState([]);
  const [initial, setInitial] = useState("전체");
  const [vowel, setVowel] = useState("전체");

  const yueYin = syllable.yueYin;
  const initialOptions = syllable.initial;
  const vowelOptions = syllable.vowel;

  useEffect(() => {
    setInitials(syllable.initial);
    setVowels(syllable.vowel);
  }, []);

  const selectClass = "border rounded-lg p-1 w-20 ml-2 text-center";
  const intialCalss = "text-sm border text-pink-600";
  const vowelCalss = "text-sm border text-blue-600";

  const handleInitial = (e) => {
    setInitial(e.target.value);
    if (e.target.value == "전체") {
      setInitials(syllable.initial);
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
    <div className="w-full mt-8 text-center">
      <div className="md:flex justify-center mb-6">
        <div className="flex justify-center mx-2">
          <p>성모(聲母)</p>
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
        </div>
        <div className="flex justify-center mx-2">
          <p>운모(韻母)</p>
          <select value={vowel} className={selectClass} onChange={handleVowel}>
            <option value="전체">전체</option>
            {vowelOptions.map((v) => (
              <option value={v} key={v + 1}>
                {v}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-center mx-2">
          <p>성조(聲調)</p>
          <select className={selectClass}>
            <option>전체</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
          </select>
        </div>
      </div>
      <table className="mx-auto">
        <tr>
          <td className={intialCalss}></td>
          {initials.map((i) => (
            <td className={intialCalss} key={i + 2}>
              {i}
            </td>
          ))}
        </tr>
        {vowels.map((v) => (
          <tr key={v}>
            <td className={vowelCalss}>{v}</td>
            {initials.map((i) => {
              let init;
              i == "-" ? (init = "") : (init = i);
              return (
                <td className="text-sm border" key={i + 3}>
                  {yueYin.includes(init + v) ? init + v : ""}
                </td>
              );
            })}
          </tr>
        ))}
      </table>
    </div>
  );
}
