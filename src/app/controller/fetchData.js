async function fetchData() {
  try {
    const res = await fetch("/json/data.json");
    console.log(res);
    const jsonData = await res.json();
    return jsonData;
  } catch (err) {
    console.error("Err fetch :", err);
    return null;
  }
}

export { fetchData };