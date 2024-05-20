import { hanData } from "./han";
import { wordData } from "./word";

import fs from "fs";
import path from "path";

import matter from "gray-matter";
////////
// 카테고리, 페이지 확인 후, 데이터 처리 및 응답

// 전체 데이터는 외부 변수로 이동
const tcArr = Object.values(hanData).sort((a, b) => b.sortId - a.sortId);
const wordArr = Object.values(wordData).sort((a, b) => b.sortId - a.sortId);

const directoryPath = path.join(process.cwd(), "public/post");
const filesName = fs.readdirSync(directoryPath);
const postArr = filesName.map((file) => {
  const data = matter(fs.readFileSync(directoryPath + "/" + file, "utf8")).data;
  return data;
});
postArr.sort((a, b) => b.date - a.date);

tcArr.map((value) => {
  for (let key in hanData) {
    if (hanData[key].tc == value.tc) return (value.id = key);
  }
});

wordArr.map((value) => {
  for (let key in wordData) {
    if (wordData[key].sortId == value.sortId) return (value.id = key);
  }
});

export function setCardList(category, pageNum, maxCardInPage) {
  const data = category == "tc" ? tcArr : category == "word" ? wordArr : category == null ? postArr : postArr.filter((post) => post.category == category);
  const dataLength = data.length;
  // 현재 페이지의 카드 수량
  const maxCard = dataLength - pageNum * maxCardInPage >= 0 ? maxCardInPage : dataLength % maxCardInPage;
  // 시작 & 마지막 카드 id
  const startNum = (pageNum - 1) * maxCardInPage;
  const endNum = startNum + maxCard;

  return {
    list: data.slice(startNum, endNum),
    allLength: dataLength,
  };
}
