import BlogCardList from "@/app/components/BlogCardList";
import Heros from "@/app/components/Heros";
import SubNav from "@/app/components/SubNav";

export default function Conversation() {
  return (
    <>
      <Heros path={"cantonese"} />
      <SubNav path={"cantonese"} />
      <BlogCardList />
    </>
  );
}
