import { useContext } from "react"
import { FaAngleDown, FaAngleUp } from "react-icons/fa"
import { AppContext } from "../../context/AppContext"
import { useToggle } from "./useToggle"

export const SearchbarDropdownButton = () => {
  // const { setAppState } = useContext(AppContext)

  // const handleToggle = () => {
  //   setAppState((prev) => ({ ...prev, searchBarToggled: !prev.searchBarToggled }))
  // }

  const [toggled, handleToggle] = useToggle()

  return (
    <button
      className="text-white bg-gradient-to-b from-purpleLight to-purpleDark w-10 h-8 flex items-center justify-center rounded md:hidden"
      onClick={handleToggle}>
      {toggled ? <FaAngleUp /> : <FaAngleDown />}
    </button>
  )
}
