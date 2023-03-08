import { createContext, useState, useContext, useEffect } from "react"
import { CartContextType, CartItem } from "./types"

export const CartContext = createContext<CartContextType | null>(null)

export const CartContextProvider = ({ children }: { readonly children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[] | undefined>(undefined)

  useEffect(() => {
    setCartInLocalStorage(cart)
  }, [cart])

  useEffect(() => {
    setCart(getCartFromLocalStorage())
  }, [])

  const getCartFromLocalStorage = () => {
    try {
      const localCart = localStorage.getItem("cart")
      if (localCart) {
        return JSON.parse(localCart)
      }
      return undefined
    } catch (error) {
      return undefined
    }
  }

  const setCartInLocalStorage = (cart: CartItem[] | undefined) => {
    if (cart === undefined) return
    return localStorage.setItem("cart", JSON.stringify(cart))
  }

  const getAllItemsQuantity = () => {
    return cart === undefined ? 0 : cart.reduce((acc, item) => acc + item.qty, 0)
  }

  const handleAddProduct = (product: CartItem) => {
    const productAlreadyAdded = cart?.filter((item) => item.id === product.id)

    if (productAlreadyAdded?.length) {
      setCart((prev) =>
        prev?.map((item) => {
          if (item.id === product.id) {
            return { ...item, qty: item.qty + product.qty }
          } else {
            return item
          }
        })
      )
    } else {
      setCart((prev) => (prev === undefined ? [product] : [...prev, product]))
    }
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        handleAddProduct,
        getAllItemsQuantity
      }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => {
  const cartContext = useContext(CartContext)
  if (!cartContext) {
    throw new Error("Wrap components using CartContextProvider")
  }
  return cartContext
}
