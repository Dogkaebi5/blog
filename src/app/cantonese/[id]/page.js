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
    <div className="mt-10 p-4 bg-slate-300">
      <div className="flex">
        <div>
          <p>번체자 繁體</p>
          <h1 className="text-9xl bg-slate-100 p-2 mr-2">一</h1>
        </div>
        <div>
          <p>간체자 简体</p>
          <h1 className="bg-slate-100 px-3 py-2 text-center inline-block">
            一
          </h1>
        </div>
      </div>
    </div>
  );
}
