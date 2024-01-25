import { fetchData } from "./fetchData";

async function setCardList(path, tag) {
  const jsonData = await fetchData();
  const allData = jsonData.data;
  let filteredData = allData.filter((post) => "/" + post.category == path);
  if (allData == null) return null;
  if (path == "/") return allData;
  if (tag != null) {
    filteredData = allData.filter((post) => post.tag == tag);
  }
  return filteredData;
}

export { setCardList };
