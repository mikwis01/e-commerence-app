import { useContext } from "react"
import { TfiClose } from "react-icons/tfi"
import { AppContext } from "../../context/AppContext"

export const MobileMenu = () => {
  const { handleMobileMenuToggle } = useContext(AppContext)

  return (
    <div className="bg-graySemiDark fixed w-full h-full top-0 left-0 flex flex-col text-white">
      <div className="relative flex justify-center w-full py-6">
        <h3 className="font-bold text-xl">Menu</h3>
        <button className="w-8 h-8 absolute left-8" onClick={handleMobileMenuToggle}>
          <TfiClose size={22} />
        </button>
      </div>
      <div className="border-b-2 opacity-20 w-full" />
      <ul className="flex flex-col gap-4 py-8 w-full justify-center items-center text-xl">
        <li>User account</li>
        <li>Cart</li>
      </ul>
    </div>
  )
}
