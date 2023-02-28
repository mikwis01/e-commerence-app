import {
  GetProductInfoDocument,
  GetProductInfoQuery,
  GetProductsSlugsDocument,
  GetProductsSlugsQuery
} from "../../generated/graphql"
import { apolloClient } from "../../apollo/client"
import { InferGetStaticPathsType } from "../../types/types"
import { useCartContext } from "../../context/CartContext/CartContext"
import { MainLayout } from "../../components/MainLayout/MainLayout"
import Head from "next/head"
import { CartItem } from "../../context/CartContext/types"
import { useState } from "react"

export const getStaticPaths = async () => {
  const { data } = await apolloClient.query<GetProductsSlugsQuery>({
    query: GetProductsSlugsDocument
  })

  const paths = data.products.map((product) => {
    return {
      params: { slug: product.slug }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({
  params
}: InferGetStaticPathsType<typeof getStaticPaths>) => {
  const slug = params?.slug
  const { data } = await apolloClient.query<GetProductInfoQuery>({
    query: GetProductInfoDocument,
    variables: { slug }
  })

  return {
    props: data
  }
}

const Product = ({ product }: { product: CartItem }) => {
  const { handleAddProduct } = useCartContext()
  const [select, setSelect] = useState(1)

  return (
    <>
      <Head key={""}>
        <title>G TECH</title>
        <meta name="description" content="G-TECH e-commerence app." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <article className="bg-graySemiDark w-5/6 max-w-5xl rounded-md text-white py-5 flex items-center justify-center gap-10">
          <img
            className="w-[45%] h-[500px] bg-graySemiLight rounded-xl object-scale-down object-center"
            src={product.images[0].url}
            alt={product.name}
          />
          <div className="w-[45%] h-[500px] rounded-xl flex flex-col gap-2">
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <h4 className="text-xl font-semibold text-grayLight">$ {product.price}</h4>
            <ul>
              <li>Some info</li>
              <li>Some info</li>
              <li>Some info</li>
              <li>Some info</li>
            </ul>
            <select
              className="text-black"
              onChange={(e) => setSelect(Number(e.target.value))}
              value={select}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <button
              onClick={() => handleAddProduct({ ...product, qty: 1 * select })}
              className="bg-orange-500 p-4">
              Add to cart
            </button>
          </div>
        </article>
      </MainLayout>
    </>
  )
}

export default Product
