interface Image {
  url: string
}

export interface CartItem {
  readonly id: string
  readonly name: string
  readonly price: number
  readonly images: Image[]
  readonly qty: number
}

export interface CartContextType {
  readonly cart: CartItem[] | undefined
  readonly handleAddProduct: (product: CartItem) => void
  readonly getAllItemsQuantity: () => number
}
