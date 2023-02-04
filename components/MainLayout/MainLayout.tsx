import { Footer } from "../Footer/Footer"
import { Nav } from "../Nav/Nav"
import { MobileMenu } from "../MobileMenu/MobileMenu"
import { useContext } from "react"
import { AppContext } from "../../context/AppContext"

type Props = {
  children?: React.ReactNode
}

export const MainLayout: React.FC<Props> = ({ children }) => {
  const { appState } = useContext(AppContext)

  return (
    <>
      <Nav />
      <main className="flex flex-col py-8 gap-8 items-center">{children}</main>
      <Footer />
      {appState.mobileMenu && <MobileMenu />}
    </>
  )
}
