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

  return (
    <>
      <Head key={""}>
        <title>G TECH</title>
        <meta name="description" content="G-TECH e-commerence app." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <div className="text-white">
          <p>Id: {product.id}</p>
          <p>Name: {product.name}</p>
          <p>Price: {product.price}</p>
          <select className="text-black">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <br />
          <button
            onClick={() => handleAddProduct({ ...product, qty: 1 })}
            className="bg-orange-500 p-4">
            Add to cart
          </button>
        </div>
      </MainLayout>
    </>
  )
}

export default Product
