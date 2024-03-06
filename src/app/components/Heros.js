import * as ccss from "@/app/controller/cssName";

////////
// hero가 있는 페이지에서 prop.path별로 다르게 보이게 하기
// TODO: sub text 추가

const Heros = (props) => {
  let title;

  if (props.path == "") title = "독깨비 노트";
  if (props.path == "cantonese") title = "粵";

  return (
    <div className={ccss.hero}>
      <h1 className={ccss.h1}>{title}</h1>
      <p>This is {title} sub text</p>
    </div>
  );
};

export default Heros;
