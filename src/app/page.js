import Link from "next/link";
import Heros from "./components/Heros";
import SubNav from "./components/SubNav";

export default function Home() {
  return (
    <>
      <Heros/>
      <SubNav/>
      it is home
      <Link href="/read/1">read 1</Link>
    </>
  )
}