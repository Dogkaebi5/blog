// 임시 블로그 데이터

const res = await fetch("http://localhost:3000/json/data.json");
const fetchData = await res.json();

export default fetchData;
