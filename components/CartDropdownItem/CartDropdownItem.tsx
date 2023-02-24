import { CartItem } from "../../context/CartContext/types"

export const CartDropdownItem = ({ data }: { data: CartItem }) => {
  console.log(data.qty)

  return (
    <div className="w-full bg-graySemiLight rounded-lg h-16 mt-2 flex">
      <img
        className="w-16 h-full object-scale-down object-center"
        src={data.images[0].url}
        alt={data.name}
      />
      <div className="flex-1 py-1 px-2 text-xs justify-between flex flex-col">
        <p>{data.name}</p>
        <div className="flex justify-between">
          <p className="text-[10px] opacity-50">Qty: {data.qty}</p>
          <p className="font-bold">${data.qty * data.price}</p>
        </div>
      </div>
    </div>
  )
}
