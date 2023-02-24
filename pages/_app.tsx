import type { AppProps } from "next/app"
import { AppContextProvider } from "../context/AppContext/AppContext"
import { ApolloProvider } from "@apollo/client"
import { apolloClient } from "../apollo/client"
import "../styles/globals.css"
import { CartContextProvider } from "../context/CartContext/CartContext"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <CartContextProvider>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </CartContextProvider>
    </AppContextProvider>
  )
}
