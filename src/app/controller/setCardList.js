import { fetchData } from "./fetchData";

async function setCardList(path, tag) {
  const jsonData = await fetchData();
  const allData = jsonData.data;

  if (allData == null) return null;
  if (tag != null) return allData.filter((post) => post.category == tag);
  return allData;
}

export { setCardList };
