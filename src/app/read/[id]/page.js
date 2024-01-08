export default async function Read(props) {
  const res = await fetch("http://localhost:3000//json/data.json");
  const jsonData = await res.json();
  const allData = await jsonData.data;
  const data = allData.filter((obj) => {
    if (obj.id == Number(props.params.id)) {
      return obj;
    }
  });

  return (
    <>
      <p>page : {props.params.id}</p>
      <p>page : {data[0].title}</p>
      <p>page : {data[0].content}</p>
    </>
  );
}
