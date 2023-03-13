import { GetStaticPropsContext } from "next"
import { ParsedUrlQuery } from "querystring"

export type InferGetStaticPathsType<T> = T extends () => Promise<{
  readonly paths: ReadonlyArray<{ readonly params: infer R }>
}>
  ? R extends ParsedUrlQuery
    ? GetStaticPropsContext<R>
    : never
  : never

export interface ProductPageItem {
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
  }[]
}
