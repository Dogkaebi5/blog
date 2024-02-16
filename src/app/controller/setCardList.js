import { fetchData } from "./fetchData";

async function setCardList(path, tag, btnNum) {
  let result = [];
  let maxCard = 8; //마지막 8개 미만 처리 추가 필요
  let startNum = 1 - 1; //임시 btnNum 대체
  const jsonData = await fetchData();
  const allData = jsonData.data;

  function setCategories() {
    if (allData == null) return null;
    if (path == "cantonese")
      return allData
        .filter((post) => post.category == path)
        .sort((a, b) => b.id - a.id);
    if (tag != null)
      return allData
        .filter((post) => post.category == tag)
        .sort((a, b) => b.id - a.id);
    return allData.sort((a, b) => b.id - a.id);
  }
  const categoryData = setCategories();

  for (startNum; startNum < maxCard; startNum++) {
    result.push(categoryData[startNum]);
  }
  return result;
}

export { setCardList };
