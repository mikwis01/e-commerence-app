import { FaBars } from "react-icons/fa"

export const HamburgerMenuButton = () => {
  return (
    <button className="text-white bg-gradient-to-b from-purpleLight to-purpleDark w-10 h-8 flex items-center justify-center rounded md:hidden">
      <FaBars />
    </button>
  )
}
