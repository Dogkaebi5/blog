import BlogCardList from "@components/BlogCardList";
import Heros from "@components/Heros";
import SubNav from "@components/SubNav";

export default function Conversation() {
  return (
    <>
      <Heros path={"cantonese"} />
      <SubNav path={"cantonese"} />
      <BlogCardList />
    </>
  );
}
