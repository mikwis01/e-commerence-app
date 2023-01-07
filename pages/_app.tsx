import type { AppProps } from "next/app"
import { ContextProvider } from "../context/AppContext"
import { ApolloProvider } from "@apollo/client"
import { apolloClient } from "../apollo/client"
import "../styles/globals.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ContextProvider>
  )
}
