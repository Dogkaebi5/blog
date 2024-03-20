export default async function fetchData() {
  try {
    const res = await fetch("http://localhost:3000/json/data.json");
    const jsonData = await res.json();
    return jsonData;
  } catch (err) {
    console.error("Err fetch :", err);
    return null;
  }
}
