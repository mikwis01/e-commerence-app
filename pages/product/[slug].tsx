import {
  GetProductInfoDocument,
  GetProductInfoQuery,
  GetProductsSlugsDocument,
  GetProductsSlugsQuery
} from "../../generated/graphql"
import { apolloClient } from "../../apollo/client"
import { InferGetStaticPathsType } from "../../types/types"
import { MainLayout } from "../../components/layouts/MainLayout/MainLayout"
import { ProductPageItem } from "../../types/types"
import { ProductInfo } from "../../components/templates/ProductInfo/ProductInfo"

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
  return (
    <MainLayout>
      <ProductInfo product={product} />
    </MainLayout>
  )
}

export default Product
