import Link from "next/link";
import Heros from "./components/Heros";
import SubNav from "./components/SubNav";
import PageCard from "./components/PageCard";

export default function Home() {
  return (
    <>
      <Heros/>
      <SubNav/>
      it is home<br/>
      <PageCard/>
    </>
  )
}