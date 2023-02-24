import { CartDropdownItem } from "../CartDropdownItem/CartDropdownItem"
import { useCartContext } from "../../context/CartContext/CartContext"
import { CartItem } from "../../context/CartContext/types"

export const CartDropdown = () => {
  const { cart, getAllItemsQuantity } = useCartContext()

  return (
    <div className="absolute top-0 z-10 bg-graySemiDark w-56 h-96 md:translate-y-8 -translate-x-full ml-10 text-white shadow-md shadow-black rounded-lg hidden md:group-hover:flex p-4 flex-col">
      <p className="border-b-[1px] border-white/20 text-lg pb-2">Cart ({getAllItemsQuantity()})</p>
      <div className="w-full h-64 pt-2 overflow-auto">
        {cart?.map((item: CartItem) => (
          <CartDropdownItem key={item.id} data={item} />
        ))}
      </div>
      <button className="w-full h-10 bg-gradient-to-b from-green-500 to-green-700 rounded-lg font-semibold mt-4">
        View cart
      </button>
    </div>
  )
}
