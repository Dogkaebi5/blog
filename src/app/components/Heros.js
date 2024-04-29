// hero가 있는 페이지에서 path별로 다르게 보이게 하기
const Heros = ({ path }) => {
  const texts = {
    tc: ["Cantonese", "粵", "중국 광동 방언. 홍콩과 마카오의 공식 언어"],
    blog: ["Blog", "DogKaeBi Blog", "중국/광둥 이야기, 블로그 개발 이야기, 일상 이야기"],
    "": ["Home", "DogKaebi's 코딩연습", "광둥어 블로그 개발 이야기"],
  };

  return (
    <div className="p-10 text-center">
      <p className="font-bold text-lg text-green-500">{texts[path][0]}</p>
      <h1 className="font-bold mb-2 text-3xl">{texts[path][1]}</h1>
      <p className="text-sm">{texts[path][2]}</p>
      <div className="mt-4 mx-auto h-0.5 w-20 bg-green-500 rounded-full" />
    </div>
  );
};

export default Heros;
