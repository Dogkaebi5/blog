import Link from "next/link";
import * as ccss from "@controller/cssName";

const CnCard = (props) => {
  return (
    <Link key={props.id} className={ccss.cnCard} href={`/cantonese/${props.id}`}>
      <p className={ccss.cnCardJutYin}>{props.data.yueYin}</p>
      <h1 className={ccss.cnCardTC}>{props.data.tc}</h1>
      <p className={ccss.cnCardTitle}>{props.data.title}</p>
    </Link>
  );
};

export default CnCard;
