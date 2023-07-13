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
    removeProductFromCart: (productId: string) => void; 
}

interface CartProviderProps {
    children: React.ReactNode;
}

export const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: CartProviderProps) {
    const [products, setProducts] = useState<Product[]>([]);
    const [cartIsOpen, setCartIsOpen] = useState(false);

    function addProductToCart(newProduct: Product) {
      setProducts(state => [...state, newProduct]);
    }

    function toggleCartState() {
      setCartIsOpen(!cartIsOpen)
    }

    function removeProductFromCart(productId: string) {
      const productsFiltered = products.filter(product => product.defaultPriceId != productId);

      setProducts(productsFiltered)
    }

  return (
    <CartContext.Provider
      value={{
        products,
        cartIsOpen,
        addProductToCart,
        toggleCartState,
        removeProductFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
