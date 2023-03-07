interface ProductPageItem {
  readonly id: string
  readonly name: string
  readonly price: number
  readonly images: {
    url: string
  }[]
  readonly qty: number
  readonly description: string
  readonly categories: {
    name: string
  }
}

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

const Product = ({ product }: { product: ProductPageItem }) => {
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
        {/* I will separate this to multiple components in the future */}
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

            <div className="h-1/2 flex items-end py-4">
              <button
                onClick={() => handleAddProduct({ ...product, qty: 1 * select })}
                className="bg-gradient-to-b from-purpleLight to-purpleDark p-4 font-bold rounded-md w-full">
                Add to cart
              </button>
            </div>
          </div>
        </article>
      </MainLayout>
    </>
  )
}

export default Product
