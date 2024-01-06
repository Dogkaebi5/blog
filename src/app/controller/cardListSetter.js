async function fetchData() {
  try {
    const res = await fetch("/json/data.json");
    const jsonData = await res.json();
    return jsonData;
  } catch (err) {
    console.error("Err fetch :", err);
    return null;
  }
}

async function setList(path, tag) {
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

export { setList };
