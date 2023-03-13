import Link from "next/link"
import { useContext } from "react"
import { AppContext } from "../../../context/AppContext/AppContext"
import { LogoSvg } from "../../elements/LogoSvg/LogoSvg"
import { NavMenu } from "../NavMenu/NavMenu"
import { Searchbar } from "../Searchbar/Searchbar"
import { useMediaQuery } from "./useMediaQuery"

export const Nav = () => {
  const { appState } = useContext(AppContext)
  const toggled = appState.searchBar

  const isDesktop = useMediaQuery("(min-width: 768px)")

  return (
    <nav
      className={`flex items-center justify-center w-full ${
        toggled && !isDesktop ? "h-28" : "h-16"
      } bg-graySemiDark`}>
      <div className="max-w-5xl flex items-center justify-between flex-col gap-4 w-5/6">
        <div className="flex items-center justify-between w-full">
          <Link href="/">
            <LogoSvg />
          </Link>

          {isDesktop && <Searchbar />}

          <NavMenu />
        </div>

        {toggled && !isDesktop && <Searchbar />}
      </div>
    </nav>
  )
}
