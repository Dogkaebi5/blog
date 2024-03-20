import BlogCardList from "@components/BlogCardList";
import Heros from "@components/Heros";
import SubNav from "@components/SubNav";

export default function Conversation(props) {
  return (
    <>
      <Heros path={"cantonese"} />
      <SubNav path={"cantonese"} />
      <BlogCardList path={"cantonese"} query={props.searchParams} />
    </>
  );
}
