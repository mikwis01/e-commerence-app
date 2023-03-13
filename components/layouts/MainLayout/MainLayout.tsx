import { Footer } from "../../modules/Footer/Footer"
import { Nav } from "../../modules/Nav/Nav"
import { MobileMenu } from "../../modules/MobileMenu/MobileMenu"
import { useContext } from "react"
import { AppContext } from "../../../context/AppContext/AppContext"
import Head from "next/head"

type Props = {
  children?: React.ReactNode
}

export const MainLayout: React.FC<Props> = ({ children }) => {
  const { appState } = useContext(AppContext)

  return (
    <>
      <Head key={"general_head"}>
        <title>G TECH</title>
        <meta name="description" content="G-TECH e-commerence app." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="flex flex-col py-8 gap-8 items-center min-h-[80vh]">{children}</main>
      <Footer />
      {appState.mobileMenu && <MobileMenu />}
    </>
  )
}
