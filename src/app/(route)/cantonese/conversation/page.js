import CardList from "@/app/components/CardList";
import PageNavgation from "@/app/components/Pagenavgation";
import { setCardList } from "@/app/controller/setCardList";
import Heros from "@components/Heros";
import SubNav from "@components/SubNav";

export default async function Conversation(props) {
  const page = props.searchParams.page ?? 1;
  const maxCardInPage = 8;
  const data = await setCardList("cantonese", page, maxCardInPage);
  const maxPages = Math.ceil(data.allLength / maxCardInPage);

  return (
    <>
      <Heros path={"cantonese"} />
      <SubNav path={"cantonese"} slug={"conversation"} />
      <CardList path={"blog"} data={data.list} />
      <PageNavgation page={page} maxPages={maxPages} />
    </>
  );
}
