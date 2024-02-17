import { fetchData } from "./fetchData";

async function setCardList(path, tag, btnNum) {
  btnNum = 1; //임시 btnNum 대체

  let result = [];
  let maxCard;
  let startNum = btnNum - 1;

  const jsonData = await fetchData();
  const categoryData = setCategories(jsonData.data);

  function setCategories(allData) {
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

  categoryData.length - btnNum * 8 >= 0
    ? (maxCard = 8)
    : (maxCard = categoryData.length % 8);

  for (startNum; startNum < maxCard; startNum++) {
    result.push(categoryData[startNum]);
  }
  return result;
}

export { setCardList };
