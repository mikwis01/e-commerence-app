import { useDiscountedProductsQuery } from "../../../generated/graphql"
import { useRouter } from "next/router"

export const LandingDiscountedProducts = () => {
  const { data } = useDiscountedProductsQuery()
  const router = useRouter()

  return (
    <div className="bg-graySemiDark w-5/6 max-w-5xl rounded-md text-white py-5 flex flex-col items-center gap-5 md:grid md:place-items-center md:grid-cols-4 md:gap-0">
      <p className="font-semibold w-5/6 col-start-1 col-end-5 md:ml-[2%] md:place-self-start md:pb-5">
        Discounted products
      </p>
      {data?.discounted?.products.map((product) => (
        <div
          onClick={() => router.push(`product/${product.slug}`)}
          key={product.id}
          className={`bg-graySemiLight h-36 md:h-52 lg:h-72 w-5/6 rounded-md flex md:flex-col cursor-pointer hover:scale-105 transition-all`}>
          <img
            className="w-1/2 h-full object-scale-down object-center md:w-full md:h-1/2"
            src={product.images[0].url}
            alt={product.name}
          />
          <div className="w-1/2 h-full py-4 px-2 text-center flex flex-col gap-2 justify-center items-center md:w-full md:h-1/2">
            <h4 className="text-sm">
              {product.name.length > 16 ? `${product.name.slice(0, 12)}...` : product.name}
            </h4>
            <p className="w-5/6 text-xs text-purpleLight font-bold">{product.categories[0].name}</p>
            <h3 className="font-bold">{product.price} PLN</h3>
          </div>
        </div>
      ))}
    </div>
  )
}
