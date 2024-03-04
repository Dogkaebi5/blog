import { fetchData } from "./fetchData";

export async function setCardList(category, pageNum) {
  const jsonData = await fetchData();

  function setCategoryData() {
    if (jsonData.data == null) return null;
    if (category != null)
      return jsonData.data
        .filter((post) => post.category == category)
        .sort((a, b) => b.id - a.id);
    return jsonData.data.sort((a, b) => b.id - a.id);
  }

  const setMaxCard = () => {
    return categoryData.length - pageNum * 8 >= 0 ? 8 : categoryData.length % 8;
  };

  const categoryData = setCategoryData();
  const maxCard = setMaxCard();
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
  };

  return setResult();
}
