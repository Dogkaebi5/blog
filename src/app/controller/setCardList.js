import { fetchData } from "./fetchData";

async function setCardList(path, tag, btnNum) {
  // Data array
  const jsonData = await fetchData();
  const allData = jsonData.data;
  // [1,2,3 ~ 20]

  let maxCards = 0;

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

export { setCardList };
