import { ApolloClient, InMemoryCache } from "@apollo/client"

const GRAPHQL_URI = process.env.NEXT_PUBLIC_GRAPHQL_URI

export const apolloClient = new ApolloClient({
  uri: GRAPHQL_URI,
  cache: new InMemoryCache()
})
