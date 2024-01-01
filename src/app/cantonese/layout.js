import Heros from "../components/Heros";
import SubNav from "../components/SubNav";

export default function RootLayout({ children }) {
  return (
    <>
      <Heros/>
      <SubNav/>
      {children}
    </>
  )
}
