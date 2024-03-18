import { fetchData } from "./fetchData";
////////
// 카테고리, 페이지 확인 후, 데이터 처리 및 응답

export async function setCardList(category, pageNum) {
  // 임시 데이터 fetch
  // TODO: 임시 데이터 -> DB로 변경
  // TODO: maxCards 받아서 설정 or not?
  const jsonData = await fetchData();

  const currentURL = window.location.href;
  const params = new URLSearchParams(currentURL);

  // 해당 카테고리 데이터 return (filter)
  // 카테고리가 없으면 전체 return
  // id 최신순 return (sort b - a)
  function setCategoryData() {
    if (jsonData.data == null) return null;
    if (category != null) return jsonData.data.filter((post) => post.category == category).sort((a, b) => b.id - a.id);
    return jsonData.data.sort((a, b) => b.id - a.id);
  }
  const categoryData = setCategoryData();

  // 현재 페이지의 카드 수량
  // 임시 최대 카드 8
  const setMaxCard = () => {
    return categoryData.length - pageNum * 8 >= 0 ? 8 : categoryData.length % 8;
  };
  const maxCard = setMaxCard();

  // 시작 & 마지막 카드 id
  const startNum = (pageNum - 1) * 8;
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
