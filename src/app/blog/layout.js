import Heros from "../components/Heros";

export default function RootLayout({ children }) {
  return (   
    <>
      <Heros/>
      {children}
    </>
  )
}
