import dbPost from "./readDbPost";
import dbTc from "./readDbTc";
import dbWord from "./readDbWord";
////////
// 카테고리, 페이지 확인 후, 데이터 처리 및 응답

export function setCardList(category, pageNum, maxCardInPage) {
  const dbTcArr = Object.values(dbTc);

  function setCategoryData() {
    // id 최신순 return (sort b - a)
    if (category == "tc") return dbTcArr.sort((a, b) => b.sortId - a.sortId);
    if (category == "word") return dbWord.sort((a, b) => b.sortId - a.sortId);
    // 해당 카테고리 데이터 return (filter). 시간순
    else if (category != null) return dbPost.filter((post) => post.category == category).sort((a, b) => b.createdDate - a.createdDate);
    // 카테고리가 없으면 시간순 전체 return.
    return dbPost.sort((a, b) => b.createdDate - a.createdDate);
  }
  const categoryData = setCategoryData();

  // 현재 페이지의 카드 수량
  const maxCard = categoryData.length - pageNum * maxCardInPage >= 0 ? maxCardInPage : categoryData.length % maxCardInPage;

  // 시작 & 마지막 카드 id
  const startNum = (pageNum - 1) * maxCardInPage;
  const endNum = startNum + maxCard;

  const setResult = () => {
    let cardList = [];
    let allLength = categoryData.length;
    for (let i = startNum; i < endNum; i++) {
      cardList.push(categoryData[i]);
    }
    return {
      list: cardList,
      allLength: allLength,
    };
    // 리스트, pageNav용 length return
  };

  return setResult();
}
