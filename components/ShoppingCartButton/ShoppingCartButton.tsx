import { FaShoppingCart } from "react-icons/fa"
import { CartDropdown } from "../CartDropdown/CartDropdown"

export const ShoppingCartButton = () => {
  return (
    <div className="relative group">
      <button className="text-white bg-gradient-to-b from-purpleLight to-purpleDark w-10 h-8 items-center justify-center rounded hidden md:flex">
        <FaShoppingCart />
      </button>
      <CartDropdown />
    </div>
  )
}
