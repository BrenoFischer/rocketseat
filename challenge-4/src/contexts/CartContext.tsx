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
    addProductToCart: (newProduct: Product) => void;
}

interface CartProviderProps {
    children: React.ReactNode;
}

export const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: CartProviderProps) {
    const [products, setProducts] = useState<Product[]>([]);

    function addProductToCart(newProduct: Product) {
        setProducts(state => [...state, newProduct]);
    }

  return (
    <CartContext.Provider
      value={{
        products,
        addProductToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
