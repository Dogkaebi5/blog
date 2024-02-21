import Link from "next/link";
import { setIdFromTc } from "../controller/handleId";
import * as ccss from "@/app/controller/cssName";

const CnCard = (props) => {
  const data = props.data;
  const id = setIdFromTc(data.tc);
  return (
    <Link key={id} className={ccss.cnCard} href={`/cantonese/${id}`}>
      <p className={ccss.cnCardJutYin}>{data.yueYin}</p>
      <h1 className={ccss.cnCardTC}>{data.tc}</h1>
      <p className={ccss.cnCardTitle}>{data.title}</p>
    </Link>
  );
};

export default CnCard;
