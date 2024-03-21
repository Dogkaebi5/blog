import fetchData from "./fetchData";
import dbTc from "./readDbTc";
import dbWord from "./readDbWord";
////////
// 카테고리, 페이지 확인 후, 데이터 처리 및 응답

export async function setCardList(category, pageNum, maxCardInPage) {
  // TODO: 임시 블로그 데이터 -> DB로 변경

  // 해당 카테고리 데이터 return (filter)
  // 카테고리가 없으면 전체 return
  // id 최신순 return (sort b - a)
  function setCategoryData() {
    if (category == "tc") return dbTc.sort((a, b) => b.sortId - a.sortId);
    if (category == "word") return dbWord.sort((a, b) => b.sortId - a.sortId);
    else if (category != null)
      return fetchData.data.filter((post) => post.category == category).sort((a, b) => b.id - a.id);
    return fetchData.data.sort((a, b) => b.id - a.id);
  }
  const categoryData = setCategoryData();

  // 현재 페이지의 카드 수량
  // 임시 최대 카드 8
  const maxCard =
    categoryData.length - pageNum * maxCardInPage >= 0 ? maxCardInPage : categoryData.length % maxCardInPage;

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
