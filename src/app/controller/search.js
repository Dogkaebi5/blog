import dbTc from "./readDbTc";
import dbPost from "./readDbPost";
import dbWord from "./readDbWord";
import { syllable } from "./yueYin";

export function search(quary) {
  if (quary == null || quary == undefined || quary?.length < 1) return null;

  const engOnlyRegex = /^[a-zA-Z]*$/g;

  const setTcRes = () => {
    let tcs = [];
    Object.values(dbTc).map((data) => {
      if (data.tc == quary) return tcs.push(data);
      if (data.cn == quary) return tcs.push(data);
      if (data.mean.includes(quary)) return tcs.push(data);
      if (data.category.includes(quary)) return tcs.push(data);
      if (data.yueYin.includes(quary)) return tcs.push(data);
      if (data.yueYin.replace(/\d/g, "").includes(quary.replace(/\d/g, ""))) return tcs.push(data);
      if (data.mandarin?.includes(quary)) return tcs.push(data);
    });
    if (tcs.length) {
      const tcSet = new Set(tcs);
      return [...tcSet];
    }
    return null;
  };

  const setSyllableRes = () => {
    const noDigit = quary.replaceAll(/\d/g, "");
    if (engOnlyRegex.test(noDigit)) {
      if (syllable.yueYin[noDigit] != undefined) return noDigit;
    }
    return null;
  };

  const setWordRes = () => {
    let words = [];
    Object.values(dbWord).map((data) => {
      if (data.tc.includes(quary)) return words.push(data);
      if (data.cn?.includes(quary)) return words.push(data);
      if (data.mean.includes(quary)) return words.push(data);
      if (data.category.includes(quary)) return words.push(data);
      if (quary.replaceAll(/\d/g, "") != "") {
        if (data.yueYin.replaceAll(/\d/g, "").includes(quary.replaceAll(/\d/g, ""))) return words.push(data);
      }
      if (data.mandarin?.includes(quary)) return words.push(data);
    });
    if (words.length) {
      const wordSet = new Set(words);
      return [...wordSet];
    }
    return null;
  };

  const setPostRes = () => {
    let posts = [];
    const cantonesePost = dbPost.filter((post) => post.category == "cantonese");
    cantonesePost.map((data) => {
      if (data.title.includes(quary)) posts.push(data);
      if (data.summary.includes(quary)) posts.push(data);
      if (data.related?.includes(quary)) posts.push(data);
    });
    if (posts.length) {
      const postSet = new Set(posts);
      return [...postSet];
    }
    return null;
  };

  return {
    tcs: setTcRes(),
    syllable: setSyllableRes(),
    words: setWordRes(),
    posts: setPostRes(),
  };
}
