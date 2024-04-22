import CardList from "@/app/components/CardList";
import PageNavgation from "@/app/components/Pagination";
import { setCardList } from "@/app/controller/setCardList";
import Heros from "@components/Heros";
import SubNav from "@components/SubNav";

export default async function Conversation(props) {
  const path = "tc";
  const page = props.searchParams.page ?? 1;
  const maxCardInPage = 8;
  const data = setCardList("cantonese", page, maxCardInPage);
  const maxPages = Math.ceil(data.allLength / maxCardInPage);

  return (
    <>
      <Heros path={path} />
      <SubNav path={path} slug={"conversation"} />
      <CardList path={"blog"} data={data.list} />
      <PageNavgation page={page} maxPages={maxPages} />
    </>
  );
}
