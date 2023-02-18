import { GetStaticPropsContext } from "next"
import { ParsedUrlQuery } from "querystring"

export type InferGetStaticPathsType<T> = T extends () => Promise<{
  readonly paths: ReadonlyArray<{ readonly params: infer R }>
}>
  ? R extends ParsedUrlQuery
    ? GetStaticPropsContext<R>
    : never
  : never
