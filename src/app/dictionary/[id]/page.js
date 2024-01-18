"use client";

export default function Read(props) {
  // const res = await fetch("http://localhost:3000//json/data.json");
  // const jsonData = await res.json();
  // const allData = await jsonData.data;
  // const data = allData.filter((obj) => {
  //   if (obj.id == Number(props.params.id)) {
  //     return obj;
  //   }
  // });
  const character = "一";
  const syllabel = "jat1";
  const phrases = ["一往無前", "一事無成", "一五一十", "一心一意", "一言為定"];
  const audioUrlOrigin =
    "https://humanum.arts.cuhk.edu.hk/Lexis/lexi-mf/sound/";

  const audioUrl = `${audioUrlOrigin}/${syllabel}.Mp3`;
  const handleAudio = () => {
    const audio = new Audio(audioUrl);
    audio.play();
  };

  const contentClass = "bg-white px-3 py-2 text-center mt-1";
  const smTieleClass = "text-sm mt-2";

  return (
    <>
      <div className="mt-10 p-4 bg-slate-200">
        <p className="font-semibold mb-2">한자 (繁體字)</p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8">
          <div className="min-w-36">
            <h1 className="text-center text-9xl bg-white p-2">{character}</h1>
          </div>

          <div className="min-w-36">
            <p className={smTieleClass}>음절 (音節)</p>
            <p
              onClick={handleAudio}
              className={`${contentClass} underline hover:text-gray-400`}
            >
              {syllabel}
            </p>
            <p className={smTieleClass}>UTF-8</p>
            <p className={contentClass}>{character.codePointAt(0)}</p>
          </div>
          <div className="min-w-36">
            <p className={smTieleClass}>간체자 (简体字)</p>
            <p className={contentClass}>一</p>
            <p className={smTieleClass}>보통화 (拼音)</p>
            <p className={contentClass}>yī</p>
          </div>
          <div className="min-w-36">
            <p className={smTieleClass}>한국 음·한자</p>
            <p className={contentClass}>한 일</p>
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-50">
        <p className="text-sm p-4">
          구분 : <span>숫자</span>
        </p>
      </div>
      <hr className="border-gray-400" />
      <div className="p-4">
        <p>1. 숫자 일(1), 하나</p>
      </div>
      <hr className="border-gray-400" />
      <div className="p-4">
        <p className="font-semibold mb-4">성어</p>
        <p>
          {phrases.map((phrase) => {
            return (
              <span key={phrase}>
                <span className="text-blue-600">{phrase}</span>
                <span> , </span>
              </span>
            );
          })}
        </p>
        <hr />
      </div>
    </>
  );
}
