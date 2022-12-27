import Link from "next/link"
import { useContext } from "react"
import { AppContext } from "../../context/AppContext"
import { LogoSvg } from "../LogoSvg/LogoSvg"
import { NavMenu } from "../NavMenu/NavMenu"
import { Searchbar } from "../Searchbar/Searchbar"

export const Nav = () => {
  const { appState } = useContext(AppContext)
  const toggled = appState.searchBarToggled

  return (
    <nav
      className={`flex items-center justify-center w-full ${
        toggled ? "h-28" : "h-16"
      } bg-graySemiDark`}>
      <div className="flex items-center justify-between flex-col gap-4 w-5/6">
        <div className="flex items-center justify-between w-full">
          <Link href="/">
            <LogoSvg />
          </Link>

          <NavMenu />
        </div>

        {toggled && <Searchbar />}
      </div>
    </nav>
  )
}
