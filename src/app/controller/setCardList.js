import dbPost from "./readDbPost";
import dbTc from "./readDbTc";
import dbWord from "./readDbWord";
////////
// 카테고리, 페이지 확인 후, 데이터 처리 및 응답

// 전체 데이터는 외부 변수로 이동
const dbTcArr = Object.values(dbTc).sort((a, b) => b.sortId - a.sortId);
const dbWordArr = Object.values(dbWord).sort((a, b) => b.sortId - a.sortId);
const dbPostArr = dbPost.sort((a, b) => b.createdDate - a.createdDate);

export function setCardList(category, pageNum, maxCardInPage) {
  const categoryData = category == "tc" ? dbTcArr : category == "word" ? dbWordArr : category == null ? dbPostArr : dbPostArr.filter((post) => post.category == category);

  // 현재 페이지의 카드 수량
  const maxCard = categoryData.length - pageNum * maxCardInPage >= 0 ? maxCardInPage : categoryData.length % maxCardInPage;
  // 시작 & 마지막 카드 id
  const startNum = (pageNum - 1) * maxCardInPage;
  const endNum = startNum + maxCard;

  return {
    list: categoryData.slice(startNum, endNum),
    allLength: categoryData.length,
  };
}
