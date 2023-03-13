import { useCartContext } from "../../../context/CartContext/CartContext"
import { ProductPageItem } from "../../../types/types"
import { useState } from "react"

export const ProductInfo = ({ product }: { product: ProductPageItem }) => {
  const { handleAddProduct } = useCartContext()
  const [select, setSelect] = useState(1)

  return (
    <article className="bg-graySemiDark w-5/6 max-w-5xl rounded-md text-white py-5 flex items-center justify-center gap-10 flex-col md:flex-row">
      <img
        className="w-5/6 md:w-[45%] md:h-[500px] bg-graySemiLight rounded-xl object-scale-down object-center"
        src={product.images[0].url}
        alt={product.name}
      />
      <div className="w-5/6 md:w-[45%] md:h-[500px] rounded-xl">
        <div className="flex flex-col gap-4 h-1/2">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <h4 className="text-xl font-semibold text-grayLight">$ {product.price}</h4>
          <ul>
            {product.categories.map((category) => (
              <li key={category.name} className="text-sm text-purpleLight font-bold">
                {category.name}
              </li>
            ))}
          </ul>
          <p>{product.description}</p>

          <div className="py-2 flex gap-4">
            <label htmlFor="qty">Qty:</label>
            <select
              name="qty"
              className=" w-16 h-8 bg-graySemiLight text-white"
              onChange={(e) => setSelect(Number(e.target.value))}
              value={select}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>

        <div className="h-1/2 flex items-end py-4 md:py-0">
          <button
            onClick={() => handleAddProduct({ ...product, qty: select })}
            className="bg-gradient-to-b from-purpleLight to-purpleDark p-4 font-bold rounded-md w-full">
            Add to cart
          </button>
        </div>
      </div>
    </article>
  )
}
