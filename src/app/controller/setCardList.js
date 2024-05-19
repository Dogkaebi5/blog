import { hanData } from "./han";
import dbPost from "./readDbPost";
import { wordData } from "./word";
////////
// 카테고리, 페이지 확인 후, 데이터 처리 및 응답

// 전체 데이터는 외부 변수로 이동
const dbTcArr = Object.values(hanData).sort((a, b) => b.sortId - a.sortId);
const dbWordArr = Object.values(wordData).sort((a, b) => b.sortId - a.sortId);
const dbPostArr = dbPost.sort((a, b) => b.createdDate - a.createdDate);

dbTcArr.map((value) => {
  for (let key in hanData) {
    if (hanData[key].tc == value.tc) return (value.id = key);
  }
});

dbWordArr.map((value) => {
  for (let key in wordData) {
    if (wordData[key].sortId == value.sortId) return (value.id = key);
  }
});

export function setCardList(category, pageNum, maxCardInPage) {
  const data = category == "tc" ? dbTcArr : category == "word" ? dbWordArr : category == null ? dbPostArr : dbPostArr.filter((post) => post.category == category);
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
