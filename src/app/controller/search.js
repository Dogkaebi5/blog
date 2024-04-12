import dbTc from "./readDbTc";
import dbPost from "./readDbPost";
import dbWord from "./readDbWord";
import { syllable } from "./yueYin";

export function search(quary) {
  if (quary == null || quary == undefined) return null;
  if (quary.length < 1) return null;

  const engOnlyRegex = /^[a-zA-Z]*$/g;

  const setTcRes = () => {
    let tcs = [];
    dbTc.map((data) => {
      if (data.tc == quary) tcs.push(data);
      if (data.cn == quary) tcs.push(data);
      if (data.mean.includes(quary)) tcs.push(data);
      if (data.category.includes(quary)) tcs.push(data);
      if (data.yueYin.replace(/\d/g, "").includes(quary)) tcs.push(data);
      if (data.mandarin.includes(quary)) tcs.push(data);
    });
    const tcSet = new Set(tcs);
    return [...tcSet];
  };

  const setSyllableRes = () => {
    const noDigit = quary.replaceAll(/\d/g, "");
    if (engOnlyRegex.test(noDigit)) {
      if (syllable.yueYin[noDigit] != undefined) return noDigit;
    }
    return null;
  };

  return {
    tcs: setTcRes(),
    syllable: setSyllableRes(),
  };
}
