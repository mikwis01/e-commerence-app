import { FaAngleDown, FaAngleUp } from "react-icons/fa"
import { useContext } from "react"
import { AppContext } from "../../context/AppContext"

export const SearchbarDropdownButton = () => {
  const { appState, handleSearchbarToggle } = useContext(AppContext)

  return (
    <button
      className="text-white bg-gradient-to-b from-purpleLight to-purpleDark w-10 h-8 flex items-center justify-center rounded md:hidden"
      onClick={handleSearchbarToggle}>
      {appState.searchBar ? <FaAngleUp /> : <FaAngleDown />}
    </button>
  )
}
