import * as ccss from "@controller/cssName";

////////
// hero가 있는 페이지에서 prop.path별로 다르게 보이게 하기
// TODO: sub text 추가

const Heros = (props) => {
  const setTexts = () => {
    if (props.path == "") return ["DogKaebi's 코딩연습", "광둥어 블로그 개발 이야기"];
    if (props.path == "blog") return ["독깨비 노트", "수상한 아재의 일기장"];
    if (props.path == "tc") return ["粵", "광둥어🙆‍♂️ 광동어🙅‍♂️, 번간체(简繁)와 관계 없습니다"];
    return ["", ""];
  };
  const texts = setTexts();

  return (
    <div className={ccss.hero}>
      <h1 className={ccss.h1}>{texts[0]}</h1>
      <p>{texts[1]}</p>
    </div>
  );
};

export default Heros;
