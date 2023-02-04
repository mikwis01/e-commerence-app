import { useContext } from "react"
import { FaBars } from "react-icons/fa"
import { AppContext } from "../../context/AppContext"

export const HamburgerMenuButton = () => {
  const { handleMobileMenuToggle } = useContext(AppContext)

  return (
    <button
      className="text-white bg-gradient-to-b from-purpleLight to-purpleDark w-10 h-8 flex items-center justify-center rounded md:hidden"
      onClick={handleMobileMenuToggle}>
      <FaBars />
    </button>
  )
}
