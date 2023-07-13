import React, { createContext, useState } from 'react'

interface Product {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
    defaultPriceId: string;
}

interface CartContextType {
    products: Product[];
    cartIsOpen: boolean;
    addProductToCart: (newProduct: Product) => void;
    toggleCartState: () => void;
}

interface CartProviderProps {
    children: React.ReactNode;
}

export const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: CartProviderProps) {
    const [products, setProducts] = useState<Product[]>([]);
    const [cartIsOpen, setCartIsOpen] = useState(true);

    function addProductToCart(newProduct: Product) {
      setProducts(state => [...state, newProduct]);
    }

    function toggleCartState() {
      setCartIsOpen(!cartIsOpen)
    }

  return (
    <CartContext.Provider
      value={{
        products,
        cartIsOpen,
        addProductToCart,
        toggleCartState,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
