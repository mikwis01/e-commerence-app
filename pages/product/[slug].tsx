type ProductData = {
  product: {
    id: string
    name: string
    price: number
    __typename?: string
  }
}

import {
  GetProductInfoDocument,
  GetProductInfoQuery,
  GetProductsSlugsDocument,
  GetProductsSlugsQuery
} from "../../generated/graphql"
import { apolloClient } from "../../apollo/client"

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

export const getStaticProps = async ({ params }: any) => {
  const slug = params?.slug
  const { data } = await apolloClient.query<GetProductInfoQuery>({
    query: GetProductInfoDocument,
    variables: { slug }
  })

  return {
    props: data
  }
}

const Product = ({ product }: ProductData) => {
  return (
    <div className="text-white">
      <p>Id: {product.id}</p>
      <p>Name: {product.name}</p>
      <p>Price: {product.price}</p>
    </div>
  )
}

export default Product
