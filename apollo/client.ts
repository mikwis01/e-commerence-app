import { ApolloClient, InMemoryCache } from "@apollo/client"

export const apolloClient = new ApolloClient({
  uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clbuso54x2zi201us9jafclyu/master",
  cache: new InMemoryCache()
})
